"use client";
import Image from "next/image";
import link from "next/link";
import { useState } from "react";


export default function ContactUsPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("Message sent successfully! We will get back to you as soon as possible. Thank you for your patience!");
                setFormData({name: "", email: "", subject: "", message: ""});

            } else{
                setStatus("Failed to send message. Please wait for a while and try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("An error occurred. Please try again.");
        }    
    };
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
        {/* Row 1: Hero Section */}
            <section className="sticky top-0 flex flex-col justify-center items-center bg-gray-900 text-white h-30 sm:h-50 overflow-hidden z-20 shadow-2xl">
                <img 
                src="/policyImgs/contactbanner.jpg" 
                alt="Detailed Car" 
                className="absolute w-auto h-auto object-cover opacity-75 transform scale-100"
                />
                <div className="z-10 text-center">
                <h1 className="text-3xl text-center sm:text-6xl font-bold mb-0">Send Us an Email</h1>
                </div>
            </section>


            {/* BackGround Image Dont Touch */}
            <div
                className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url(/person2.jpeg)" }}
            ></div>

            {/* Contact Us Form*/}
            <section className="flex-1 bg-gray-300 text-black flex items-center justify-center px-2 py-4 text-center sm:px-10 sm:py-6">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 sm:hover:scale-130 text-center sm:scale-125 scale-85">
                        <p className="text-lg font-semibold px-8 py-2 max-w-[36rem] leading-loose">
                            For inquiries, please fill out the form below. We will get back to you as soon as possible.
                        </p>
                        <form onSubmit={handleSubmit} className="px-8 py-4 w-full max-w-xl shadow-2xl"
                        >
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="border border-gray-400 p-2 mb-4 w-full"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="border border-gray-400 p-2 mb-4 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="border border-gray-400 p-2 mb-4 w-full"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="border border-gray-400 p-2 mb-4 w-full h-32"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-transform duration-200 hover:scale-110"
                            >
                                Send Message
                            </button>
                            {status && (
                                <p
                                    className={`mt-4 text-sm font-medium ${
                                        status.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
                                    }`}
                                >
                                    {status}
                                </p>
                            )}

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}