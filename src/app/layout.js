import { Titillium_Web } from "next/font/google";
import "./globals.css";

// Load the font and assign it to a CSS variable
const titillium = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-titillium",
  weight: ["400", "600", "700"], // choose weights you need
});

export const metadata = {
  title: "BankWest Auto Detailing",
  description: "Professional auto detailing services by BankWest Auto Detailing. We provide high-quality car cleaning, interior and exterior detailing, and paint protection services to keep your vehicle looking brand new.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titillium.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
