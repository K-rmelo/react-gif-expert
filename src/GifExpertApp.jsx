import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        const categoriesToLowerCase = categories.map(category => {
            return (category.toLowerCase());
        });

        if (categoriesToLowerCase.includes(newCategory.toLowerCase())) return;

        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {/* Listado de Gif*/}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* Gif Item*/}

        </>
    )
}