import Image from "next/image";
import Link from "next/link"

export default function TOSPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
        {/* Row 1: Hero Section */}
            <section className="sticky top-0 flex flex-col justify-center items-center bg-gray-900 text-white h-30 sm:h-50 overflow-hidden z-20 shadow-2xl">
                <img 
                src="/policyImgs/tosbanner.jpg" 
                alt="Detailed Car" 
                className="absolute w-auto h-auto object-cover opacity-75 transform scale-100"
                />
                <div className="z-10 text-center">
                <h1 className="text-3xl text-center sm:text-6xl font-bold mb-0">Terms of Service</h1>
                </div>
            </section>


            {/* BackGround Image Dont Touch */}
            <div
                className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url(/policyImgs/tosbg.jpg)" }}
            ></div>


            {/* Tos Stuff */}
            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Services Provided</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        BankWest Auto Detailing offers premium vehicle detailing services. All services are provided as described on our website or as discussed at the time of booking. We reserve the right to update or modify services, pricing, and availability at any time without prior notice.
                    </p>
                </div>
                </div>
            </section>
            

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Bookings & Cancellations</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        Customers may book appointments through our website, phone, or in person. We kindly ask for at least 24 hours notice for cancellations or rescheduling. Missed appointments or cancellations with less than 24 hours notice may be subject to a cancellation fee. We reserve the right to cancel or reschedule appointments due to weather, equipment issues, or other unforeseen circumstances. In such cases, we will make every effort to notify you as early as possible and arrange an alternative time.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Payment</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        Payment is due upon completion of the service unless otherwise agreed in writing. We accept Cash-App, Venmo, Cash and we will be accepting credit cards through Stripe in the near future.
                        All prices listed on the website are subject to change without notice. Promotional pricing may be limited-time only and subject to availability.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Customer Responsibilities</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        Customers of BankWest Auto Detailing are responsible for the following: ensuring the vehicle is accesible at the scheduled time and location- if applicable, otherwise location will be the place of business
                        located at 57 TimberCreek Ct, Lake Jackson, TX, 77566. Removing personal belongings or valuables from the vehicle. Informing us of any exisitng damage or sensitive areas prior to service. Additionally, we will
                        not be held liable for any loss or damage to personal items left inside the vehicle.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Limitations of Liability</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        While we take great care in providing our services for you, BankWest Auto Detailing will not be held responsible for: pre existing damage to the vehicle or its components,
                        any damage that results from poor vehicle condition- ie. rust, cracked trim, etc. and any delays caused by circumstances beyond our control. To the maximum extent
                        permitted by law, we shall not be held liable for any indirect, incidental, or consequential damages related to your use of our services or website.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Intellectual Property</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        All content on our website, including text, images, graphics, and logos, is the property of BankWest Auto Detailing and is protected by copyright and other intellectual property laws. You may not use or reproduce any content without prior written permission.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Privacy</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our website or booking a service, you consent to the practices described in that policy.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Changes to These Terms</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        We may update these Terms of Service at any time. Any changes will be posted on this page with a revised date. By continuing to use the site or our services after changes are made, you agree to be bound by the updated Terms.
                    </p>
                </div>
                </div>
            </section>
        </div>
    );
}