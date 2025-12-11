import React, { useState } from 'react';
import { Menu, X, Search, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fatawa', href: '#fatawa' },
    { name: 'Academy Blogs', href: '#blogs' },
    { name: 'Library', href: '#books' },
    { name: 'Media', href: '#video' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <img 
              src="https://i.ibb.co/6y4tW6C/image.jpg" 
              alt="Al-Furqan Logo" 
              className="h-12 w-12 object-contain rounded-full border border-primary-100 group-hover:border-primary-300 transition-colors"
            />
            <div>
              <h1 className="text-xl font-bold font-syne text-primary-900 leading-tight">Al-Furqan</h1>
              <p className="text-[10px] text-primary-600 font-manrope tracking-[0.2em] uppercase font-semibold">Scholars Academy</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors duration-200 font-manrope"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-900 transition-all shadow-lg shadow-primary-900/20 hover:shadow-primary-900/30 flex items-center gap-2">
              <BookOpen size={16} />
              <span>Student Portal</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-800 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
               <button className="w-full bg-primary-800 text-white px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md">
                <BookOpen size={18} />
                <span>Student Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;