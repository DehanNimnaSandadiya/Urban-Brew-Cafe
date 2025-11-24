const GalleryItem = ({ src, alt, variant }) => {
  if (variant === 'polaroid') {
    return (
      <figure
        className="reveal-element group mb-8 break-inside-avoid rounded-[36px] bg-cream/90 p-5 text-night shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
        data-reveal
      >
        <div className="overflow-hidden rounded-2xl border border-night/5">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-64 w-full object-cover transition duration-500 grayscale-[25%] group-hover:grayscale-0"
          />
        </div>
        <figcaption className="mt-4 text-center text-sm uppercase tracking-[0.4em]">Skyline tasting</figcaption>
      </figure>
    );
  }

  return (
    <figure
      className="reveal-element group mb-6 break-inside-avoid overflow-hidden rounded-[32px] border border-white/5 bg-onyx shadow-soft"
      data-reveal
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full scale-105 object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
      />
    </figure>
  );
};

export default GalleryItem;

