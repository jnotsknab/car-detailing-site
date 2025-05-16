import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
        {/* Row 1: Hero Section */}
            <section className="sticky top-0 flex flex-col justify-center items-center bg-gray-900 text-white h-30 sm:h-50 overflow-hidden z-20 shadow-2xl">
                <img 
                src="/policyImgs/privacypolicybanner.jpg" 
                alt="Detailed Car" 
                className="absolute w-auto h-auto object-cover opacity-75 transform scale-100"
                />
                <div className="z-10 text-center">
                <h1 className="text-3xl text-center sm:text-6xl font-bold mb-0">Privacy Policy</h1>
                </div>
            </section>


            {/* BackGround Image Dont Touch */}
            <div
                className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url(/policyImgs/privpolicybg.jpg)" }}
            ></div>


            {/* Privacy Policy Stuff */}
            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Information We Collect</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        We may collect the following types of information: personal information such as name, phone number, email address, vehicle details, and service preferences when you schedule through Calendly.
                        Additionally we may collect non-personal data like browser type, pages visited, and device information to help us improve the website UI experience.
                    </p>
                </div>
                </div>
            </section>
            

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">How We Use Your Information</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        We may use the information you provide to us for a variety of business purposes aimed at delivering and improving our services. This includes scheduling and performing vehicle detailing services, communicating with you about your appointment, and sending service-related updates or confirmations. We may also use your contact information to respond to inquiries, provide customer support, and address any issues or concerns you may have.
                        Additionally, we use collected data to improve the functionality, content, and usability of our website—allowing us to better tailor the experience to your needs. We may also use certain information for marketing purposes, such as sending promotional offers or reminders about future services, but only in accordance with applicable laws and, where required, with your consent. All communications will include an option to opt out or unsubscribe at any time.
                    </p>
                </div>
                </div>
            </section>

            {/* Row 4: Contact Info */}
            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Sharing of Information</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        We do not under any circumstances sell or rent your personal information. We may share your public information with trusted third-party services, such as booking or payment providers,
                        only when necessary to complete your booking or service request.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Data Security</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        We take the security of your personal information seriously. We implement appropriate technical and organizational measures to safeguard the data you provide to us, both online and offline. This includes the use of secure servers, encryption technologies, and internal access controls to prevent unauthorized access, use, or disclosure of your data.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Cookies and Analytics Technologies</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience, understand how users interact with our site, and provide relevant content or advertisements. Cookies are small data files stored on your device that help us remember your preferences and recognize repeat visitors.
                        You can choose to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can usually modify your settings to disable or delete them if you prefer. Please note that disabling cookies may limit certain features or functionality of our website.
                        We do not use cookies to collect sensitive personal information without your explicit consent.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Third-Party Websites and Services</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        Our website may contain links to third-party websites or services that are not operated or controlled by us. These may include booking platforms, payment processors, or social media links. Please be aware that we are not responsible for the privacy practices or content of these third-party sites.
                        We encourage you to review the privacy policies of any third-party websites you visit before providing any personal information. Your use of such third-party services is subject to their respective terms and policies.
                    </p>
                </div>
                </div>
            </section>

            <section className="flex-1 bg-gray-300 text-black flex items-center justify-between px-2 py-4 text-left sm:px-10 sm:py-6">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="z-10 w-full sm:w-auto rounded transform transition-transform duration-300 hover:scale-105">
                    <h2 className="text-center sm:text-left text-3xl sm:text-4xl px-8 py-4 font-semibold mb-0 sm:mb-2">Changes to This Privacy Policy</h2>
                    <p className="text-left sm:text-lg px-8 py-2 max-w-3x1 flex-grow leading-loose">
                        We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our business practices, legal requirements, or service offerings.
                        We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our website or services after any modifications to this policy will constitute your acknowledgment of the changes and your consent to the updated terms.
                    </p>
                </div>
                </div>
            </section>
        </div>
    );
}