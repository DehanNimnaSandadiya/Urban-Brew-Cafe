import { motion } from 'framer-motion';

const MotionArticle = motion.article;

const MenuCard = ({ image, title, description, badge, price }) => (
  <MotionArticle
    whileHover={{ rotateX: 6, rotateY: -4, scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    className="reveal-element group relative"
    style={{ perspective: '1200px' }}
    data-reveal
  >
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-night/40 shadow-[0_20px_45px_rgba(0,0,0,0.5)] sm:rounded-[32px]">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-transparent" />
      {badge && (
        <span className="absolute left-6 top-6 rounded-full bg-gold/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-night shadow-glow">
          {badge}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
        <h3 className="font-display text-3xl">{title}</h3>
        <p className="mt-3 text-sm text-parchment/80">{description}</p>
        <span className="mt-4 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.5em] text-parchment/70">
          {price}
        </span>
      </div>
    </div>
  </MotionArticle>
);

export default MenuCard;

