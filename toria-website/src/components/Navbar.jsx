
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo/toria-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center"
          aria-label="Toria Cakes and Treats home"
        >
          <img
            src={logo}
            alt="Toria Cakes and Treats"
            className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#6D2396]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Cart Icon and Mobile Menu Button */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple-100 text-[#4B176D] transition hover:bg-purple-50"
          >
            <ShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6D2396] px-1 text-xs font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[#4B176D] transition hover:bg-purple-50 md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-purple-100 bg-white px-4 pb-5 md:hidden">
          <div className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-purple-50 hover:text-[#6D2396]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;