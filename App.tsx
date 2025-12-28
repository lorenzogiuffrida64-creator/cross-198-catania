import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AllServices from './components/AllServices';
import Testimonials from './components/Testimonials';
import BrandCarousel from './components/BrandCarousel';
import FinalCTA from './components/FinalCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import CommunityPage from './components/CommunityPage';
import ServicesPage from './components/ServicesPage';
import MapSection from './components/MapSection';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    // Optimized intersection observer for reveal animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
        revealObserver.observe(el);
      });
    };

    // Re-run observation when page changes
    const timeout = setTimeout(observeElements, 150);
    
    // Smooth scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      clearTimeout(timeout);
      revealObserver.disconnect();
    };
  }, [currentPage]);

  const navigate = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <BackgroundEffects />
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
            <AllServices onNavigate={navigate} />
            <Testimonials />
            <BrandCarousel />
            <ContactForm />
            <FinalCTA />
          </>
        ) : currentPage === 'servizi' ? (
          <>
            <ServicesPage />
          </>
        ) : (
          <>
            <CommunityPage />
            <ContactForm />
          </>
        )}
      </main>
      
      <div className="relative z-10">
        <MapSection />
        <Footer onNavigate={navigate} />
      </div>
    </div>
  );
};

export default App;