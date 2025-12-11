import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gray-50 group"
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
      />

      {/* Smooth Cursor Follow Glow */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.15), transparent 40%)'
        }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent-100/60 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            Welcome to Al-Furqan Scholars Academy
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 font-syne leading-[1.1]">
            Illuminating Minds with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              Sacred Knowledge
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 font-manrope leading-relaxed">
            Access authentic Islamic education, scholarly fatawa by Mufti Akmal, and a vast library of resources. Join a global community of seekers.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#books" className="w-full sm:w-auto px-8 py-4 bg-primary-800 text-white rounded-2xl font-semibold hover:bg-primary-900 transition-all shadow-xl shadow-primary-900/20 hover:shadow-primary-900/30 flex items-center justify-center gap-2 group">
              Start Learning
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#video" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 shadow-sm">
              <PlayCircle className="w-5 h-5 text-gray-400" />
              Watch Orientation
            </a>
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-10">
            {[
              { label: 'Active Students', value: '5,000+' },
              { label: 'Video Lectures', value: '1,200+' },
              { label: 'Books Available', value: '850+' },
              { label: 'Expert Scholars', value: '40+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group/stat cursor-default">
                <div className="text-3xl font-bold font-syne text-gray-900 group-hover/stat:text-primary-700 transition-colors">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;