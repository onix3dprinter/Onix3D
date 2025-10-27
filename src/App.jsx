import React, { useState } from 'react';

// --- COMPONENTES ---
import MainHeader from './assets/components/header/MainHeader.jsx';
import MainProduct from './assets/components/product/MainProduct.jsx';
import PromocionBanner from './assets/components/product/PromocionBanner.jsx';
import FeaturedProducts from './assets/components/product/FeaturedProducts.jsx';
import FooterProduct from './assets/components/product/FooterProduct.jsx';
import CategoryPage from './assets/components/pages/CategoryPage.jsx';

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
      Onix3Dprinter es una marca que crea soluciones ignovadoras usando pensamiento 
      critico en lo que requieren las personas y el medio ambiente, mantniendo un 
      equilibrio para estar a la vanguardia con lo que requiere la actualidad.
    </p>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // 🔁 NAVEGACIÓN CENTRALIZADA
  const navigateTo = (page) => {
    const validPages = ['home', 'movies', 'anime', 'sale', 'about','ropa'];
    if (validPages.includes(page)) {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }
  };

  // 🔀 RENDER SEGÚN PÁGINA
  const renderPage = () => {
    switch (currentPage) {
      case 'movies':
        return <CategoryPage title="Movies" category="Movies" />;
      case 'anime':
        return <CategoryPage title="Anime" category="Anime" />;
      case 'otros':
        return <CategoryPage title="Otros" category="Otros" />;
      case 'ropa':
        return <CategoryPage title="Clothes" category="Clothes" />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainHeader navigateTo={navigateTo} />
      {renderPage()}
    </div>
  );
};

export default App;
