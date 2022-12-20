import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import React, {useState} from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [selectedMenuOption, setMenuOption] = useState('');

    const handleNav = () => {
        setNav(!nav);
    };

    const resolveSelectedMenuOption = (option) => {
        return selectedMenuOption === option ? 'underline decoration-rose-700' : '';
    }

    return (
        <div className="fixed left-0 top-0 w-full z-10 bg-white">
            <div className="m-auto flex justify-between items-center p-4 text-white">
                <Link href="/">
                    <h1 className="text-black font-bold text-4xl cursive-title">Cake Bakery</h1>
                </Link>
                <ul className="text-black sm:flex hidden">
                    <li className="p-4">
                        <Link href='/' className={resolveSelectedMenuOption('inicio')} onClick={() => {setMenuOption('inicio')}}>Inicio</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/#catalog' className={resolveSelectedMenuOption('catalogo')} onClick={() => {setMenuOption('catalogo')}}>Catalogo</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/#about' className={resolveSelectedMenuOption('sobre')} onClick={() => {setMenuOption('sobre')}}>Sobre</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/#testimonials' className={resolveSelectedMenuOption('depoimentos')} onClick={() => {setMenuOption('depoimentos')}}>Depoimentos</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/#contacts' className={resolveSelectedMenuOption('contatos')} onClick={() => {setMenuOption('contatos')}}>Contatos</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/#contacte-me' className={resolveSelectedMenuOption('orcamento')} onClick={() => {setMenuOption('orcamento')}}>Orçamento</Link>
                    </li>
                </ul>
                {/**Mobile Button */}
                <div onClick={handleNav} className="sm:hidden block z-10">
                    {
                        nav 
                        ? <AiOutlineClose size={20} className="text-black"/> 
                        : <AiOutlineMenu size={20} className="text-black"/>
                    }
                </div>
                {/**Mobile Menu */}
                <div className={
                        nav 
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                        :'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                    }
                >
                    <ul className="text-black">
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-rose-700">
                            <Link href='/'>Inicio</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-rose-700">
                            <Link href='/#catalog'>Catalogo</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-rose-700">
                            <Link href='/#about'>Sobre</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-rose-700">
                            <Link href='/#testimonials'>Depoimentos</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-rose-700">
                            <Link href='/#contacts'>Contatos</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-rose-700">
                            <Link href='/#contacte-me'>Orçamento</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;