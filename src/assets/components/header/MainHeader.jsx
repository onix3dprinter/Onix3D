import React, { useState } from 'react';
import AvatarImage from '../../images/image-avatar.png';
import MenuIcon from '../icons/MenuIcons.jsx';
import CartIcon from '../icons/CartIcon.jsx';
import CloseIcon from '../icons/CloseIcon.jsx';
import NavLinkHeader from './NavLinkHeader.jsx';

const MainHeader = ({ navigateTo }) => {
    const COMPANY_NAME = "Onix3D";
    const [navClass, setnavClass] = useState("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");

    const handleOpenMenu = () => {
        setnavClass("absolute w-4/5 font-bold flex flex-col md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 bg-white h-full p-8 gap-y-[21px] md:static md:p-0 md:h-auto z-10");
    };

    const handleClosedMenu = () => {
        setnavClass("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");
    };

    return (
        <>
            <header className='container mx-auto flex items-center px-4 gap-8 bg-gray-800 text-white '>
                <button className='md:hidden' onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <div onClick={() => navigateTo('home')} className='mr-auto md:mr-0 font-black text-3xl tracking-wider cursor-pointer'>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent">
                        {COMPANY_NAME}
                    </span>
                </div>
                <nav className={navClass}>
                    <button className='mb-12 md:hidden text-white' onClick={handleClosedMenu}>
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Movie" onClick={() => navigateTo('movies')} />
                    <NavLinkHeader text="Anime" onClick={() => navigateTo('anime')} />
                    <NavLinkHeader text="Otros" onClick={() => navigateTo('otros')} />
                    <NavLinkHeader text="Clothes" onClick={() => navigateTo('ropa')} />
                    <NavLinkHeader text="Acerca de" onClick={() => navigateTo('about')} />
                </nav>
                <div className='flex gap-4 text-white '>
                    <button>
                        <CartIcon />
                    </button>
                    <img src={AvatarImage} alt="" className='w-10' />
                </div>
            </header>
            <span className="container mx-auto hidden md:block h-[0.2px] w-full bg-gray-500"></span>
        </>
    );
};

export default MainHeader;
