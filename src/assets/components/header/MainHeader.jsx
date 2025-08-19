import LogoSneakes from '@/assets/images/logo.svg';
import AvatarImage from '@/assets/images/image-avatar.png';
import MenuIcon from '@/assets/components/icons/MenuIcons';
import CartIcon from '@/assets/components/icons/CartIcon';
import CloseIcon from '@/assets/components/icons/CloseIcon';
import { useState } from 'react';

const MainHeader = () => {

    const [navClass, setnavClass] = useState("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0  p-8 md:static md:p-0 md:h-auto")  

    const handleOpenMenu = () => {
     setnavClass("absolute w-4/5 font-bold flex flex-col md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 bg-white h-full p-8 gap-y-[21px] md:static md:p-0 md:h-auto");
    };
    const handleClosedMenu = () => {
      setnavClass("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0  p-8 md:static md:p-0 md:h-auto")
    };

    return(
        <header className='container mx-auto flex items-center px-4 gap-8 bg-gray-200 py-8'>
        <button className='md:hidden' onClick={handleOpenMenu}>
            <MenuIcon/>
        </button>
        <img src={LogoSneakes} 
            alt="Logo sneakers" 
            className='mr-auto md:mr-0 h-5 mb-1'/>
        <nav className={navClass}>
          <button className='mb-12 md:hidden' onClick={handleClosedMenu}>
            <CloseIcon/>
          </button>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className='flex gap-4'>
          <button>
            <CartIcon/>
          </button>
          <img src={AvatarImage} alt="" className='w-10'/>
        </div>
      </header>
    );

};

export default MainHeader;