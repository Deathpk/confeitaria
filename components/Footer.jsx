import React, {useState} from "react";
import Link from "next/link";
import {FaInstagram, FaHeart, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
    return(
        <div className="bg-[#9f0311]">
            <div className="m-auto flex justify-between items-center p-4 text-white">
                <Link href="/">
                    <h1 className="text-4xl cursive-title">Cake Bakery</h1>
                </Link>
                <ul className="sm:flex">
                    <li className="md:p-4">
                        <Link href='/'>Inicio</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='/#catalog' scroll={false}>Catalogo</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='/#about' scroll={false}>Sobre</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='/#testimonials' scroll={false}>Depoimentos</Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='https://www.instagram.com/' target={'https://www.instagram.com/'}>
                            <FaInstagram size={20} />
                        </Link>
                    </li>
                    <li className="md:p-4">
                        <Link href='https://www.whatsapp.com/?lang=pt_br' target={'https://www.whatsapp.com/?lang=pt_br'}>
                            <FaWhatsapp size={20} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-[#e9eaea]">
                <Link href='https://www.instagram.com/' target={'https://www.instagram.com/'}>
                    <p className="flex justify-center text-black text-[0.9rem]">
                        Feito com <span className="flex items-center px-1 text-rose-700"><FaHeart size={17}/></span> por Versiani Works
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Footer;