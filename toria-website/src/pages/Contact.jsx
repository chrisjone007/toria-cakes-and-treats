import { useState } from "react";
import {
  MessageCircle,
  Send,
  CakeSlice,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
const Contact = () => {
  const whatsappNumber = "2348167304896";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Toria Cakes and Treats!

I'd like to make an enquiry.

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Enquiry Type: ${formData.enquiryType}

Message:
${formData.message}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = () => {
    const message =
      "Hello Toria Cakes and Treats! I'd like to make an enquiry about your products.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#351526] px-4 py-20 text-center text-white sm:py-24">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6D2396]/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#6D2396]/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-purple-100">
            <Sparkles size={15} />
            We'd love to hear from you
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let's Talk About Something{" "}
            <span className="text-purple-300">Delicious!</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-purple-100 sm:text-lg">
            Have a question, planning a celebration, or craving something
            delicious? Get in touch with Toria Cakes and Treats. We'd be
            delighted to make your moments extra special.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-2 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F3E8FA] p-7 sm:p-9">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6D2396] text-white">
            <MessageCircle size={28} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-[#351526]">
            Chat With Us on WhatsApp
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            The easiest way to place an order or ask questions about our
            cakes, pastries, small chops and other delicious treats.
          </p>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#6D2396] px-7 py-3 font-semibold text-white transition hover:bg-[#4B176D]"
          >
            Chat on WhatsApp
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E8FA] text-[#6D2396]">
            <CakeSlice size={28} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-[#351526]">
            Planning Something Special?
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Whether it's a birthday, wedding, party or family gathering,
            we're ready to help you make it memorable with delicious treats.
          </p>

          <a
            href="#enquiry-form"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#6D2396] transition hover:text-[#351526]"
          >
            Send us an enquiry
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        id="enquiry-form"
        className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm sm:p-10">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#6D2396]">
              Get in Touch
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#351526]">
              Send Us an Enquiry
            </h2>

            <p className="mt-3 text-gray-600">
              Fill in the form below and we'll help you with your request.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-[#351526]"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-purple-100 bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#6D2396] focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#351526]"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-purple-100 bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#6D2396] focus:ring-2 focus:ring-purple-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#351526]"
              >
                Email Address (Optional)
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-purple-100 bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#6D2396] focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label
                htmlFor="enquiryType"
                className="mb-2 block text-sm font-semibold text-[#351526]"
              >
                What are you enquiring about? *
              </label>

              <select
                id="enquiryType"
                name="enquiryType"
                required
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full rounded-xl border border-purple-100 bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#6D2396] focus:ring-2 focus:ring-purple-100"
              >
                <option value="">Select an enquiry type</option>
                <option value="Cakes">Cakes</option>
                <option value="Small Chops">Small Chops</option>
                <option value="Pastries">Pastries</option>
                <option value="Food Trays">Food Trays</option>
                <option value="Drinks">Drinks</option>
                <option value="Event Catering">Event Catering</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#351526]"
              >
                Your Message *
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you need..."
                className="w-full resize-none rounded-xl border border-purple-100 bg-[#FFFDF9] px-4 py-3 outline-none transition focus:border-[#6D2396] focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#6D2396] px-6 py-4 font-bold text-white transition hover:bg-[#4B176D]"
            >
              Send Enquiry via WhatsApp
              <Send size={18} />
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              Submitting this form will open WhatsApp with your enquiry
              ready to send. You will need to press Send in WhatsApp.
            </p>
          </form>
        </div>
      </section>

      {/* Social Media */}
<section className="bg-[#F3E8FA] px-4 py-14 text-center">
  <div className="mx-auto max-w-2xl">
    <h2 className="text-2xl font-extrabold text-[#351526] sm:text-3xl">
      Stay Connected With Us
    </h2>

    <p className="mt-3 leading-7 text-gray-600">
      Follow Toria Cakes and Treats for delicious inspiration,
      beautiful creations and updates.
    </p>

    <div className="mt-6 flex justify-center gap-5">
      <a
        href="#"
        aria-label="Instagram"
        title="Instagram link coming soon"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6D2396] shadow-sm transition hover:-translate-y-1 hover:bg-[#6D2396] hover:text-white"
      >
        <FaInstagram size={23} />
      </a>

      <a
        href="#"
        aria-label="Facebook"
        title="Facebook link coming soon"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6D2396] shadow-sm transition hover:-translate-y-1 hover:bg-[#6D2396] hover:text-white"
      >
        <FaFacebookF size={21} />
      </a>
      <a
  href="#"
  aria-label="TikTok"
  title="TikTok link coming soon"
  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6D2396] shadow-sm transition hover:-translate-y-1 hover:bg-[#6D2396] hover:text-white"
>
  <FaTiktok size={22} />
</a>
    </div>

    <p className="mt-4 text-xs text-gray-500">
      Follow us on social media for updates and new products.
    </p>
  </div>
</section>
    </div>
  );
};

export default Contact;