// src/App.jsx
import React, { useState, useEffect } from 'react';
import MainHeader from './assets/components/header/MainHeader.jsx';
import CategoryPage from './assets/components/pages/CategoryPage.jsx';
import CartPage from './assets/components/pages/CartPage.jsx';
import MainProduct from './assets/components/product/MainProduct.jsx';
import PromocionBanner from './assets/components/product/PromocionBanner.jsx';
import FeaturedProducts from './assets/components/product/FeaturedProducts.jsx';
import FooterProduct from './assets/components/product/FooterProduct.jsx';
import LoginModal from './assets/components/modals/LoginModal.jsx';
import ProfilePhotoModal from './assets/components/modals/ProfilePhotoModal.jsx';
import { users } from '../src/data/user.js';

const HomePage = ({ navigateTo }) => (
    <>
        <MainProduct />
        <PromocionBanner navigateTo={navigateTo} />
        <FeaturedProducts navigateTo={navigateTo} />
        <FooterProduct />
    </>
);

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [currentUser, setCurrentUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // ===== RESTAURAR SESIÓN Y CARRITO AL CARGAR =====
    useEffect(() => {
        const restoreSession = () => {
            try {
                const savedUser = localStorage.getItem('currentUser');
                
                if (savedUser) {
                    const userData = JSON.parse(savedUser);
                    const savedPhoto = localStorage.getItem(`profilePhoto_${userData.username}`);
                    
                    setCurrentUser({
                        ...userData,
                        profilePhoto: savedPhoto || null
                    });

                    // Restaurar carrito del usuario
                    const savedCart = localStorage.getItem(`cart_${userData.username}`);
                    if (savedCart) {
                        setCart(JSON.parse(savedCart));
                    }
                    
                    console.log('Sesión restaurada:', userData.name);
                }
            } catch (error) {
                console.error('Error al restaurar sesión:', error);
                localStorage.removeItem('currentUser');
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
                username: currentUser.username,
                name: currentUser.name,
                email: currentUser.email || `${currentUser.username}@shoreline.com`
            };
            localStorage.setItem('currentUser', JSON.stringify(userToSave));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    // ===== GUARDAR CARRITO =====
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem(`cart_${currentUser.username}`, JSON.stringify(cart));
        }
    }, [cart, currentUser]);

    const login = (username, password) => {
        const foundUser = users.find(u => u.username === username && u.password === password);
        if (foundUser) {
            const savedPhoto = localStorage.getItem(`profilePhoto_${username}`);
            
            const userWithPhoto = {
                ...foundUser,
                email: foundUser.email || `${username}@shoreline.com`,
                profilePhoto: savedPhoto || null
            };
            
            setCurrentUser(userWithPhoto);

            // Cargar carrito del usuario
            const savedCart = localStorage.getItem(`cart_${username}`);
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
            
            console.log('Login exitoso:', userWithPhoto.name);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('currentUser');
        console.log('Sesión cerrada');
        
        setCurrentUser(null);
        setCart([]);
        navigateTo('home');
    };

    const updateProfilePhoto = (photoURL) => {
        if (currentUser) {
            if (photoURL) {
                localStorage.setItem(`profilePhoto_${currentUser.username}`, photoURL);
            } else {
                localStorage.removeItem(`profilePhoto_${currentUser.username}`);
            }
            
            setCurrentUser(prev => ({
                ...prev,
                profilePhoto: photoURL
            }));
        }
    };

    // ===== FUNCIONES DEL CARRITO =====
    const addToCart = (product) => {
        if (!currentUser) {
            setIsLoginModalOpen(true);
            return;
        }

        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        // Feedback visual
        console.log('Producto agregado:', product.name);
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const navigateTo = (page) => { 
        setCurrentPage(page); 
    };

    const handleCartClick = () => {
        if (!currentUser) {
            setIsLoginModalOpen(true);
        } else {
            navigateTo('cart');
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Anime':
                return <CategoryPage title="Anime" category="Anime" onAddToCart={addToCart} />;
            case 'Movie':
                return <CategoryPage title="Movie" category="Movies" onAddToCart={addToCart} />;
            case 'Otros':
                return <CategoryPage title="Otros" category="Otros" onAddToCart={addToCart} />;
            case 'Sublimacion':
                return <CategoryPage title="Sublimacion" category="Sublimacion" onAddToCart={addToCart} />;

            case 'cart':
                return (
                    <CartPage 
                        cart={cart}
                        onUpdateQuantity={updateQuantity}
                        onRemoveItem={removeFromCart}
                        currentUser={currentUser}
                    />
                );
            case 'about':
                return (
                    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50 py-16 px-4">
                        <div className="container mx-auto max-w-4xl">
                            {/* Título principal */}
                            <div className="text-center mb-12">
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Acerca deNosotros</span>
                                </h1>
                                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                            </div>

                            {/* Contenido principal */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                                <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8">
                                    Somos una empresa especializada en <span className="font-semibold text-blue-600">impresión 3D</span> en la cual podemos hacer lo que imagines, además de <span className="font-semibold text-purple-600">estampado de camisas, gorras y tazas</span>.
                                </p>

                                {/* Sección de servicios */}
                                <div className="grid md:grid-cols-3 gap-6 mt-12">
                                    {/* Impresión 3D */}
                                    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 hover:shadow-lg transition">
                                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">🖨️</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 mb-2">Impresión 3D</h3>
                                        <p className="text-gray-600">Creamos cualquier diseño que imagines con tecnología de punta</p>
                                    </div>

                                    {/* Estampados */}
                                    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 hover:shadow-lg transition">
                                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">👕</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 mb-2">Estampados</h3>
                                        <p className="text-gray-600">Camisas y gorras personalizadas con tus diseños favoritos</p>
                                    </div>

                                    {/* Personalización */}
                                    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 hover:shadow-lg transition">
                                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">☕</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-800 mb-2">Tazas Custom</h3>
                                        <p className="text-gray-600">Tazas personalizadas perfectas para regalar o coleccionar</p>
                                    </div>
                                </div>
                            </div>

                            {/* Llamado a la acción */}
                            <div className="text-center">
                                <p className="text-gray-600 mb-6 text-lg">¿Tienes una idea en mente?</p>
                                <button 
                                    onClick={() => navigateTo('home')}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition"
                                >
                                    Explora nuestros productos
                                </button>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);
    const openProfilePhotoModal = () => setIsProfilePhotoModalOpen(true);
    const closeProfilePhotoModal = () => setIsProfilePhotoModalOpen(false);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
                    <p className="text-gray-600 font-semibold">Cargando...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <MainHeader
                navigateTo={navigateTo}
                currentUser={currentUser}
                onLogout={logout}
                onShowLogin={openLoginModal}
                onShowProfilePhoto={openProfilePhotoModal}
                cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={handleCartClick}
            />
            {renderPage()}
            {isLoginModalOpen && <LoginModal onLogin={login} onClose={closeLoginModal} />}
            {isProfilePhotoModalOpen && currentUser && (
                <ProfilePhotoModal 
                    currentUser={currentUser}
                    onUpdatePhoto={updateProfilePhoto}
                    onClose={closeProfilePhotoModal}
                />
            )}
        </div>
    );
};

export default App;