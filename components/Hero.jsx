import Link from "next/link";

const Hero = () => {
    return(
        <div className="flex items-center justify-center h-screen cake-img bg-fixed bg-center bg-cover mb-5 mt-12">
            {/*Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-[-50px] bg-[#e9eaea]/20 z-[2]"/>
            <div className="p-5 text-white z-[2] md:mt-[-10rem]">
                <h2 className="text-9xl font-bold cursive-title text-black">Deliciosos bolos</h2>
                <h2 className="text-9xl font-bold cursive-title text-black">Para encomenda</h2>
                <div className="flex justify-center">
                    <Link href='https://api.whatsapp.com/send?phone=5531995411115' target='https://api.whatsapp.com/send?phone=5531995411115'>
                        <button className="px-8 py-2 border-solid bg-red-700 border-[2px] border-[#e9eaea] mt-7 ">Faça seu pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;