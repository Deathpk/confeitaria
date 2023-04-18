import React, {useState} from "react";
import Gallery from "../components/Gallery";
import {CatalogData} from "../components/CatalogData";
import Pagination from './Pagination';
import {paginate} from '../helpers/paginate';

const Catalog = () => {
    const [currentCategory, setCurrentCategory] = useState('cakes');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;
    const catalogData = paginate(CatalogData[currentCategory], currentPage, pageSize);

    const handleCategory = (category) => {
        setCurrentCategory(category);
        setCurrentPage(1);
    }

    function onPageChange(page) {
        setCurrentPage(page);
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
                products={catalogData} 
            />
            <Pagination
                items={CatalogData[currentCategory].length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default Catalog;