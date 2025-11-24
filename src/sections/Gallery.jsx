import GalleryItem from '../components/GalleryItem';
import beans from '../assets/images/beans.jpg';
import counter from '../assets/images/counter.jpg';
import dessert from '../assets/images/dessert.jpg';
import interior1 from '../assets/images/interior1.jpg';
import interior2 from '../assets/images/interior2.jpg';
import latte from '../assets/images/latte.jpg';
import people from '../assets/images/people.jpg';
import terrace from '../assets/images/terrace.jpg';

const galleryImages = [
  { src: interior1, alt: 'Sunlit seating at Urban Brew' },
  { src: latte, alt: 'Latte art at Urban Brew' },
  { src: beans, alt: 'Roasted coffee beans' },
  { src: people, alt: 'Friends enjoying coffee' },
  { src: dessert, alt: 'Fresh cakes and pastries' },
  { src: counter, alt: 'Barista crafting coffee' },
  { src: terrace, alt: 'Outdoor café seating' },
  { src: interior2, alt: 'Warm café interior', variant: 'polaroid' },
];

const Gallery = () => (
  <section id="gallery" className="bg-onyx py-20 text-cream sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.8em] text-gold">Story in frames</p>
        <h2 className="section-heading reveal-element mx-auto mt-4 text-center md:text-5xl" data-reveal>
          Gallery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-parchment/70">
          A cinematic peek into our mornings and moonlit nights — desaturated memories that burst into color on hover.
        </p>
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {galleryImages.map((image) => (
          <GalleryItem key={image.alt} {...image} />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;

