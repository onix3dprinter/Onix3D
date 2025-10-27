import React, { useState, useEffect, useCallback } from 'react';

// ESTUDIANTES: Aquí es donde deben personalizar para sus empresas.
// Cambien las imágenes, títulos y subtítulos para que coincidan con su colección o productos destacados.
const collectionSlides = [
    {
        // Reemplacen esta URL con la imagen de su producto/colección.
        img: 'https://placehold.co/1200x800/06b6d4/ffffff?text=Colección+Aqua',
        // Cambien el título para que coincida con su imagen.
        title: 'Organizadores',
        // Y el subtítulo también.
        subtitle: 'organiza tu vida.'
    },
    {
        img: 'https://placehold.co/1200x800/8b5cf6/ffffff?text=Vibra+Nocturna',
        title: 'Anime',
        subtitle: 'Animes a tu gusto.'
    },
    {
        img: 'https://placehold.co/1200x800/f97316/ffffff?text=Sol+de+Verano',
        title: 'Movies',
        subtitle: 'Diferente mundos.'
    },
];

const PromotionalBanners = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % collectionSlides.length);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="container mx-auto my-20 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <div className="relative rounded-xl overflow-hidden h-[28rem] group shadow-2xl">
                    <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {collectionSlides.map((slide) => (
                             <div key={slide.title} className="w-full h-full flex-shrink-0 relative">
                                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                             </div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 p-8 text-white">
                         <div className="overflow-hidden">
                            <h3 
                                key={currentIndex}
                                className="text-4xl lg:text-5xl font-black mb-2 animate-slide-up"
                            >
                                {collectionSlides[currentIndex].title}
                            </h3>
                         </div>
                         <div className="overflow-hidden">
                             <p key={currentIndex + 'sub'} className="text-lg mb-4 animate-slide-up-delay">{collectionSlides[currentIndex].subtitle}</p>
                         </div>
                        <a href="#" className="mt-2 inline-block font-semibold bg-white text-gray-800 py-3 px-8 rounded-full shadow-lg hover:bg-orange-400 hover:text-white transition-all duration-300 transform group-hover:scale-105">
                            Descubrir
                        </a>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {collectionSlides.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                            ></button>
                        ))}
                    </div>
                </div>

                <div className="relative rounded-xl overflow-hidden h-[28rem] flex items-center justify-center p-8 bg-gray-900 group shadow-2xl">
                    <div className="absolute w-64 h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-full -top-10 -left-10 opacity-60 animate-blob"></div>
                    <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full -bottom-10 -right-10 opacity-60 animate-blob animation-delay-2000"></div>
                    <div className="absolute w-56 h-56 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full -bottom-10 -left-10 opacity-50 animate-blob animation-delay-4000"></div>
                    
                    <div className="relative z-10 text-center text-white bg-white/10 backdrop-blur-xl p-8 rounded-lg border border-white/20 shadow-lg">
                        <h3 className="text-3xl font-bold mb-2 transition-transform duration-500 group-hover:scale-105">Únete al Club</h3>
                        <p className="mb-4 text-md">Acceso a lanzamientos y eventos.</p>
                        <a href="#" className="mt-2 inline-block font-semibold bg-orange-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform group-hover:scale-105">
                            Suscribirse
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionalBanners;