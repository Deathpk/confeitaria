import Image from 'next/legacy/image';

const Gallery = (images) => {
    const galleryImages = images.images;
    return (
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {galleryImages.map((image, index) => {
                        return(
                            <div key={index} className="flex flex-wrap w-1/3">
                                <div className="relative w-full p-1 md:p-2">
                                    <Image
                                        src={image.image}
                                        alt={image.description}
                                        width='215'
                                        height='217'
                                        layout='responsive'
                                        objectFit='cover'
                                    />
                                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 md:hover:opacity-100 md:duration-300">
                                        <div className="flex justify-center items-center h-full z-2 p-5">
                                            <div className='absolute top-2 left-2 right-2 bottom-2 bg-black/50 z-[2]'/>
                                            <p className="text-white z-10 text-1xl">{image.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Gallery;