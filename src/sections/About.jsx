import { motion } from 'framer-motion';
import { Coffee, Leaf, Sparkles, TimerReset } from 'lucide-react';
import CountUp from 'react-countup';

import interior1 from '../assets/images/interior1.jpg';
import latte from '../assets/images/latte.jpg';

const features = [
  {
    title: 'Slow-roasted artistry',
    description: 'Curated micro-lot beans roasted with our signature Colombo heat curve.',
    icon: Coffee,
    accent: 'bg-gold/15 text-gold',
  },
  {
    title: 'Seasonal botanicals',
    description: 'Sage, cardamom, and tropical florals infused into syrups & spritzes.',
    icon: Leaf,
    accent: 'bg-sage/20 text-sage',
  },
  {
    title: 'Private tasting rituals',
    description: 'Invite-only cupping sessions led by our head roaster every Friday.',
    icon: Sparkles,
    accent: 'bg-parchment/10 text-parchment',
  },
  {
    title: 'Sunrise to midnight',
    description: 'A day-to-night refuge with brunch mornings and vinyl nights.',
    icon: TimerReset,
    accent: 'bg-gold/15 text-gold',
  },
];

const stats = [
  { label: 'Happy guests', value: 520, suffix: '+', delay: 0.1 },
  { label: 'Origin partners', value: 18, suffix: '', delay: 0.2 },
  { label: 'Signature pours', value: 32, suffix: '', delay: 0.3 },
];

const MotionArticle = motion.article;
const MotionDiv = motion.div;

const About = () => (
  <section id="about" className="bg-onyx py-20 text-cream sm:py-24">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr,0.9fr]">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.8em] text-gold">Our house ritual</p>
          <h2 className="section-heading reveal-element text-left leading-snug" data-reveal>
            A refined Colombo escape where coffee, cuisine, and culture collide.
          </h2>
          <p className="text-base text-parchment/80 md:text-lg">
            Urban Brew pairs slow coffee science with a rooftop atmosphere inspired by % Arabica and Colombo’s
            skyline. Every corner is infused with sage green botanicals, gold accents, and curated soundscapes.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {features.map(({ title, description, icon: Icon, accent }) => {
            const IconGraphic = Icon;
            return (
              <MotionArticle
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="reveal-element group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl"
                data-reveal
              >
                <div className={`mb-4 inline-flex items-center rounded-full px-4 py-2 text-xs tracking-[0.5em] ${accent}`}>
                  <IconGraphic size={16} className="mr-2 opacity-80" />
                  Atelier
                </div>
                <h3 className="font-display text-xl text-cream">{title}</h3>
                <p className="mt-2 text-sm text-parchment/70">{description}</p>
                <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-sage/20 blur-3xl transition group-hover:scale-125" />
              </MotionArticle>
            );
          })}
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(({ label, value, suffix, delay }) => (
            <MotionDiv
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay }}
              className="reveal-element rounded-3xl border border-white/5 bg-night/60 p-6 text-center backdrop-blur-xl"
              data-reveal
            >
              <p className="font-display text-3xl text-gold">
                <CountUp end={value} duration={2} suffix={suffix} enableScrollSpy scrollSpyOnce />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.5em] text-parchment/60">{label}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -right-4 bottom-6 h-28 w-28 rounded-full bg-sage/40 blur-3xl" />
        <div className="glass-elevated relative overflow-hidden rounded-[40px]">
          <img src={interior1} alt="Luxe seating at Urban Brew" className="h-[320px] w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-xs uppercase tracking-[0.6em] text-parchment/60">Signature space</p>
            <p className="mt-2 text-2xl font-display text-white">Rooftop Lounge</p>
          </div>
        </div>
        <div className="glass-elevated absolute -bottom-12 right-4 w-56 rotate-3 p-4 shadow-glow">
          <img src={latte} alt="Latte art" className="h-32 w-full rounded-2xl object-cover" loading="lazy" />
          <p className="mt-3 text-sm text-parchment/80">Executive pour-over flight every evening 7–9 PM.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

