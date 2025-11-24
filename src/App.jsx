import { useEffect, useState } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Hero from './sections/Hero';
import MenuHighlights from './sections/MenuHighlights';
import FooterSection from './sections/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      wheelMultiplier: 0.9,
      smoothTouch: false,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return undefined;

    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((element) => {
      if (!element.classList.contains('reveal-active')) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="relative bg-night text-parchment antialiased">
      {isLoading && <Preloader />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Gallery />
      </main>
      <FooterSection />
    </div>
  );
};

export default App;
