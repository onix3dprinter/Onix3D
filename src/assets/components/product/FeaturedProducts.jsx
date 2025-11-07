import React from 'react';
import demon_slayer from "@/assets/images/Anime/demon_slayer.png"
import soporte_carrete from "@/assets/images/Otros/soporte_carrete.png"
import santa_familia from "@/assets/images/Otros/santa_familia.png"
import Abraza_caras from "@/assets/images/Movie/abraza_caras.png"

const featuredProducts = [
    {
        id: 'featured-1',
        name: 'Porta vasos Demon slayer',
        category: 'Anime',
        price: 50,
        imageUrl: demon_slayer,
        bgColor: 'bg-rose-100',
        hoverBgColor: 'hover:bg-rose-200',
    },
    {
        id: 'featured-2',
        name: 'soporte de carrete',
        category: 'Otros',
        price: 25,
        imageUrl: soporte_carrete,
        bgColor: 'bg-orange-100',
        hoverBgColor: 'hover:bg-orange-200',
    },
    {
        id: 'featured-3',
        name: 'litofanias',
        category: 'Otros',
        price: 45,
        imageUrl: santa_familia,
        bgColor: 'bg-indigo-100',
        hoverBgColor: 'hover:bg-indigo-200',
    },
    {
        id: 'featured-4',
        name: 'Abraza caras',
        category: 'Movie',
        price: 25,
        imageUrl: Abraza_caras,
        bgColor: 'bg-slate-100',
        hoverBgColor: 'hover:bg-slate-200',
    },
];

const FeaturedProducts = ({ navigateTo }) => { // ← Prop agregada

    const handleViewProduct = (category) => {
        if (navigateTo) {
            navigateTo(category);
        }
    };

    return (
        <section className="container mx-auto my-20 px-4 py-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl animate-fade-in">
            <div className="text-center mb-16 animate-slide-down">
                <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">Novedades</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    Sumérgete en lo último de nuestra colección con nuevos diseños.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {featuredProducts.map((product, index) => (
                    <div 
                        key={product.id} 
                        className={`relative rounded-3xl overflow-hidden p-6 shadow-lg transform transition-all duration-500 hover:scale-105 group ${product.bgColor} ${product.hoverBgColor} animate-fade-in-up`}
                        style={{animationDelay: `${index * 100}ms`}}
                    >
                        {/* Círculo de fondo decorativo */}
                        <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-30 ${product.bgColor.replace('100', '300')} transition-all duration-300 group-hover:w-32 group-hover:h-32`}></div>
                        <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-30 ${product.bgColor.replace('100', '300')} transition-all duration-300 group-hover:w-40 group-hover:h-40`}></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-full h-72 overflow-hidden mb-4 rounded-xl shadow-md">
                                <img 
                                    src={product.imageUrl} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-md text-gray-600 mb-3">{product.category}</p>
                            <p className="text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
                            <button 
                                onClick={() => handleViewProduct(product.category)}
                                className="mt-6 font-bold text-white py-3 px-8 rounded-full bg-orange-500 shadow-md shadow-orange-500/30 hover:bg-orange-600 transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer"
                            >
                                Ver Producto
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;