'use client'
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const firstHash = window.location.hash.slice(1);
    const pathName = window.location.pathname.slice(1);
    if(pathName){
      setActiveSection(pathName);
    } else if (firstHash) {
      setActiveSection(firstHash);
    }    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('activeSection',activeSection,"active session>24")

  const navItems = [
    {
      title:"Home",
      href:"/"
    },
    {
      title:"Projects",
      href:"/#projects"
    },
    {
      title:"Experience",
      href:"/#experience"
    },
    {
      title:"Skills",
      href:"/#skills"
    },
    {
      title:"Contact",
      href:"/contact-us"
    }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold" style={{ color: '#C6A667', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
          <Link href="/">
              Suraj Sharma
          </Link>
        </div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href?.split("/")[0]?.toLowerCase();
            const newActiveSection = item.href?.split("/")[0]?.toLowerCase();
            return (
            <button
              key={item.title}
              onClick={() => setActiveSection(newActiveSection)}
              className="transition-colors font-medium"
              style={{ 
                color: isActive ? '#C6A667' : '#666666',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              <Link href={item?.href}>
                {item.title}
              </Link>
            </button>
          )
          }
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-sm">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  setActiveSection(item.title?.toLowerCase());
                  setMobileMenuOpen(false); // close menu on click
                }}
                className="transition-colors font-medium text-left"
                style={{ 
                  color: activeSection === item.href?.split("/")[0] ? '#C6A667' : '#666666',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <Link href={item?.href}>
                  {item.title}
                </Link>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
