import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FatawaSection from './components/FatawaSection';
import BlogSection from './components/BlogSection';
import BookSection from './components/BookSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-manrope">
      <Navbar />
      <main>
        <Hero />
        <FatawaSection />
        <BookSection />
        <VideoSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;