import React from "react";
import Image from "next/legacy/image";

const Contacts = () => {
    return (
        <div className="w-full h-full contacts-img bg-center bg-cover" id="contacts">
            <div className="py-12 md:px-12 flex justify-end">
                <div className="bg-[#9f0311] md:w-[500px] md:h-[400px] w-[1240px] h-[400px] shadow-2xl shadow-black">
                    <h2 className="cursive-title text-6xl text-white text-center py-12">Nossos contatos</h2>
                    <div className="flex flex-col">
                        <p className="md:px-12 pb-2">Telefone: <span className="px-5">31 34948793</span></p>
                        <p className="md:px-12 pb-2">WhatsApp: <span className="px-1">31 99541-1115</span></p>
                        <p className="md:px-12 pb-2">E-mail: <span className="px-9">bettercallmiguel@gmail.com</span></p>
                        <p className="md:px-12 pb-2">Endereço: <span className="px-4">Rua Astolfo Bueno 768 - Céu azul - BH</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;