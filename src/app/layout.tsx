import type { Metadata } from "next";
import '../../styles/fonts.css';
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";
import TopLoader from "./_components/Toploader";
import InitialVideoLoader from "./_components/Loader";




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

    <html 
    lang="en" suppressHydrationWarning >
   
      <body
        className={`antialiased`}>

          <TopLoader/>
          <InitialVideoLoader/>
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

