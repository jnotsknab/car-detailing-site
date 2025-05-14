"use client"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-black">
            <section className="flex flex-col items-center justify-center md:flex-row gap-4 p-4 bg-[url('/portfolioImgs/port5.jpeg')] bg-cover bg-center bg-no-repeat">
                {/* Image Grid */}
                <div className="grid grid-cols-1 gap-4 flex-1">
                    <div className="w-96 h-96 sm:w-auto sm:h-128 relative transform transition-transform duration-300 hover:scale-110 z-10">
                        <Image src="/person1.jpeg" alt="Person 1" fill className="object-cover rounded-lg opacity-95" />
                    </div>
                    <div className="w-96 h-96 sm:w-auto sm:h-128 relative transform transition-transform duration-300 hover:scale-110 z-10">
                        <Image src="/person2.jpeg" alt="Person 2" fill className="object-cover rounded-lg opacity-95" />
                    </div>
                    <div className="w-96 h-96 sm:w-auto sm:h-128 relative transform transition-transform duration-300 hover:scale-110 z-10">
                        <Image src="/person3.jpeg" alt="Person 3" fill className="object-cover rounded-lg opacity-95" />
                    </div>
                </div>

                {/* About Text Column */}
                <div className="self-stretch flex flex-col items-center justify-start text-gray-400 p-2 bg-gray-800 rounded-lg flex-1 opacity-80 brightness-125">
                    <h2 className="text-4xl font-bold mb-6 mt-4 text-center brightness-120">
                        Meet the Young Man behind it all!
                    </h2>
                    <div className="bg-gray-700 rounded-lg px-10 py-8">
                        <p className="text-center text-2xl leading-loose">
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        Text about Ethan will go here. I dont know what to put for now so I am filling it with random stuff. I will think of something eventually.
                        </p>
                        <img 
                            src="/bwCert.png" 
                            alt="Detailed Car" 
                            className="mx-auto mt-24 mb-24 scale-125"
                            style={{ maxWidth: '400px', maxHeight: '400px' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}