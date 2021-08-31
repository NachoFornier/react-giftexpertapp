import React, { useEffect, useState } from 'react'
import { getGifts } from '../Helpers/getGifts';

export const useFetchGifts = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {

        getGifts(category).then(img => {
                setstate({
                    data: img,
                    loading: false
                });
        })

    }, [category])

    return state;
}

