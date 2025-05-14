"use client"
import Image from "next/image"

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <section className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-[url('/portfolioImgs/port5.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen">
                <div className="grid grid-cols-1 gap-4 flex-1 sm:grid-cols-3">
                    <div className="w-94 h-96 sm:w-auto sm:h-180 relative transform transition-transform duration-300 hover:scale-110 z-10 rounded-lg overflow-hidden">
                        <Image src="/serviceImgs/standardPlan.jpg" alt="Person 1" fill className="object-contain opacity-80"/>
                    </div>
                    <div className="w-94 h-96 sm:w-auto sm:h-180 relative transform transition-transform duration-300 hover:scale-110 z-10 rounded-lg overflow-hidden">
                        <Image src="/serviceImgs/specialPlan.jpg" alt="Person 2" fill className="object-contain rounded-lg opacity-80" />
                    </div>
                    <div className="w-94 h-96 sm:w-auto sm:h-180 relative transform transition-transform duration-300 hover:scale-110 z-10 rounded-lg overflow-hidden">
                        <Image src="/serviceImgs/deluxePlan.jpg" alt="Person 3" fill className="object-contain rounded-lg opacity-80" />
                    </div>
                </div>
            </section>

        </div>
    )
}