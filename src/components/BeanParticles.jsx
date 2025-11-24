const particles = [
  { top: '12%', left: '18%', delay: '0s', scale: '1' },
  { top: '35%', left: '8%', delay: '1s', scale: '0.9' },
  { top: '22%', left: '78%', delay: '0.3s', scale: '1.1' },
  { top: '68%', left: '15%', delay: '1.6s', scale: '0.85' },
  { top: '70%', left: '82%', delay: '0.8s', scale: '1' },
  { top: '50%', left: '60%', delay: '1.2s', scale: '0.95' },
  { top: '15%', left: '55%', delay: '0.6s', scale: '1.05' },
];

const BeanParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {particles.map(({ top, left, delay, scale }, index) => (
      <span
        key={`bean-${top}-${index}`}
        className="floating-bean absolute h-3 w-2 rounded-full bg-gradient-to-b from-gold/80 to-gold/40 blur-[0.5px]"
        style={{
          top,
          left,
          animationDelay: delay,
          transform: `scale(${scale})`,
        }}
      />
    ))}
  </div>
);

export default BeanParticles;


