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
          className="absolute w-full h-full object-cover opacity-75 transform scale-100"
        />
        <div className="z-10 text-center">
          <img 
            src="/bwLogo.png" 
            alt="Detailed Car" 
            className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 scale-45 opacity-75 sm:top-[-60px] sm:scale-100"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
          <h1 className="text-3xl sm:text-6xl font-bold mb-6">BankWest Auto Detailing</h1>
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
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/portfolioImgs/port3.jpeg)" }}
      ></div>

      <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">About Us</h2>
            <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
              At BankWest Auto Detailing, we’re more than just a car detailing service — we’re a local, family-owned business built on trust, quality, and a love for cars. With years of hands-on experience, we take pride in treating every vehicle like it’s our own, delivering showroom-quality results with a personal touch. Whether it’s a daily driver, weekend cruiser, or work vehicle, we’re committed to making your car look its absolute best. When you choose us, you’re not just supporting a business — you’re supporting a family that cares about our community and every customer we serve.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/about" 
              className="bg-blue-600 z-10 text-white px-6 py-3 sm:px-12 sm:py-2 rounded-lg text-sm hover:bg-blue-800 
              sm:text-base transition-transform duration-200 hover:scale-120 inline-block whitespace-nowrap max-sm:mt-2 max-sm:mb-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      

      {/* Row 3: Why Choose Us */}
      <section className="shadow-2xl flex-2 bg-sky-950 flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
            <h2 className=" text-center sm:text-left text-3xl sm:text-4xl px-8 py-3 font-semibold -mb-1 mt-2 sm:mb-2">Why Choose Us?</h2>
            <p className="text-left sm:text-lg max-w-99/100 px-8 py-4 leading-loose">
              At BankWest Auto Detailing, we’re not just another car detailing company—we are your car’s personal concierge. Here’s why our customers keep coming back and referring us to their friends:
              We come to you. Forget the hassle of waiting rooms or dropping off your vehicle. Our  mobile detailing team brings premium service right to you for a small surcharge of only ten dollars! At BankWest Auto Detailing our priority is providing you quality without compromising time or affordability.
              We pay attention to the details. Every vehicle we touch receives meticulous care, from deep interior cleans to mirror-finish exterior polishes. No speck of dirt goes unnoticed—we treat your car like it’s our own.
              We use top-tier products and equipment. Only industry-leading products and tools make it into our kit—safe for your vehicle, safe for the environment, and designed to deliver long-lasting results.
              We’re trusted and transparent. Our team is reliable and highly trained. We provide upfront pricing with no hidden fees—just honest service and flawless results.
              High-quality detailing should not come with a high quality price tag. We offer flexible packages that deliver luxury-level care at affordable rates.
              We guarantee customer satisfaction. If you are not completely satisfied, we will make it right. That’s our promise! Bring your car back to life and join the BankWest family today!
            </p>
          </div>
          <div className="flex justify-center">
            <Link 
              href="/servicesoffered" 
              className="bg-white z-10 text-black px-6 py-3 sm:px-15 sm:py-2 rounded-lg text-sm hover:bg-gray-300 
              sm:text-base transition-transform duration-200 hover:scale-120 inline-block whitespace-nowrap max-sm:-mt-4 max-sm:mb-4"
            >
              Services Offered
            </Link>
          </div>
        </div>
      </section>

      {/* Row 4: Contact Info */}
      <section className="flex flex-col bg-gray-300 items-center justify-between px-8 text-center text-gray-800 py-6">
        <div className="py-4 px-2 sm:px-20 sm:text-2xl shadow-2xl z-10 rounded transform transition-transform duration-300 hover:scale-110 flex-grow">
          <h2 className="text-2xl font-bold mb-2 sm:text-4xl">Contact Us</h2>
          <p><span className="font-semibold">Email: </span> BankWestAutoDetailing@gmail.com</p>
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <a href="tel:1234567890" className="text-blue-600 hover:underline">
              (123) 456-7890
            </a>
          </p>
          <p><span className="font-semibold">Instagram: </span>  <a className="text-blue-600" href="https://instagram.com/ethansinstagram" target="_blank">@ethansinstagram</a></p>
        </div>
        <footer className="self-center sm:self-start sm:mt-0 mb-0 mt-2 ml-4">
          <p className="text-sm">
            Website Developed by Suspiria &trade;
          </p>
        </footer>
      </section>
    </div>
  );
}
