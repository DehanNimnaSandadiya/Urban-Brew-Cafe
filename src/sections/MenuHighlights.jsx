import MenuCard from '../components/MenuCard';
import breakfastImage from '../assets/images/breakfast.jpg';
import coffeeImage from '../assets/images/coffee.jpg';
import pastriesImage from '../assets/images/pastries.jpg';

const menuItems = [
  {
    title: 'Amber Pour-Over Flight',
    description: 'Three single-origin extractions paired with house-made praline + citrus mist.',
    image: coffeeImage,
    price: 'Rs 2,900',
    badge: 'New',
  },
  {
    title: 'Botanical Brunch Table',
    description: 'Miso avocado tartines, heritage eggs, brûléed pomelo, sage hollandaise.',
    image: breakfastImage,
    price: 'Rs 4,500',
  },
  {
    title: 'Midnight Patisserie',
    description: 'Saffron cruffins, cardamom cake, cacao nib gelato designed for nightcaps.',
    image: pastriesImage,
    price: 'Rs 3,100',
  },
];

const MenuHighlights = () => (
  <section
    id="menu"
    className="relative bg-night py-20 text-cream sm:py-24"
    aria-label="Curated menu highlights"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-night via-onyx to-night" aria-hidden="true" />
    <div className="absolute inset-x-8 top-0 h-64 rounded-[40px] border border-gold/20 opacity-40" aria-hidden="true" />
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.8em] text-gold">Taste architecture</p>
        <h2 className="section-heading reveal-element mx-auto mt-6 text-center md:text-5xl" data-reveal>
          Menu Highlights
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-parchment/70">
          Elevated comfort plates inspired by Japanese minimalism, Colombo produce, and Parisian patisserie craft.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default MenuHighlights;

