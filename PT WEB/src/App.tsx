import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1).toLowerCase() || 'home';
      setCurrentPage(hash);
      // Smooth scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="page-container">
            <Hero />
            <About />
            <Testimonials />
            <Contact />
          </div>
        );
      case 'about':
        return (
          <div className="page-container">
            <About />
            <Contact  />
          </div>
        );
      case 'courses':
        return (
          <div className="page-container">
            <Courses />
            <Contact />
          </div>
        );
      case 'gallery':
        return (
          <div className="page-container">
            <Gallery />
            <Contact />
          </div>
        );
      case 'testimonials':
        return (
          <div className="page-container">
            <Contact />
          </div>
        );
      case 'contact':
        return (
          <div className="page-container">
            <Contact />
          </div>
        );
      default:
        return (
          <div className="page-container">
            <Hero />
            <About />
            <Testimonials />
            <Contact />
          </div>
        );
    }
  };

  return (
    <div className="App min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;