
import React from 'react';

export default ({ text, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick();
        }
    };

    return (
        <a href="#" onClick={handleClick} className="relative py-10 group">
            <span className="group-hover:text-orange-400 transition-all duration-300">{text}</span>
            <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 group-hover:scale-x-100 group-hover:bg-orange-400 transition-all duration-300"></span>
        </a>
    );
};
                        