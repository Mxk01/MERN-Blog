import React from 'react'
import CategoriesCSS from './Categories.module.css';
function Categories() {
    return (
        <div className="categories" style={{margin:'12rem'}}>
            <h1>Categories</h1>
            <button className={CategoriesCSS.category_button}>Cooking</button>
            <button className={CategoriesCSS.category_button}>LifeStyle</button>
            <button className={CategoriesCSS.category_button}>Tech</button>
            <button className={CategoriesCSS.category_button}>Movies</button>
            <button className={CategoriesCSS.category_button}>Health</button>
            <button className={CategoriesCSS.category_button}>Design</button>





        </div>
    )
}

export default Categories
