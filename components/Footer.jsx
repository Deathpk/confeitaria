import Link from "next/link";
import {FaInstagram, FaHeart, FaWhatsapp} from "react-icons/fa";

const Footer = () => {

    function handleWhatsAppRedirect() {
        let whatsAppNumber = "5531995411115";
        let message = encodeURI(`Olá! conheci o seu trabalho pelo seu site e gostaria de tirar algumas dúvidas`);
        let apiLink = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${message}`;
    
        let anchor = document.createElement('a');
        anchor.target="_blank";
        anchor.href=apiLink;
        anchor.click();
    }


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
                        <Link  href="#" onClick={handleWhatsAppRedirect}>
                            <FaWhatsapp size={20} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-[#e9eaea]">
                <Link href='https://www.linkedin.com/in/michel-versianidev/' target={'https://www.linkedin.com/in/michel-versianidev/'}>
                    <p className="flex justify-center text-black text-[0.9rem]">
                        Feito com <span className="flex items-center px-1 text-rose-700"><FaHeart size={17}/></span> por Versiani Works
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Footer;