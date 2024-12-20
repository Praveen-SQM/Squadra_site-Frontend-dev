import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../../styles/fonts.css';
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";



const plusJakartaSans = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Squadra Media",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <body
        className={`antialiased`}>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="bg-white text-gray-800">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

