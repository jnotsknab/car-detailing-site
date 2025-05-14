"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function BookPage(){
    const [imageList, setImageList] = useState([]);
    const [focusedImage, setFocusedImage] = useState(null);

    useEffect(() => {

        const images = [
            "/portfolioImgs/port0.jpeg",
            "/portfolioImgs/port1.jpeg",
            "/portfolioImgs/port2.jpeg",
            "/portfolioImgs/port3.jpeg",
            "/portfolioImgs/port4.jpeg",
            "/portfolioImgs/port5.jpeg",
            "/portfolioImgs/port6.jpeg",
            "/portfolioImgs/port7.jpeg",
            "/portfolioImgs/port8.jpeg",
            "/portfolioImgs/port9.jpeg",
            "/portfolioImgs/port10.jpeg",
            "/portfolioImgs/port11.jpeg"
        ];

        setImageList(images);
    }, []);

    const handleClickOutside = () => {
        setFocusedImage(null);
    }
    return (
        <div className="min-h-screen overflow-hidden bg-gray-950 text-white relative">
            {/*Dim background when an image is focused*/}
            {focusedImage && (
                <div
                    className="fixed inset-0 bg-gray-900 opacity-75 z-40"
                    onClick={handleClickOutside}
                />
            )}

            {/* Grid of scrolling images */}

            <div className="absolute w-full h-full animate-scroll bg-gray-950 flex flex-wrap z-10">
                {[...imageList, ...imageList].map((src, index) => (
                    <div key={index} className="w-1/3 p-1 z-20">
                        <Image
                            src={src}
                            alt={`Image ${index}`}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg object-cover cursor-pointer"
                            onClick={() => setFocusedImage(src)}
                        />
                    </div>
                ))}
            </div>

            {/* Display focused image */}
            {focusedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900/60"
                    onClick={handleClickOutside}
                >
                    <div
                    className="w-[75vw] max-w-4xl max-h-[90vh] p-2 sm:p-2 animate-zoomIn"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
                    >
                    <Image
                        src={focusedImage}
                        alt="Focused"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-lg object-contain"
                    />
                    </div>
                </div>
                )}

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateY(0);
                    }
                    100%{
                        transform: translateY(-500%)
                    }
                }

                .animate-scroll {
                    animation: scroll 180s linear infinite;
                }
            
            `}</style>

            <style jsx>{`
                @keyframes zoomIn {
                    0% {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    100%{
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-zoomIn {
                    animation: zoomIn 0.3s ease-out forwards;
                }
            
            `}</style>
            
        </div>
    );
}

