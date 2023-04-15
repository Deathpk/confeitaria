import React, {useState} from "react";
import Gallery from "../components/Gallery";
import {CatalogData} from "../components/CatalogData";

const Catalog = () => {
    const [currentCategory, setCurrentCategory] = useState('cakes');
    const handleCategory = (category) => {
        setCurrentCategory(category);
    }

    const resolveCategoryUnderlinedTitle = (categoryName) => {
        return currentCategory === categoryName ? "m-5 underline decoration-rose-700" : "m-5";
    }

    return(
        <div className="mb-10" id="catalog">
            {/*Heading */}
            <h1 className="flex justify-center text-black font-bold text-6xl cursive-title">Nosso Catálogo</h1>
            <div className="flex justify-center  text-gray-700">
                {/*Colocar um gift de loading para quando a imagem estiver sendo carregada...*/}
                <button className={resolveCategoryUnderlinedTitle('cakes')} onClick={() => {handleCategory('cakes')}}>Bolos</button>
                <button className={resolveCategoryUnderlinedTitle('pies')} onClick={() => {handleCategory('pies')}}>Tortas</button>
                <button className={resolveCategoryUnderlinedTitle('cupcakes')} onClick={() => {handleCategory('cupcakes')}}>Cupcakes</button>
                <button className={resolveCategoryUnderlinedTitle('candies')} onClick={() => {handleCategory('candies')}}>Docinhos</button>
            </div>
            <Gallery 
                products={CatalogData[currentCategory]} 
            />
        </div>
    )
}

export default Catalog;