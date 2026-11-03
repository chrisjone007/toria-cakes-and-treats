
import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#351526] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Business Information */}
          <div>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Toria Cakes & Treats
            </h2>

            <p className="mb-4 text-sm font-medium text-purple-200">
              Wow your taste bud!
            </p>

            <p className="max-w-xs text-sm leading-7 text-gray-300">
              Making every moment sweeter with delicious cakes,
              treats, snacks and meals prepared with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/" className="transition hover:text-purple-300">Home</Link></li>
              <li><Link to="/menu" className="transition hover:text-purple-300">Menu</Link></li>
              <li><Link to="/gallery" className="transition hover:text-purple-300">Gallery</Link></li>
              <li><Link to="/contact" className="transition hover:text-purple-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <a
                href="https://wa.me/2348167304896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-purple-300"
              >
                <FaWhatsapp className="text-xl text-green-400" />
                <span>WhatsApp: 08167304896</span>
              </a>

              <a
                href="tel:+2348167304896"
                className="flex items-center gap-3 transition hover:text-purple-300"
              >
                <FaPhoneAlt className="text-sm" />
                <span>08167304896</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-300">
              Stay connected for delicious updates, new treats and special offers.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/toriacakesandtreats?obrf=eGVtMHRnOTlwNzA4&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-3 transition hover:bg-purple-600">
                <FaInstagram className="text-lg" />
              </a>

              {/* <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-3 transition hover:bg-purple-600">
                <FaFacebookF className="text-lg" />
              </a> */}

              <a href="https://www.tiktok.com/@toriacakes?_r=1&_t=ZS-9B0dyp6PTC0" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="rounded-full bg-white/10 p-3 transition hover:bg-purple-600">
                <FaTiktok className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/15 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Toria Cakes & Treats. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-purple-200">
            Made with love, just for you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;