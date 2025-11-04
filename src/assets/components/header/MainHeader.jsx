// src/assets/components/header/MainHeader.jsx
import React, { useState } from 'react';
import MenuIcon from '../icons/MenuIcons.jsx';
import CartIcon from '../icons/CartIcon.jsx';
import CloseIcon from '../icons/CloseIcon.jsx';
import NavLinkHeader from './NavLinkHeader.jsx';

const LoginIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);

const MainHeader = ({ navigateTo, currentUser, onLogout, onShowLogin, onShowProfilePhoto, cartItemCount, onCartClick }) => {
    const COMPANY_NAME = (
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-black">
            ONIX3D
        </span>
    );

    const [navClass, setnavClass] = useState("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleOpenMenu = () => {
        setnavClass("absolute w-4/5 font-bold flex flex-col md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 bg-white h-full p-8 gap-y-[21px] md:static md:p-0 md:h-auto z-10 shadow-2xl");
    };
    
    const handleClosedMenu = () => {
        setnavClass("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");
    };

    return (
        <>
            <header className='container mx-auto flex items-center px-4 gap-8 bg-black h-20 border-b border-gray-200 sticky top-0 z-50 shadow-sm'>
                <button className='md:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200' onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                
                <div 
                    onClick={() => navigateTo('home')} 
                    className='mr-auto md:mr-0 font-black text-3xl text-white tracking-wider cursor-pointer hover:text-gray-700 transition-colors duration-200'
                >
                    {COMPANY_NAME}
                </div>
                
                <nav className={navClass}>
                    <button className='mb-12 md:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200 self-start' onClick={handleClosedMenu}>
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Anime" onClick={() => { navigateTo('Anime'); handleClosedMenu(); }} />
                    <NavLinkHeader text="Movie" onClick={() => { navigateTo('Movie'); handleClosedMenu(); }} />
                    <NavLinkHeader text="Otros" onClick={() => { navigateTo('Otros'); handleClosedMenu(); }} />
                    <NavLinkHeader text="Acerca de" onClick={() => { navigateTo('about'); handleClosedMenu(); }} />
                </nav>
                
                <div className='flex items-center gap-4 ml-auto'>
                    {/* BOTÓN CARRITO */}
                    <button 
                        onClick={onCartClick}
                        className="relative hover:bg-gray-100 p-2 rounded-lg transition-all duration-200 group text-gray-600 hover:text-gray-900"
                    >
                        <CartIcon />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform px-1">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                    
                    {currentUser ? (
                        <div className="relative">
                            {/* Avatar clickeable */}
                            <button 
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-full transition-all duration-200"
                            >
                                {/* Foto de perfil o inicial */}
                                {currentUser.profilePhoto ? (
                                    <img 
                                        src={currentUser.profilePhoto} 
                                        alt={currentUser.name}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-orange-400 transition-all duration-200 shadow-sm"
                                    />
                                ) : (
                                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-gray-200 hover:border-orange-400 transition-all duration-200 shadow-sm">
                                        {currentUser.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <span className="hidden sm:block font-semibold text-gray-200 text-sm">
                                    ¡Hola, {currentUser.name.split(' ')[0]}!
                                </span>
                                {/* Flecha dropdown */}
                                <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Menú dropdown */}
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-slideUp">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-semibold text-gray-900">{currentUser.name}</p>
                                        <p className="text-xs text-gray-500">{currentUser.email || 'usuario@email.com'}</p>
                                    </div>
                                    
                                    <button 
                                        onClick={() => {
                                            setShowUserMenu(false);
                                            onShowProfilePhoto();
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors duration-150"
                                    >
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0118.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Cambiar foto de perfil
                                    </button>

                                    <button 
                                        onClick={() => {
                                            setShowUserMenu(false);
                                            onLogout();
                                        }}
                                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors duration-150 border-t border-gray-100 mt-2 pt-2"
                                    >
                                        <LogoutIcon />
                                        Cerrar sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button 
                            onClick={onShowLogin} 
                            className="flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg group"
                        >
                            <LoginIcon />
                            <span className="hidden sm:inline">Iniciar Sesión</span>
                        </button>
                    )}
                </div>
            </header>
        </>
    );
};

export default MainHeader;