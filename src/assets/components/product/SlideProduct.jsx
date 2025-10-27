import NextIcon from '@/assets/components/icons/NextIcon';
import PrevIcon from '@/assets/components/icons/PrevIcon';

import imgProducto1 from '../../images/image-product-1.jpg';
import imgProducto2 from '../../images/image-product-2.jpg';
import imgProducto3 from '../../images/image-product-3.jpg';
import imgProducto4 from '../../images/image-product-4.jpg';

import { useState } from 'react';

import imgProduct1 from '../../images/image-product-1-thumbnail.jpg';
import imgProduct2 from '../../images/image-product-2-thumbnail.jpg';
import imgProduct3 from '../../images/image-product-3-thumbnail.jpg';
import imgProduct4 from '../../images/image-product-4-thumbnail.jpg';

const LISTA_IMG = [
    imgProducto1,
    imgProducto2,
    imgProducto3,
    imgProducto4,
];


export default () => {
    const  [index, setIndex]= useState(0);

    const handleclickNext = () => {
        index== LISTA_IMG.length - 1? setIndex(0) : setIndex(index + 1);

   
    };
    const handleclickPrev = () => {
       index=== 0 ? setIndex (LISTA_IMG.length - 1)  : setIndex(index - 1);
   
    };


    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className='relative col-span-4'>
                <img src={LISTA_IMG[index]} alt="" className='aspect-[16/12] w-full' />
                <div className='absolute top-1/2 left-0 translate-y-1/2 justify-between px-4 flex w-full'>  
                    <button className='w-10 h-10 bg-white rounded-full place-items-center grid'
                        onClick= {handleclickPrev}>
                        <PrevIcon />
                    </button>
                    <button className='w-10 h-10 bg-white rounded-full place-items-center grid'
                      onClick= {handleclickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <img src={imgProduct1} alt="" className='hidden md:block' />
            <img src={imgProduct2} alt="" className='hidden md:block' />
            <img src={imgProduct3} alt="" className='hidden md:block' />
            <img src={imgProduct4} alt="" className='hidden md:block' />

        </section>
    );
};

