
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, X } from "lucide-react";

const galleryItems = [
  {
    name: "Celebration Cakes",
    category: "Cakes & Treats",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Cupcakes & Sweet Treats",
    category: "Cakes & Treats",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Freshly Baked Bread",
    category: "Cakes & Treats",
    image:
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Small Chops",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Delicious Shawarma",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tasty Pastries",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Jollof Rice",
    category: "Meals",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Fried Rice",
    category: "Meals",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Stir-Fry Spaghetti",
    category: "Meals",
    image:
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Food Trays",
    category: "Meals",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Fruit Parfait",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Fresh Juice",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Refreshing Zobo",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Popcorn",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Fried Plantain",
    category: "Meals",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "All",
  "Cakes & Treats",
  "Snacks",
  "Meals",
  "Drinks",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-[#FFFDF9]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#351526] px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-pink-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-purple-100">
            A Taste of What We Create
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our <span className="text-purple-300">Gallery</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-purple-100/90 sm:text-lg">
            From beautiful celebration cakes to delicious meals and
            refreshing drinks, discover the treats made to wow your taste bud.
          </p>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#4B176D] transition hover:bg-purple-100"
          >
            Explore Our Menu
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D2396]">
              Made with Love
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#351526] sm:text-4xl">
              Delicious Moments
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Browse our selection and find something special for your next
              celebration, gathering, or everyday craving.
            </p>
          </div>

          {/* Category filters */}
          <div className="mb-9 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${
                  activeCategory === category
                    ? "bg-[#4B176D] text-white shadow-md shadow-purple-900/10"
                    : "border border-purple-100 bg-white text-[#4B176D] hover:bg-purple-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group overflow-hidden rounded-2xl border border-purple-100 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#6D2396] focus:ring-offset-2"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-purple-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#351526]/80 via-transparent to-transparent opacity-80" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#6D2396]">
                    {item.category}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      View image
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Menu CTA */}
          <div className="mt-14 rounded-3xl bg-purple-50 px-6 py-10 text-center sm:px-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#6D2396] shadow-sm">
              <ShoppingBag size={27} />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-[#351526] sm:text-3xl">
              Seen Something You Love?
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
              Explore our menu, choose your favourites, and send your order
              directly to us on WhatsApp.
            </p>

            <Link
              to="/menu"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4B176D] px-7 py-3.5 font-bold text-white transition hover:bg-[#6D2396]"
            >
              Order Your Favourites
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Image preview modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.name}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close image preview"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-[#351526] shadow transition hover:bg-purple-100"
            >
              <X size={22} />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="max-h-[70vh] w-full bg-purple-50 object-contain"
            />

            <div className="p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#6D2396]">
                {selectedItem.category}
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-[#351526]">
                {selectedItem.name}
              </h2>

              <Link
                to="/menu"
                onClick={() => setSelectedItem(null)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4B176D] px-6 py-3 font-semibold text-white transition hover:bg-[#6D2396]"
              >
                Browse Menu
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;