import React, { useRef } from "react";
const ContactMe = () => {
    const nameRef = useRef();
    const messageRef = useRef();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let whatsAppNumber = "5531995411115";
        let message = encodeURI(`Olá! me chamo ${nameRef.current.value} e conheci o seu trabalho pelo seu site!\n Mensagem: ${messageRef.current.value}`);
        let apiLink = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${message}`;

        let anchor = document.createElement('a');
        anchor.target="_blank";
        anchor.href=apiLink;
        anchor.click();
    }
    
    return (
        <div className="mt-5" id="contacte-me">
            <h1 className="flex justify-center text-black font-bold text-6xl cursive-title">Não encontrou oque procurava</h1>
            <h1 className="flex justify-center text-black font-bold text-6xl cursive-title mb-10">ou tem algo especial em mente?</h1>
            <h1 className="flex justify-center text-black font-bold text-6xl cursive-title">Faça um orçamento</h1>
            <h2 className="flex justify-center text-3xl font-bold cursive-title text-black">Via WhatsApp</h2>
            <form className="w-full max-w-sm flex-col items-center justify-center md:mx-[37%] my-5" onSubmit={handleFormSubmit}>
                <div className="border-b-2 border-rose-700 mb-12">
                    <input 
                        type="text"
                        id="name"
                        required
                        className="
                        appearance-none
                        bg-transparent
                        border-none w-full
                        text-black
                        mr-3 py-1 px-2
                        leading-tight
                        focus:outline-none"
                        placeholder="Nome completo"
                        ref={nameRef}
                    />
                </div>
                <div className="mb-12">
                    <textarea
                        required
                        rows="10" 
                        cols="43"
                        className="
                        resize-none
                        bg-transparent
                        border-2
                        border-rose-700
                        focus:outline-none
                        text-black
                        "
                        placeholder="Olá , gostaria de fazer a encomenda de uma torta de aniversário , poderia me dizer quais as tortas disponíveis?"
                        ref={messageRef}
                    />
                </div>
                <button 
                    type="submit"
                    className="
                    inline-block 
                    px-6 py-2 
                    border-2 border-red-600 
                    text-red-600 font-medium text-xs 
                    leading-tight uppercase  
                    hover:bg-black hover:bg-opacity-5 
                    focus:outline-none focus:ring-0 
                    transition duration-150 ease-in-out
                "
                >
                    Enviar via WhatsApp
                </button>
            </form>
        </div>
    )
}

export default ContactMe;