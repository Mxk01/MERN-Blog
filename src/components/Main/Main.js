import React from 'react'
import Navbar from '../Navbar/Navbar'
import Article from '../Article/Article'
import Categories from '../Categories/Categories'
import MainCSS from './Main.module.css'


function Main() {
    return (
        <div className="main" style={{

        }}>
            <Categories style={{ alignSelf: 'flexEnd' }} />
            <Article style={{ alignSelf: 'flexStart' }} />

        </div>
    )
}

export default Main
