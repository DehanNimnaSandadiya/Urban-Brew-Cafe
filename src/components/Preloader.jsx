const Preloader = () => (
  <div className="fixed inset-0 z-[999] grid place-items-center bg-night text-cream">
    <div className="flex flex-col items-center gap-6">
      <svg
        width="140"
        height="140"
        viewBox="0 0 160 160"
        fill="none"
        className="text-gold"
        aria-hidden="true"
      >
        <circle
          cx="80"
          cy="80"
          r="65"
          stroke="currentColor"
          strokeWidth="2.5"
          className="opacity-30"
        />
        <path
          d="M55 86c12 0 18-12 25-28 5 16 13 28 25 28 10 0 18-8 18-18 0-18-18-32-43-32S37 50 37 68c0 10 8 18 18 18Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="preloader-path"
        />
      </svg>
      <div className="text-center">
        <p className="font-serif text-xl uppercase tracking-[0.6em] text-gold">Urban Brew</p>
        <p className="mt-2 text-sm text-parchment/70">Curating your perfect pour...</p>
      </div>
    </div>
  </div>
);

export default Preloader;


