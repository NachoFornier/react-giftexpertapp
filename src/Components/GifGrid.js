import React, { useEffect, useState } from 'react'
import { getGifts } from '../Helpers/getGifts';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   const {data:images,loading} = useFetchGifts(category); // el :images es solo para renombrar la data, podria dejarle el nombre data y laburarlo asi

    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__delay-1s">{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="card-grid">
                
                    {images.map((img) =>
                        <GifGridItem key={img.id} {...img} />  // esta es una forma de pasar cada propiedad de img por separado.
                    )}
                
                
            </div>
        </>
    )
}
