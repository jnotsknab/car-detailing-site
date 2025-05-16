"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function ServicesPage() {
    
    const [showModal, SetShowModal] = useState(false)
    const [selectedLink, setSelectedLink] = useState("")

    const handleImgClick = (link) => {
        setSelectedLink(link)
        SetShowModal(true)
    }

    const handleClose = (link) => {
        SetShowModal(false)
        if (link) {
            window.open(link, "_blank")
        }
    }
    return (
        <div className="min-h-screen flex flex-col">
            <section className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-[url('/portfolioImgs/port5.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen">
                <div className="grid grid-cols-1 gap-4 flex-1 sm:grid-cols-3">
                    <div onClick={() => handleImgClick("https://calendly.com/bankwestautodetailing/standard-detail")} className="w-94 h-96 sm:w-auto sm:h-180 relative transform transition-transform duration-300 hover:scale-110 z-10 rounded-lg overflow-hidden">
                        <Image src="/serviceImgs/standardPlan.jpg" alt="Standard Detail" fill className="object-contain opacity-80"/>
                    </div>
                    <div onClick={() => handleImgClick("https://calendly.com/bankwestautodetailing/special-detail")} className="w-94 h-96 sm:w-auto sm:h-180 relative transform transition-transform duration-300 hover:scale-110 z-10 rounded-lg overflow-hidden">
                        <Image src="/serviceImgs/specialPlan.jpg" alt="Special Detail" fill className="object-contain rounded-lg opacity-80" />
                    </div>
                    <div onClick={() => handleImgClick("https://calendly.com/bankwestautodetailing/deluxe-detail")} className="w-94 h-96 sm:w-auto sm:h-180 relative transform transition-transform duration-300 hover:scale-110 z-10 rounded-lg overflow-hidden">
                        <Image src="/serviceImgs/deluxePlan.jpg" alt="Deluxe Detail" fill className="object-contain rounded-lg opacity-80" />
                    </div>
                </div>
            </section>
            
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[url('/portfolioImgs/port11.jpeg')] bg-cover bg-center transition-opacity duration-300">
                    <div className="bg-gray-300 rounded-lg shadow-xl p-6 max-w-md w-auto scale-75 sm:scale-100 md:scale-150 lg:scale-200  max-[375px]:scale-95 text-center animate-fadeIn">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">We come to you for only $10!</h2>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => {
                                handleClose(selectedLink + "-clone");
                                }}
                                className="shadow-2xl bg-blue-600 z-10 text-white px-6 py-3 sm:px-12 sm:py-2 rounded-lg text-sm hover:bg-blue-800 transition-transform duration-200 hover:scale-110"
                            >
                            Opt In
                            </button>
                            <button
                                onClick={() => {
                                handleClose(selectedLink);
                                }}
                                className="shadow-2xl bg-white z-10 text-gray-800 px-6 py-3 sm:px-12 sm:py-2 rounded-lg text-sm hover:bg-gray-200 transition-transform duration-200 hover:scale-110"
                            >
                            Opt Out
                            </button>
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}