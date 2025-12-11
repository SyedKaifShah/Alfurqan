import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-24 bg-primary-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-800 border border-primary-700 text-primary-200 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Featured Series
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 leading-tight">
              Ahkam-e-Shariat <br/>
              <span className="text-primary-300">By Mufti Akmal</span>
            </h2>
            <p className="text-primary-200 text-lg mb-8 max-w-md font-manrope">
              Deepen your understanding of Islamic jurisprudence (Fiqh) with clear, practical explanations of daily matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.youtube.com/results?search_query=ahkam+e+shariat+by+mufti+akmal+playlist" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-white/10"
                >
                  <Play size={20} fill="currentColor" />
                  Watch on YouTube
                </a>
                 <a 
                  href="https://www.facebook.com/AlFurqanScholarsAcademyOfficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-800 border border-primary-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors flex items-center justify-center gap-3"
                >
                  <ExternalLink size={20} />
                  Visit Facebook
                </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Decoration */}
            <div className="absolute -inset-4 bg-primary-500/30 rounded-3xl blur-2xl"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-700 bg-gray-900 aspect-video group">
              {/* Using a high quality Islamic recitation or relevant placeholder since specific playlist ID is not available for embed */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Z9m7KZMx_H0" 
                title="Featured Islamic Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;