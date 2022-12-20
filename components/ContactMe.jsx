import React, { useRef } from "react";

const ContactMe = () => {
    const nameRef = useRef();
    const selectedProductRef = useRef();
    
    return (
        <div className="mt-5" id="contacte-me">
            <h1 className="flex justify-center text-black font-bold text-6xl cursive-title">Faça um orçamento!</h1>
            <div class="flex justify-center items-center p-6 w-full">
                <form>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
                            placeholder="Nome"/>
                    </div>
                    <div class="form-group mb-6">
                        <select class="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" placeholder="Nome">
                                <option selected>Selecione o produto desejado</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                        </select>
                        </div>
                    
                    <button type="submit" class="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;