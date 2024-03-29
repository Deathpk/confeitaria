import Link from "next/link";

const Hero = () => {
    return(
        <div className="flex items-center justify-center h-screen cake-img bg-fixed bg-center bg-cover mb-5 mt-12">
            {/*Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-[-50px] bg-[#e9eaea]/20 z-[2]"/>
            <div className="p-5 text-white z-[2] md:mt-[-10rem]">
                <h2 className="md:text-9xl text-7xl text-center font-bold cursive-title text-black">Cake Bakery</h2>
                <h2 className="md:text-7xl text-6xl text-center font-bold cursive-title text-black">Delícias que derretem na boca, feitas com amor e dedicação</h2>
                <div className="flex justify-center">
                    <Link href='#catalog'>
                        <button className="px-8 py-2 border-solid bg-red-700 border-[2px] border-[#e9eaea] mt-7 rounded-sm">Confira nosso catálogo</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;