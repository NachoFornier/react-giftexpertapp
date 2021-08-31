import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories= {setCategories} />
            <hr></hr>
            <ol>
                {
                categories.map((category) => <GifGrid category= {category} key={category} />)
            }
            </ol>
        </>
    );
}