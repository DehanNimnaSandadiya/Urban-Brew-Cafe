import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const MotionDiv = motion.div;
const MotionUl = motion.ul;
const MotionLi = motion.li;
const MotionAside = motion.aside;

const navLinks = [
  { label: 'Home', target: 'home' },
  { label: 'Menu', target: 'menu' },
  { label: 'About', target: 'about' },
  { label: 'Gallery', target: 'gallery' },
  { label: 'Contact', target: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleNavigate = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const headerClasses = isScrolled
    ? 'backdrop-blur-2xl bg-night/80 border-b border-gold/40 shadow-[0_15px_35px_rgba(0,0,0,0.65)]'
    : 'bg-gradient-to-b from-night/80 to-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerClasses}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6" aria-label="Primary navigation">
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="sr-only font-serif text-2xl tracking-[0.6em] text-cream md:not-sr-only md:inline-flex"
        >
          Urban <span className="text-gold">Brew</span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, target }) => (
            <button
              key={target}
              type="button"
              onClick={() => handleNavigate(target)}
              className="text-[0.75rem] font-semibold uppercase tracking-[0.5em] text-parchment/70 transition hover:text-gold"
            >
              {label}
            </button>
          ))}
          <button type="button" className="btn-luxe" onClick={() => handleNavigate('contact')}>
            Reserve
          </button>
        </div>

        <div className="flex flex-1 justify-end md:flex-none">
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-cream lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-night/70 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <MotionAside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-night/95 px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] lg:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <p className="font-serif text-lg uppercase tracking-[0.5em] text-gold">Urban Brew</p>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="h-10 w-10 rounded-full border border-white/10 text-parchment"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="mx-auto" />
                </button>
              </div>

              <MotionUl
                initial="hidden"
                animate="show"
                exit="hidden"
                className="space-y-6 text-2xl font-display text-cream"
              >
                {navLinks.map(({ label, target }, index) => (
                  <MotionLi
                    key={target}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.05 * index },
                      },
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavigate(target)}
                      className="w-full text-left tracking-[0.4em] text-parchment/80 transition hover:text-gold"
                    >
                      {label}
                    </button>
                  </MotionLi>
                ))}
              </MotionUl>

              <div className="mt-10 space-y-4 text-left">
                <p className="text-xs uppercase tracking-[0.5em] text-parchment/50">Colombo · Sri Lanka</p>
                <button type="button" className="btn-luxe w-full justify-center" onClick={() => handleNavigate('contact')}>
                  Reserve a Table
                </button>
              </div>
            </MotionAside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

