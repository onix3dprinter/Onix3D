// src/assets/components/common/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="group relative flex flex-col text-left animate-fade-in">
            <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                        onClick={() => onAddToCart(product)} // ← AQUI SE ACTIVA
                        className="w-full font-bold text-gray-900 py-3 px-6 rounded-md bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
            <div className="mt-4 flex-grow">
                <h3 className="text-md font-bold text-gray-800">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500 h-10">{product.description}</p>
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;
