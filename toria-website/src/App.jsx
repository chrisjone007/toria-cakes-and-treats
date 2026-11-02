import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/Contact";

// import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
            <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;