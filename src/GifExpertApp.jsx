import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () =>{

    const [ categories, setCategories ] = useState([ 'Sailor Moon' ]);

    //maneras de agregar una categroia al arreglo
    const handleAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        //setCategories(cat => [...cat, 'Darling in the Franxx']); Los ...desestructura las categorias
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}     
            <AddCategory 
                onNewCategory = {handleAddCategory}
            />
        
            {/* Listado de Gif */}
            { 
                categories.map( ( category ) => {
                    return (
                        <GifGrid 
                            key = { category } 
                            category = {category } 
                    />
                    )
                }) 
            }
        </>
    )
}