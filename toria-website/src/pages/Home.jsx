
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  CakeSlice,
  Cookie,
  UtensilsCrossed,
  GlassWater,
  Heart,
  Award,
  ChefHat,
  PartyPopper,
  MessageCircle,
} from "lucide-react";
import meatpieImage from "../assets/images/meatpie.jpeg"
import smallChopsImage from "../assets/images/small_chops.jpeg"
import sausagerollImage from "../assets/images/sausage.webp"
import parfaitImage from "../assets/images/parfait2.jpeg"
import ProductCard from "../components/ProductCard";

// Homepage-only photographs.
// These are temporary stock images, separate from Menu product images.
const heroImage =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90";

const categories = [
  {
    title: "Cakes",
    description: "Beautiful cakes for every celebration.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85",
    icon: CakeSlice,
    link: "/menu#menu-cakes-treats",
  },
  {
    title: "Snacks",
    description: "Delicious bites baked to delight.",
    image:meatpieImage,
    icon: Cookie,
    link: "/menu#menu-cakes-treats",
  },
  {
    title: "Small Chops",
    description: "Perfect treats for your gatherings.",
    image:smallChopsImage,
    icon: UtensilsCrossed,
    link: "/menu#menu-snacks",
  },
  {
    title: "Drinks",
    description: "Refreshing drinks for every occasion.",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85",
    icon: GlassWater,
    link: "/menu#menu-drinks",
  },
];

const featuredProducts = [
  {
    name: "Cupcakes",
    category: "Pastries",
    description: "Delightful little treats for sharing.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Chocolate Dream Cake",
    category: "Cakes",
    description: "Rich, decadent and delicious.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sausage Rolls",
    category: "Snacks",
    description: "A tasty snack for any occasion.",
    image:sausagerollImage,
  },
  {
    name: "Parfait",
    category: "Treats",
    description: "Layers of goodness in every spoonful.",
    image: parfaitImage,
  },
];

const reasons = [
  {
    icon: Award,
    title: "Quality Ingredients",
    description:
      "We pay attention to the ingredients that go into every creation.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "Every order receives care and attention from preparation to presentation.",
  },
  {
    icon: ChefHat,
    title: "Delicious Variety",
    description:
      "Enjoy cakes, pastries, snacks, meals and refreshing drinks.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Presentation",
    description:
      "Delicious creations prepared to look as wonderful as they taste.",
  },
];

const whatsappNumber = "2348167304896";

const whatsappMessage = encodeURIComponent(
  "Hello Toria Cakes and Treats! I would like to make an order."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const Home = () => {
  return (
    <main className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-[#FFFDF9]">
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-[#6D2396]">
              <Sparkles size={16} />
              Freshly made with love
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[#351526] sm:text-6xl">
              Deliciously made.
              <span className="block text-[#6D2396]">
                Beautifully served.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
              Cakes, pastries, small chops, delicious meals,
              refreshing drinks and more — all made to wow
              your taste buds.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6D2396] px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4B176D]"
              >
                Explore Our Menu
                <ArrowRight size={19} />
              </Link>

              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#6D2396] px-7 py-4 font-semibold text-[#6D2396] transition hover:bg-purple-50"
              >
                <ShoppingBag size={19} />
                Explore Our Treats
              </a>
            </div>

            <p className="mt-7 font-medium italic text-[#6D2396]">
              Made with care. Served with love. ♡
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-purple-200/60 blur-3xl" />

            <div className="relative h-[390px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[500px]">
              <img
                src={heroImage}
                alt="Beautiful celebration cake"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#351526]/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/90 p-5 shadow-lg backdrop-blur-sm">
                <p className="font-bold text-[#351526]">
                  Made for your special moments
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Sweet treats for celebrations and everyday joy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section
        id="categories"
        className="bg-white px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-[#6D2396]">
              Explore Our Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#351526] sm:text-4xl">
              Something Delicious for Everyone
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              From celebration cakes to tasty bites, discover
              treats for your next occasion or everyday cravings.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  to={category.link}
                  className="group overflow-hidden rounded-2xl border border-purple-100 bg-[#FFFDF9] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6D2396] shadow-md">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#351526]">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {category.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#6D2396]">
                      Explore Collection
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* FEATURED TREATS */}
      <section className="bg-[#FFF8F0] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.18em] text-[#6D2396]">
                A Taste of Toria
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#351526] sm:text-4xl">
                Our Featured Treats
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-gray-600">
                Discover some of the delicious creations you
                can enquire about for your next celebration.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-bold text-[#6D2396] hover:text-[#4B176D]"
            >
              View Full Menu
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
              />
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE TORIA */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-[#6D2396]">
              The Toria Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#351526] sm:text-4xl">
              Why Choose Toria?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We put care into every creation, making sure
              there's something special in every order.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-purple-100 bg-[#FFFDF9] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-[#6D2396]">
                    <Icon size={29} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#351526]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SPECIAL OCCASIONS */}
      <section className="bg-[#FFFDF9] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="relative h-[350px] overflow-hidden rounded-[2rem] shadow-xl sm:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=90"
              alt="Beautiful celebration table"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6D2396]">
              <PartyPopper size={17} />
              Celebrate with Toria
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#351526] sm:text-4xl">
              Make Every Occasion
              <span className="block text-[#6D2396]">
                Extra Special.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              From birthdays and weddings to anniversaries,
              family gatherings and special celebrations,
              let Toria Cakes and Treats add something delicious
              to your memorable moments.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6D2396] px-7 py-4 font-semibold text-white transition hover:bg-[#4B176D]"
            >
              Find Your Perfect Treat
              <ArrowRight size={19} />
            </Link>
          </div>

        </div>
      </section>

      {/* ORDER CTA */}
      <section
        id="order"
        className="relative overflow-hidden bg-[#4B176D] px-4 py-20 text-center text-white sm:px-6"
      >
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <ShoppingBag size={30} />
          </div>

          <p className="font-semibold uppercase tracking-[0.18em] text-purple-200">
            Your Next Delicious Moment Starts Here
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Have Something Sweet in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-purple-100">
            Get in touch with Toria Cakes and Treats to discuss
            your next celebration or food order.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#4B176D] shadow-xl transition hover:-translate-y-1 hover:bg-purple-50"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
};

export default Home;