/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      {/* Row 1: Hero Section */}
      <section className="sticky top-0 flex flex-col justify-center items-center bg-gray-900 text-white h-60 sm:h-90 overflow-hidden z-20">
        <img 
          src="/car.jpeg" 
          alt="Detailed Car" 
          className="absolute w-full h-full object-cover opacity-50 transform scale-100"
        />
        <div className="z-10 text-center">
          <img 
            src="/bwLogo.png" 
            alt="Detailed Car" 
            className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 scale-45 opacity-75 sm:top-[-60px] sm:scale-100"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
          <h1 className="text-4xl font-bold mb-6">Bankwest Auto Detailing</h1>
          <div className="space-x-6">
            <Link 
              href="/servicesoffered" 
              className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-transform duration-200 hover:scale-120 inline-block"
            >
              Book Now
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition-transform duration-200 hover:scale-120 inline-block"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Row 2: About Us */}

      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url(/portfolioImgs/port3.jpeg)" }}
      ></div>

      <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
        <div className=" z-10 w-auto rounded transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-1xl sm:text-3xl px-8 py-4 font-semibold mb-0 sm:mb-2">About Us</h2>
          <p className="text-left sm:text-base max-w-99/100 px-8 py-2">
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            
            

          </p>
        </div>
        <Link 
              href="/about" 
              className="bg-blue-600 z-10 text-white px-3 py-1 sm:px-12 sm:py-2 rounded-lg text-sm hover:bg-blue-800 
              sm:text-base transition-transform duration-200 hover:scale-120 inline-block whitespace-nowrap mt-4 sm:mt-0"
            >
              Learn More
        </Link>
      </section>
      

      {/* Row 3: Why Choose Us */}
      <section className="shadow-2xl flex-2 bg-sky-950 flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
        <div className=" z-10 rounded transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-1xl sm:text-3xl px-8 py-3 font-semibold mb-0 sm:mb-2">Why Choose Us?</h2>
          <p className="text-left sm:text-base max-w-99/100 px-8 py-4">
            We use top-tier products, meticulous techniques, and offer flexible mobile services. Satisfaction is guaranteed — your car will shine like never before!
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            We’re passionate about making your vehicle look brand new. With years of experience, we provide the highest quality detailing services for all types of vehicles.
            
            
          </p>
        </div>
        <Link 
              href="/servicesoffered" 
              className="bg-white z-10 text-black px-3 py-1 rounded-lg text-sm hover:bg-gray-300 self-center 
              sm:px-15 sm:py-2 sm:rounded-lg sm:text-base transition-transform duration-200 hover:scale-120 inline-block"
            >
              Services
        </Link>
      </section>

      {/* Row 4: Contact Info */}
      <section className="flex-1 bg-gray-300 flex items-center justify-center px-8 text-center text-gray-800 py-6">
        <div className="py-4 px-4 shadow-2xl z-10 rounded transform transition-transform duration-300 hover:scale-110">
          <h2 className="text-2xl font-semibold mb-2 sm:text-3xl">Contact Us</h2>
          <p>Email: ethansemail@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Instagram: <a className="text-blue-600" href="https://instagram.com/ethansinstagram" target="_blank">@ethansinstagram</a></p>
        </div>
      </section>
    </div>
  );
}
