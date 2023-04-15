import Image from 'next/legacy/image';
import { useContext } from "react";
import { CartContext } from '../contexts/CartContext';

const Gallery = ({ products }) => {
    const { addProduct } = useContext(CartContext);

    return (
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {
                        products.map((product, index) => {
                            return(
                                <div key={index} className="flex flex-wrap w-1/3">
                                    <div className="relative w-full p-1 md:p-2">
                                        <p className="md:text-2xl text-slate-700 text-center">{product.name}</p>
                                        <Image
                                            src={product.image}
                                            alt={product.description}
                                            width='215'
                                            height='217'
                                            layout='responsive'
                                            objectFit='cover'
                                        />
                                        <div className="absolute top-24 right-0 bottom-0 left-0 w-full h-[50%] overflow-hidden opacity-0 md:hover:opacity-100 md:duration-300">
                                            <div className="flex justify-center items-center h-full z-2 p-5">
                                                <div className='absolute top-2 left-2 right-2 bottom-2 bg-black/50 z-[2]'/>
                                                <p className="text-white z-10 text-1xl">{product.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-red-700">{product.price}$</span>
                                            {/* TODO: Chamar a função de adicionar item ao carrinho lá do context. */}
                                            <button className="bg-red-700 text-white border-2 border-[#e9eaea] mt-2" onClick={() => {addProduct(product)}}>  
                                                Adicionar ao carrinho
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Gallery;