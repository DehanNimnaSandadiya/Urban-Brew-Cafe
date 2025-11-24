import beans from '../assets/images/beans.jpg';
import dessert from '../assets/images/dessert.jpg';
import latte from '../assets/images/latte.jpg';

const socials = [
  { name: 'Instagram', href: 'https://instagram.com', label: '@urbanbrew.lk' },
  { name: 'WhatsApp', href: 'https://wa.me/94771234567', label: '+94 77 123 4567' },
  { name: 'Reservations', href: 'mailto:hello@urbanbrew.lk', label: 'hello@urbanbrew.lk' },
];

const quickLinks = [
  { label: 'Home', target: 'home' },
  { label: 'Menu', target: 'menu' },
  { label: 'About', target: 'about' },
  { label: 'Gallery', target: 'gallery' },
  { label: 'Contact', target: 'contact' },
];

const instaShots = [latte, dessert, beans];

const Footer = () => {
  const handleNavigate = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-night text-cream" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.7em] text-gold">Handcrafted in Colombo</p>
              <h2 id="footer-heading" className="mt-4 font-display text-4xl text-cream">
                Urban Brew
              </h2>
              <p className="mt-4 max-w-xl text-sm text-parchment/70">
                Curated mornings, golden hours, and midnight espresso therapy atop Colombo&apos;s skyline.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-parchment/50">Navigate</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {quickLinks.map(({ label, target }) => (
                    <li key={target}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(target)}
                        className="text-parchment/70 transition hover:text-gold"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-parchment/50">Connect</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {socials.map(({ name, href, label }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-parchment/70 transition hover:text-gold"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-8 rounded-[36px] border border-white/10 bg-onyx/80 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-gold">Visit us</p>
              <p className="mt-3 text-base text-parchment">
                123 Galle Road, Colombo 03
              </p>
              <div className="mt-4 overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="Urban Brew location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63324.006125967696!2d79.8296745!3d6.9270798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595a12bf0a3b%3A0xdbde3ece1962fa2a!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  loading="lazy"
                  className="h-48 w-full border-0"
                />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-gold">Instagram</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {instaShots.map((shot, index) => (
                  <div key={shot} className="overflow-hidden rounded-2xl border border-white/10">
                    <img src={shot} alt={`Instagram preview ${index + 1}`} className="h-20 w-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-parchment/60">
        © {new Date().getFullYear()} Urban Brew Café · Handcrafted in Colombo
      </div>
    </footer>
  );
};

export default Footer;

