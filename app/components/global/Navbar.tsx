'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AuthModal } from './AuthModal';
import { MenuIcon, X } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#", label: "Products" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Clients" },
    { href: "#", label: "Resources" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "Enterprise" },
  ];

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-gradient-to-r from-[#f78fb3] via-[#f8a5c2] to-[#c8d6e5] backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-gray-200 justify-between opacity-90 transition-all duration-1000 ease-in-out">
      <aside className="flex items-center gap-[2px]">
        <Link href="/" className="flex items-center gap-2">
          <p className="text-3xl font-bold text-white">Planzy</p>
        </Link>
      </aside>
      
      {/* Desktop Navigation */}
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="text-white hover:text-gray-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-[150] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu} />
      
      <nav className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#f78fb3] via-[#f8a5c2] to-[#c8d6e5] z-[200] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full bg-transparent">
          <div className="flex justify-end p-4 bg-transparent">
            <button onClick={toggleMobileMenu} className="text-white hover:text-gray-200">
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex-1 px-4 space-y-4 bg-transparent">
            {navLinks.map((link, index) => (
              <li key={index} className="bg-transparent">
                <Link 
                  href={link.href} 
                  className="block py-2 text-white hover:text-gray-200 transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Mobile Auth Button */}
            <li className="md:hidden pt-4 border-t border-white/20 bg-transparent">
              <div className="flex justify-center bg-transparent">
                <AuthModal />
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <aside className="flex items-center gap-4">
        {/* Desktop Auth Button - hidden on mobile */}
        <div className="hidden md:block">
          <AuthModal/>
        </div>
        <button onClick={toggleMobileMenu} className="md:hidden">
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
      </aside>
    </header>
  );
};

export default Navbar;
