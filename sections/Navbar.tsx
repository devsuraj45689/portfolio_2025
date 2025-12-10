'use client'
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'Experience', 'Skills', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold" style={{ color: '#C6A667', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
          Suraj Sharma
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className="transition-colors font-medium"
              style={{ 
                color: activeSection === item.toLowerCase() ? '#C6A667' : '#666666',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {item}
            </button>
          ))}
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
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setMobileMenuOpen(false); // close menu on click
                }}
                className="transition-colors font-medium text-left"
                style={{ 
                  color: activeSection === item.toLowerCase() ? '#C6A667' : '#666666',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
