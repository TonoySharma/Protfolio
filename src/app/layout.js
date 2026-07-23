import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import "animate.css";
import CursorFollower from "@/components/cursorFollower/CursorFollower";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://protfolio-wine-two.vercel.app/"),

  title: {
    default: "Tonoy Sharma | Full Stack Developer",
    template: "%s | Tonoy Sharma",
  },

  description:
    "Modern and responsive developer portfolio showcasing projects, skills, and experience in full stack web development.",

  keywords: [
    "Tonoy Sharma",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Web Developer Bangladesh",
  ],

  authors: [{ name: "Tonoy Sharma" }],
  creator: "Tonoy Sharma",

  openGraph: {
    title: "Tonoy Sharma | Full Stack Developer",
    description:
      "Explore my portfolio, projects, technical skills, and development journey.",
    url: "https://protfolio-wine-two.vercel.app/",
    siteName: "Tonoy Portfolio",
    images: [
      {
        url: "/tonoy.png",
        width: 1200,
        height: 630,
        alt: "Tonoy Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tonoy Sharma | Full Stack Developer",
    description:
      "Modern developer portfolio built with Next.js, React, and Tailwind CSS.",
    images: ["/tonoy.png"],
  },

  icons: {
    icon: "/tonoy.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <CursorFollower />
        <SmoothScroll>
        <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}