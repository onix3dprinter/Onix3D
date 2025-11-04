// --Movies--

import Mandalorian1 from "../assets/images/Movie/mando1.jpg"
import vader1 from "../assets/images/Movie/vader.jpg"
import stormtroper1 from "../assets/images/Movie/stormtroper.jpg"
import Estrella_1 from "../assets/images/Movie/estrella_de_la_muerte.jpg"
import Abraza_caras from "../assets/images/Movie/abraza_caras.png"
import darkdavil1 from "../assets/images/Movie/darkdavil.png"
import doom2_1 from "../assets/images/Movie/doom2.png"
import halo1_1 from "../assets/images/Movie/halo1.png"
import hidra1 from "../assets/images/Movie/hidra.png"
import MIMIR_LLAVERO1 from "../assets/images/Movie/MIMIR_LLAVERO.png"


// --Anime--

import demon_slayer from "../assets/images/Anime/demon_slayer.png"
import Espada from "../assets/images/Anime/spada_demon.png"
import barsaker from "../assets/images/Anime/barsaker.png"
import inoske from "../assets/images/Anime/inoske.png"
import konoha from "../assets/images/Anime/konoha.png"
import madara from "../assets/images/Anime/madara.png"
import pokemon from "../assets/images/Anime/pokemon.png"
import pokemon2 from "../assets/images/Anime/pokemon2.png"
import saske from "../assets/images/Anime/saske.png"
import soro from "../assets/images/Anime/soro.png"

// --OTROS--
import lito from "../assets/images/Otros/LTIO.png"
import miguel_angelo from "../assets/images/Otros/miguel_angelo_nose.png"
import santa_familia from "../assets/images/Otros/santa_familia.png"
import soporte_audifonos from "../assets/images/Otros/soporte_audifosnos.png"
import soporte_caña from "../assets/images/Otros/soporte_caña.png"
import soporte_carrete from "../assets/images/Otros/soporte_carrete.png"
import corazon1 from "../assets/images/Otros/corazon.png"
import dragonsito1 from "../assets/images/Otros/dragonsito.png"
import mano_flex1 from "../assets/images/Otros/mano_flex.png"
import open_close1 from "../assets/images/Otros/open_close.png"


export const allProducts = [
    // --- 10 Productos de Movie ---
    { id: 101, name: 'Mandalorian', category: 'Movies', subCategory: 'Star War', color: 'Negro y blanco', price: 99.00, imageUrl: Mandalorian1, description: 'Porta vasos del Mandaloriano.' },
    { id: 102, name: 'Darth Vader', category: 'Movies', subCategory: 'Star War', color: 'Negro y blanco', price: 75.00, imageUrl: vader1, description: 'Porta vasos de parte del lado oscuro Dark Vader.' },
    { id: 103, name: 'Stormtroper', category: 'Movies', subCategory: 'Star War', color: 'Negro y blanco', price: 79.00, imageUrl: stormtroper1, description: 'Porta vasos de subordinado clonado stromtroper.' },
    { id: 104, name: 'Estrella de la muerte', category: 'Movies', subCategory: 'Star War', color: 'Negro y blanco', price: 159.00, imageUrl: Estrella_1, description: 'Porta vasos del arma definitiva la Estrella de la muerte.' },
    { id: 105, name: 'Abraza caras', category: 'Movies', subCategory: 'Alien', color: 'Negro y blanco', price: 159.00, imageUrl: Abraza_caras, description: 'Porta vasos del arma definitiva la Estrella de la muerte.' },
    { id: 106, name: 'darkdavil', category: 'Movies', subCategory: 'marvel', color: 'Negro y blanco', price: 31.00, imageUrl: darkdavil1, description: 'Producto basado en personaje.' },
    { id: 107, name: 'doom2', category: 'Movies', subCategory: 'Doom_Slayr', color: 'Negro y blanco', price: 27.00, imageUrl: doom2_1, description: 'Producto basado en personaje.' },
    { id: 108, name: 'halo1', category: 'Movies', subCategory: 'HALO', color: 'Negro y blanco', price: 49.00, imageUrl: halo1_1, description: 'Producto basado en personaje.' },
    { id: 109, name: 'hidra', category: 'Movies', subCategory: 'marvel', color: 'Negro y blanco', price: 45.00, imageUrl: hidra1, description: 'Producto basado en personaje.' },
    { id: 110, name: 'MIMIR_LLAVERO', category: 'Movies', subCategory: 'GOD_OF_WAR', color: 'Negro y blanco', price: 39.00, imageUrl: MIMIR_LLAVERO1, description: 'Producto basado en personaje.' },


    // --- 10 Productos de anime ---
    { id: 201, name: 'Porta vasos-Demon Slayer', category: 'Anime', subCategory: 'Demon Slayer', color: 'Negro y blanco', price: 85.00, imageUrl: demon_slayer, description: 'Un clásico atemporal en piqué de algodón.' },
    { id: 202, name: 'Espada nichirin', category: 'Anime', subCategory: 'Demon Slayer', color: 'Negro', price: 179.00, imageUrl: Espada, description: 'Corte moderno que se adapta a tu silueta.' },
    { id: 203, name: 'Barsaker', category: 'Anime', subCategory: 'Berserk', price: 45.00, imageUrl: barsaker, description: 'Producto anime inspirado en Berserk.' },
    { id: 204, name: 'Inoske', category: 'Anime', subCategory: 'Demon Slayer', price: 25.00, imageUrl: inoske, description: 'Producto anime inspirado en Demon Slayer.' },
    { id: 205, name: 'Konoha', category: 'Anime', subCategory: 'Naruto', price: 39.00, imageUrl: konoha, description: 'Producto anime inspirado en Naruto.' },
    { id: 206, name: 'Madara', category: 'Anime', subCategory: 'Naruto', price: 49.00, imageUrl: madara, description: 'Producto anime inspirado en Naruto.' },
    { id: 207, name: 'Pokemon', category: 'Anime', subCategory: 'Pokémon', price: 29.00, imageUrl: pokemon, description: 'Producto anime inspirado en Pokémon.' },
    { id: 208, name: 'Pokemon Edición 2', category: 'Anime', subCategory: 'Pokémon', price: 32.00, imageUrl: pokemon2, description: 'Producto anime inspirado en Pokémon.' },
    { id: 209, name: 'Saske', category: 'Anime', subCategory: 'Naruto', price: 44.00, imageUrl: saske, description: 'Producto anime inspirado en Naruto.' },
    { id: 210, name: 'Soro', category: 'Anime', subCategory: 'One Piece', price: 27.00, imageUrl: soro, description: 'Producto anime inspirado en One Piece.' },

    //--- 10 productos de otro--

    { id: 301, name: 'Litofanias', category: 'Otros', subCategory: 'Litofanias', color: 'Blanco', price: 179.00, imageUrl: lito, description: 'Corte moderno que se adapta a tu silueta.' },
    { id: 302, name: 'Busto de David', category: 'Otros', subCategory: 'Obras', color: 'Blanco', price: 179.00, imageUrl: miguel_angelo, description: 'Corte moderno que se adapta a tu silueta.' },
    { id: 303, name: 'Santa Familia', category: 'Otros', subCategory: 'Litofanias', color: 'Blanco', price: 20.00, imageUrl: santa_familia, description: 'Litografía Santa Familia.'},
    { id: 304, name: 'Soporte Audífonos', category: 'Otros', subCategory: 'Soportes', color: 'Negro', price: 20.00, imageUrl: soporte_audifonos, description: 'Soporte para audífonos.'},
    { id: 305, name: 'Soporte Caña', category: 'Otros', subCategory: 'Soportes', color: 'Negro', price: 20.00, imageUrl: soporte_caña, description: 'Soporte para caña de pescar.'},
    { id: 306, name: 'Soporte Carrete', category: 'Otros', subCategory: 'Soportes', color: 'Negro', price: 20.00, imageUrl: soporte_carrete, description: 'Soporte para carrete.'},
    { id: 307, name: 'corazon', category: 'Otros', subCategory: 'Otro', color: 'Blanco', price: 29.00, imageUrl: corazon1, description: 'Producto categoría varios.' },
    { id: 308, name: 'dragonsito', category: 'Otros', subCategory: 'Otro', color: 'Blanco', price: 35.00, imageUrl: dragonsito1, description: 'Producto categoría varios.' },
    { id: 309, name: 'mano_flex', category: 'Otros', subCategory: 'Otro', color: 'Blanco', price: 26.00, imageUrl: mano_flex1, description: 'Producto categoría varios.' },
    { id: 310, name: 'open_close', category: 'Otros', subCategory: 'Otro', color: 'Blanco', price: 41.00, imageUrl: open_close1, description: 'Producto categoría varios.' },


    //--- 10 productos de ropa--
];
                        

