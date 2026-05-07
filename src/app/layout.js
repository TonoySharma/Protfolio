import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import "animate.css";
import CursorFollower from "@/components/cursorFollower/CursorFollower";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tonoy Sharma | Developer Portfolio",
  description:
    "Explore my portfolio, projects, skills, and development journey.",
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
          <main>{children}</main>
   

      </body>
    </html>
  );
}