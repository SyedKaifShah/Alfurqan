import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://i.ibb.co/6y4tW6C/image.jpg" 
                  alt="Al-Furqan Logo" 
                  className="h-10 w-10 object-contain rounded-full border border-gray-100"
                />
                <span className="text-lg font-bold font-syne text-gray-900">Al-Furqan</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Dedicated to spreading authentic Islamic knowledge through modern means, connecting hearts to the Divine.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/AlFurqanScholarsAcademyOfficial/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
               <a href="https://www.youtube.com/results?search_query=ahkam+e+shariat+by+mufti+akmal+playlist" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
               <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-syne font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-700 transition-colors">About Us</a></li>
              <li><a href="#fatawa" className="hover:text-primary-700 transition-colors">Fatawa</a></li>
              <li><a href="#video" className="hover:text-primary-700 transition-colors">Lectures</a></li>
              <li><a href="#books" className="hover:text-primary-700 transition-colors">Library</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-700 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-700 transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-primary-700 transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-primary-700 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-bold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe to get weekly wisdom and updates.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm transition-shadow"
              />
              <button className="w-full bg-gray-900 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-black transition-all shadow-lg shadow-gray-900/10">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2024 Al-Furqan Scholars Academy. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;