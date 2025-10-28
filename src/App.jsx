// src/App.jsx
import React, { useState, useEffect } from "react";

// --- COMPONENTES ---
import MainHeader from "./assets/components/header/MainHeader.jsx";
import MainProduct from "./assets/components/product/MainProduct.jsx";
import PromocionBanner from "./assets/components/product/PromocionBanner.jsx";
import FeaturedProducts from "./assets/components/product/FeaturedProducts.jsx";
import FooterProduct from "./assets/components/product/FooterProduct.jsx";
import CategoryPage from "./assets/components/pages/CategoryPage.jsx";

// --- MODALES ---
import LoginModal from "./assets/components/modals/LoginModal.jsx";
import ProfilePhotoModal from "./assets/components/modals/ProfilePhotoModal.jsx";

// --- DATOS ---
import { users } from "../src/data/user.js";

// --- PÁGINAS SECUNDARIAS ---
const HomePage = () => (
  <>
    <MainProduct />
    <PromocionBanner />
    <FeaturedProducts />
    <FooterProduct />
  </>
);

const SalePage = () => (
  <div className="text-center py-24 bg-gray-50">
    <h1 className="text-5xl font-black text-gray-800">Otros</h1>
    <p className="text-gray-600 mt-4 max-w-lg mx-auto">
      Explora productos exclusivos y colecciones especiales.
    </p>
  </div>
);

const AboutPage = () => (
  <div className="text-center py-24 bg-gray-50">
    <h1 className="text-5xl font-black text-gray-800 mb-4">Acerca de ONIX3D</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Onix3Dprinter es una marca que crea soluciones innovadoras usando pensamiento
      crítico en lo que requieren las personas y el medio ambiente, manteniendo un
      equilibrio para estar a la vanguardia con lo que requiere la actualidad.
    </p>
  </div>
);

// --- APP PRINCIPAL ---
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ===== RESTAURAR SESIÓN =====
  useEffect(() => {
    const restoreSession = () => {
      try {
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          const savedPhoto = localStorage.getItem(`profilePhoto_${userData.username}`);
          setCurrentUser({
            ...userData,
            profilePhoto: savedPhoto || null,
          });
          console.log("Sesión restaurada:", userData.name);
        }
      } catch (error) {
        console.error("Error al restaurar sesión:", error);
        localStorage.removeItem("currentUser");
      } finally {
        setIsLoading(false);
      }
    };
    restoreSession();
  }, []);

  // ===== GUARDAR SESIÓN =====
  useEffect(() => {
    if (currentUser) {
      const userToSave = {
        id: currentUser.id,
        username: currentUser.username,
        name: currentUser.name,
        email: currentUser.email || `${currentUser.username}@onix3d.com`,
      };
      localStorage.setItem("currentUser", JSON.stringify(userToSave));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // ===== LOGIN / LOGOUT =====
  const login = (username, password) => {
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) {
      const savedPhoto = localStorage.getItem(`profilePhoto_${username}`);
      const userWithPhoto = {
        ...foundUser,
        email: foundUser.email || `${username}@onix3d.com`,
        profilePhoto: savedPhoto || null,
      };
      setCurrentUser(userWithPhoto);
      console.log("Login exitoso:", userWithPhoto.name);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    console.log("Sesión cerrada");
    setCurrentUser(null);
    navigateTo("home");
  };

  const updateProfilePhoto = (photoDataURL) => {
    if (currentUser) {
      if (photoDataURL) {
        localStorage.setItem(`profilePhoto_${currentUser.username}`, photoDataURL);
      } else {
        localStorage.removeItem(`profilePhoto_${currentUser.username}`);
      }
      setCurrentUser((prev) => ({
        ...prev,
        profilePhoto: photoDataURL,
      }));
    }
  };

  // ===== NAVEGACIÓN =====
  const navigateTo = (page) => {
    const validPages = ["home", "movies", "anime", "otros", "about", "ropa"];
    if (validPages.includes(page)) setCurrentPage(page);
    else setCurrentPage("home");
  };

  // ===== RENDERIZADO DE PÁGINAS =====
  const renderPage = () => {
    switch (currentPage) {
      case "movies":
        return <CategoryPage title="Movies" category="Movies" />;
      case "anime":
        return <CategoryPage title="Anime" category="Anime" />;
      case "otros":
        return <CategoryPage title="Otros" category="Otros" />;
      case "ropa":
        return <CategoryPage title="Ropa" category="Ropa" />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  // ===== LOADING SCREEN =====
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
          <p className="text-gray-600 font-semibold">Cargando Tienda...</p>
        </div>
      </div>
    );
  }

  // ===== INTERFAZ PRINCIPAL =====
  return (
    <div className="bg-gray-100 min-h-screen">
      <MainHeader
        navigateTo={navigateTo}
        currentUser={currentUser}
        onLogout={logout}
        onShowLogin={() => setIsLoginModalOpen(true)}
        onShowProfilePhoto={() => setIsProfilePhotoModalOpen(true)}
      />

      {/* Contenido dinámico */}
      {renderPage()}

      {/* Modales */}
      {isLoginModalOpen && (
        <LoginModal onLogin={login} onClose={() => setIsLoginModalOpen(false)} />
      )}

      {isProfilePhotoModalOpen && currentUser && (
        <ProfilePhotoModal
          currentUser={currentUser}
          onUpdatePhoto={updateProfilePhoto}
          onClose={() => setIsProfilePhotoModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;