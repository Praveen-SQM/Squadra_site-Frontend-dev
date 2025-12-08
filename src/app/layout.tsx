import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TopLoader from "./_components/Toploader";
import ClientLoaderWrapper from "./_components/ClientLoaderWrapper";

// Configure fonts using Next.js font optimization
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Squadra Media - Full-Stack Growth Partner",
  description:
    "Premium full-stack digital growth partner for brands. Media, Tech & Animation solutions.",
  authors: [{ name: "Squadra Media" }],
  openGraph: {
    title: "Squadra Media - Full-Stack Growth Partner",
    description: "Premium full-stack digital growth partner for brands",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
        width: 1200,
        height: 630,
        alt: "Squadra Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SquadraMedia",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <TopLoader />
        <Toaster />
        <ClientLoaderWrapper>{children}</ClientLoaderWrapper>
      </body>
    </html>
  );
}
