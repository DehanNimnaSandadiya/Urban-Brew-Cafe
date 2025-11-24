import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import heroImage from '../assets/images/hero.jpg';
import BeanParticles from '../components/BeanParticles';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const parallaxText = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoAvailable, setIsVideoAvailable] = useState(true);

  const handleNavigate = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden pt-24 text-white sm:pt-28">
      <MotionDiv className="absolute inset-0" style={{ y: parallaxY }}>
        {isVideoAvailable ? (
          <video
            className={`h-full w-full object-cover transition-opacity duration-700 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            playsInline
            muted
            loop
            poster={heroImage}
            crossOrigin="anonymous"
            onLoadedData={() => setIsVideoReady(true)}
            onError={() => setIsVideoAvailable(false)}
          >
            <source src="https://cdn.coverr.co/videos/coverr-coffee-beans-roasting-7351/1080p.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-night/20 via-night/60 to-night" />
        <MotionDiv className="absolute inset-0 bg-gradient-to-r from-night/40 via-transparent to-night/50" style={{ y: parallaxY }} />
        <div className="absolute inset-0 bg-grid-lux opacity-20" />
        <BeanParticles />
      </MotionDiv>

      <MotionDiv
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:items-start md:text-left"
        style={{ y: parallaxText }}
      >
        <p className="text-xs uppercase tracking-[0.8em] text-parchment/70 md:text-left">Colombo · Sri Lanka</p>
        <MotionH1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="reveal-element mt-6 font-display text-4xl leading-[1.1] tracking-[0.1em] text-cream drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] sm:text-5xl md:text-7xl"
          data-reveal
        >
          Urban Brew Café
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 max-w-2xl text-base text-parchment/85 sm:text-lg md:text-xl"
        >
          A rooftop sanctuary inspired by Colombo’s golden sunsets. Third-wave coffee, slow-brunch plates, and
          velvet evenings crafted for dreamers.
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
        >
          <button type="button" className="btn-luxe" onClick={() => handleNavigate('menu')}>
            Explore Menu
          </button>
          <button
            type="button"
            className="btn-luxe border-white/40 text-parchment/70 hover:border-gold hover:text-night"
            onClick={() => handleNavigate('gallery')}
          >
            Virtual Tour
          </button>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid gap-6 text-sm text-parchment/80 sm:grid-cols-3"
        >
          {[
            { label: 'Bespoke Roast Lab', detail: 'Single-origin, roasted weekly' },
            { label: 'Colombo Skyline', detail: 'Panoramic rooftop terrace' },
            { label: 'Open Daily', detail: '7 AM — Midnight' },
          ].map((item) => (
            <div
              key={item.label}
              className="reveal-element border-t border-white/10 pt-4"
              data-reveal
            >
              <p className="text-xs uppercase tracking-[0.6em] text-gold">{item.label}</p>
              <p className="mt-2 text-base">{item.detail}</p>
            </div>
          ))}
        </MotionDiv>
      </MotionDiv>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent" />
    </section>
  );
};

export default Hero;

