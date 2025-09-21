'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f3ef]/80 backdrop-blur-md border-b border-[#d2c1b6]/30">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            PORTOFOLIO
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium"
            >
              Skills
            </button>
            <Link
              href="/certificates"
              className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium"
            >
              Certificates
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#1b3c53] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#1b3c53] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#1b3c53] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#f9f3ef] border-b border-[#d2c1b6]/30 shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium text-left"
              >
                Skills
              </button>
              <Link
                href="/certificates"
                className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Certificates
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#1b3c53] hover:text-[#456882] transition-colors font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
