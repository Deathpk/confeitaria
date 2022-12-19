import React, {useState} from "react";
import Gallery from "../components/Gallery";
import {CatalogData} from "../components/CatalogData";

const Catalog = () => {
    const [currentCategory, setCurrentCategory] = useState('cakes');
    const handleCategory = (category) => {
        setCurrentCategory(category);
    }

    return(
        <div className="mb-10">
            {/*Heading */}
            <h1 className="flex justify-center text-black font-bold text-6xl cursive-title">Nosso Catálogo</h1>
            <div className="flex justify-center  text-gray-700 underline decoration-rose-700">
                {/*Colocar um gift de loading para quando a imagem estiver sendo carregada...*/}
                <button className="m-5" onClick={() => {handleCategory('cakes')}}>Bolos</button>
                <button className="m-5" onClick={() => {handleCategory('cupcakes')}}>Cupcakes</button>
                <button className="m-5" onClick={() => {handleCategory('pies')}}>Tortas</button>
            </div>
            <Gallery images={CatalogData[currentCategory]}/>
        </div>
    )
}

export default Catalog;