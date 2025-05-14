"use client"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-black">
            <section className="flex flex-col items-center justify-center md:flex-row gap-4 p-4 min-w-screen bg-[url('/portfolioImgs/port5.jpeg')] bg-cover bg-center">
                {/* Image Grid */}
                <div className="grid grid-cols-1 gap-4 flex-1">
                    <div className="w-96 h-96 sm:w-auto sm:h-128 relative transform transition-transform duration-300 hover:scale-110 z-10">
                        <Image src="/person1.jpeg" alt="Person 1" fill className="object-cover rounded-lg opacity-85" />
                    </div>
                    <div className="w-96 h-96 sm:w-auto sm:h-128 relative transform transition-transform duration-300 hover:scale-110 z-10">
                        <Image src="/person2.jpeg" alt="Person 2" fill className="object-cover rounded-lg opacity-85" />
                    </div>
                    <div className="w-96 h-96 sm:w-auto sm:h-128 relative transform transition-transform duration-300 hover:scale-110 z-10">
                        <Image src="/person3.jpeg" alt="Person 3" fill className="object-cover rounded-lg opacity-95" />
                    </div>
                </div>

                {/* About Text Column */}
                <div className="self-stretch flex flex-col items-center justify-start text-gray-400 p-2 rounded-lg flex-1 opacity-80 brightness-125">
                    <h2 className="text-5xl font-bold mb-6 mt-4 text-center brightness-120">
                        Meet the Young Man behind it all!
                    </h2>
                    <div className="bg-gray-800 rounded-lg px-10 py-8 opacity-40">
                        <p className="text-center text-2xl leading-12 brightness-200 shadow-2xl">
                        There’s something deeply satisfying about transforming a car from dusty and dull to clean and polished. It is more than just a chore for me; call it a kind of therapy. I like the process of it all: the quiet focus, the attention to the smallest corners that most people overlook, and that moment when you step back and see the shine, knowing every bit of it came from your own hands. It’s not just about making a car look good, it’s about giving it the care it deserves. Each vehicle has its own character, and bringing that out through detailing feels like revealing a part of its story. It gives me a sense of pride and peace. I enjoy the challenge of chasing perfection in the finish, but also the calm that comes with taking my time and doing it right. Nothing beats the glow of a freshly detailed ride—and the smile it puts on your face. It’s like giving the car its confidence back, one swipe at a time. And in a way, it gives something back to me too: clarity, focus, and that simple joy of turning hard work into something beautiful.
                        </p>
                        
                    </div>
                    <img 
                            src="/bwCert.png" 
                            alt="Detailed Car" 
                            className="mt-24 max-sm:mt-5 mb-24 scale-125 max-sm:scale-75 opacity-100"
                            style={{ maxWidth: '450px', maxHeight: '450px' }}
                        />
                </div>
            </section>
        </div>
    )
}