import React, { useState } from "react";
import NextIcon from "@/assets/components/icons/NextIcon";
import PrevIcon from "@/assets/components/icons/PrevIcon";

// 📸 Importa las imágenes desde tu carpeta Movie
import mando1 from "../../images/Movie/mando1.jpg";
import stormtroper from "../../images/Movie/stormtroper.jpg";
import vader from "../../images/Movie/vader.jpg";
import estrella from "../../images/Movie/estrella_de_la_muerte.jpg";

// Lista principal de imágenes
const LISTA_IMG = [mando1, stormtroper, vader, estrella];

const MovieCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === LISTA_IMG.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? LISTA_IMG.length - 1 : prev - 1));
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      {/* Imagen principal */}
      <div className="relative col-span-4">
        <img
          src={LISTA_IMG[index]}
          alt={`Imagen ${index + 1}`}
          className="aspect-[16/12] w-full object-cover object-center rounded-xl shadow-lg"
        />

        {/* Botones de navegación */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition grid place-items-center"
            aria-label="Anterior"
          >
            <PrevIcon />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition grid place-items-center"
            aria-label="Siguiente"
          >
            <NextIcon />
          </button>
        </div>
      </div>

      {/* Miniaturas (solo visibles en escritorio) */}
      {LISTA_IMG.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Miniatura ${i + 1}`}
          onClick={() => setIndex(i)}
          className={`hidden md:block cursor-pointer rounded-lg border-2 transition object-cover object-center
            ${index === i ? "border-orange-500 opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
        />
      ))}
    </section>
  );
};

export default MovieCarousel;