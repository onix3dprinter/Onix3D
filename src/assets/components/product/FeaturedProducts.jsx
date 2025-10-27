import React from 'react';

// --- ESTUDIANTES: Aquí definirían los productos a mostrar en el inicio. ---
// Más adelante, estos datos vendrán de una base de datos o una API.
// Personalicen estos productos para que coincidan con los de sus empresas.

// --- PARA AGREGAR SUS PROPIAS IMÁGENES LOCALES: ---
// 1. Guarden sus imágenes de producto en esa carpeta (ej: mi-producto.jpg).
// 2. Importen cada imagen al principio de este archivo, dándole un nombre de variable. Por ejemplo:
//    import fotoCamisaCoral from '@/assets/images/camisa-coral.jpg';
//    import fotoShortsIndigo from '@/assets/images/shorts-indigo.jpg';
// 3. Finalmente, en la lista de abajo, reemplacen la URL de 'imageUrl' por la variable que acaban de crear.
//    Ejemplo: imageUrl: fotoCamisaCoral,

const featuredProducts = [
    {
        id: 1,
        name: 'Porta vasos Demon slayer',
        category: 'Anime',
        price: 79.99,
        imageUrl: 'https://placehold.co/600x800/fecaca/fb7185?text=Colección+Verano', // Rosa claro vibrante  -- Acá img
        bgColor: 'bg-rose-100', // Color de fondo para la tarjeta
        hoverBgColor: 'hover:bg-rose-200',
    },
    {
        id: 3,
        name: 'soporte de carrete',
        category: 'Collection',
        price: 129.99,
        imageUrl: 'https://placehold.co/600x800/ffedd5/f97316?text=Primavera+Casual', // Naranja vibrante -- Acá img
        bgColor: 'bg-orange-100',
        hoverBgColor: 'hover:bg-orange-200',
    },
    {
        id: 6,
        name: 'litofanias',
        category: 'Collection',
        price: 149.99,
        imageUrl: 'https://placehold.co/600x800/dbeafe/3b82f6?text=Denim+Esencial', // Azul denim
        bgColor: 'bg-indigo-100',
        hoverBgColor: 'hover:bg-indigo-200',
    },
    {
        id: 8,
        name: 'Abraza caras',
        category: 'Movie',
        price: 35.00,
        imageUrl: 'https://placehold.co/600x800/1f2937/4b5563?text=Estilo+Urbano', // Negro grisáceo
        bgColor: 'bg-slate-100',
        hoverBgColor: 'hover:bg-slate-200',
    },
];

const FeaturedProducts = () => {
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
                            <button className="mt-6 font-bold text-white py-3 px-8 rounded-full bg-orange-500 shadow-md shadow-orange-500/30 hover:bg-orange-600 transition-all duration-300 transform group-hover:-translate-y-1">
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
