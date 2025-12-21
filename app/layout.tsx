
import "./globals.css";
import { Inter } from "next/font/google";
import { FooterSection,NavbarSection } from "../sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suraj Sharma – Full Stack Engineer",
  description: "Portfolio of a 4+ years experienced React/Next.js Engineer",
  icons:{
    icon: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-white text-gray-900"}>
        <div className="min-h-screen bg-[#FCFCFC]" style={{ fontFamily: 'Inter, sans-serif' }}>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          `}</style>

            <NavbarSection />
              {children}
            <FooterSection />
        </div>
      </body>
    </html>
  );
}
