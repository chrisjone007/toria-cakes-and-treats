import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  ArrowUpRight,
  CakeSlice,
  Minus,
  Plus,
  UtensilsCrossed,
  X,
  Clock,
  Heart,
} from "lucide-react";
import { useCart } from "../context/CartContext";

import cake1 from "../assets/Images/cake1.jpeg";
import cake2 from "../assets/Images/cake2.jpeg";
import cake3 from "../assets/Images/cake3.jpg";
import cake4 from "../assets/Images/cake4.jpeg";
import cake5 from "../assets/Images/cake5.jpeg";
import cake6 from "../assets/Images/cake6.jpeg";
import cake7 from "../assets/Images/cake7.jpg";
import cake8 from "../assets/Images/cake8.jpeg";
import cake9 from "../assets/Images/cake9.jpg";
import bentoCupcake from "../assets/Images/bento-cupcake.jpeg";
import cake10 from "../assets/Images/cake10.jpeg";
import cake11 from "../assets/Images/cake11.jpeg";
import cake12 from "../assets/Images/cake12.jpeg";
import cake13 from "../assets/Images/cake13.jpeg";
import cake14 from "../assets/Images/cake14.jpg";
import cake15 from "../assets/Images/cake15.jpg";
import cake16 from "../assets/Images/cake16.jpeg";
import cake17 from "../assets/Images/cake17.jpg";
import cake18 from "../assets/Images/cake18.jpg";
import cake19 from "../assets/Images/cake19.jpg";
import cupCake from "../assets/Images/cup-cake.jpg";
import fondantCake from "../assets/Images/fondant-cake.jpeg";
import footballCharacterCake from "../assets/Images/football_character_cake.jpg";
import lionKingCake from "../assets/Images/lion-king-cake.jpg";
import chickenImage from "../assets/Images/Chicken.jpeg";
import bigFoodTray from "../assets/Images/food_tray.jpg";
import popCornImage from "../assets/Images/pop-corn.jpeg";
import popCornMilkImage from "../assets/Images/pop-corn-2.jpeg";
import doughnutImage from "../assets/Images/doughnut.jpeg";
import eggRollImage from "../assets/Images/egg-roll.jpeg";
import meatPieImage from "../assets/Images/meatpie.jpeg";
import sausageImage from "../assets/Images/sausage.WEBP";
import chickenPieImage from "../assets/Images/chickenpie.jpeg";
import smallChopsImage from "../assets/Images/small_chops.jpeg";
import parfaitImage from "../assets/Images/parfait.jpeg";
import zoboImage from "../assets/Images/zobo.jpeg";
import shawarmaImage from "../assets/Images/shawarma.jpeg"
import smallChopsTrayImage from "../assets/Images/small_chops_tray.jpeg"
import chiImage from "../assets/Images/chi.WEBP";
import hollandiaImage from "../assets/Images/Hollandia.jpeg";
import chivitaImage from "../assets/Images/chivita.WEBP";
import fantaImage from "../assets/Images/Fanta.jpeg";
import hollandiaSmallImage from "../assets/Images/Hollandia_small.jpeg";
import schweppesImage from "../assets/Images/schweppes.PNG";
import maltImage from "../assets/Images/malta_guiness.jpeg";
import cokeImage from "../assets/Images/coke.jpeg";
import evaImage from "../assets/Images/Eva.jpeg";
const categories = [
  "All",
  "Cakes",
  "Treats & Pastries",
  "Snacks",
  "Meals",
  "Drinks",
];

const categoryDescriptions = {
  Cakes:
    "Beautiful custom cakes for birthdays, weddings, and life's special moments.",
  "Treats & Pastries":
    "Banana bread, pastries, and freshly baked delights for every occasion.",
  Snacks:
    "Tasty bites for everyday cravings, parties, and gatherings.",
  Meals:
    "Satisfying meals and food trays for individuals, families, and events.",
  Drinks:
    "Refreshing drinks and delicious treats to complement your day.",
};

// Listed cake prices are the base prices for the specific cakes.
// Mark every new cake with isCake: true to enable customization.
const products = [
  {
    name: "Canvas Buttercream",
    category: "Cakes",
    description: "A beautiful 10-inch buttercream cake for special moments.",
    details:
      "Our Canvas Buttercream cake is a lovely choice for birthdays, celebrations, and other memorable occasions. Customize the flavour, covering, decorations, message, and design preferences to suit your event.",
    highlights: ["Birthdays", "Special occasions", "Custom designs"],
    price: 20000,
    image: cake1,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: "Flork Cheers Single Layer",
    category: "Cakes",
    description: "A playful single-layer cake for cheerful celebrations.",
    details:
      "Celebrate a special day with this 10-inch Flork Cheers cake. Personalize your cake with your preferred flavour, covering, decorations, message, and design notes.",
    highlights: ["Birthdays", "Fun celebrations", "Personalized designs"],
    price: 25000,
    image: cake2,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: "Expresso Double Layers",
    category: "Cakes",
    description: "A 6-inch double-layer cake for memorable occasions.",
    details:
      "This 6-inch double-layer cake is a delightful option for intimate celebrations and special treats. Select your preferred flavour, covering, toppings, decorations, and personalized cake message.",
    highlights: ["Intimate celebrations", "Birthdays", "Custom requests"],
    price: 25000,
    image: cake3,
    isCake: true,
    cakeSize: "6 inches",
    cakeLayers: "2 layers",
  },
  {
    name: "Ace of Love Double Layered",
    category: "Cakes",
    description: "An elegant double-layer cake for occasions worth celebrating.",
    details:
      "Make your celebration special with our 10-inch Ace of Love double-layered cake. You can request your preferred flavour, covering, toppings, decorative extras, and personalized design.",
    highlights: ["Anniversaries", "Birthdays", "Special celebrations"],
    price: 48000,
    image: cake4,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "2 layers",
  },
  {
    name: "Fissure Triple Layered",
    category: "Cakes",
    description: "A striking triple-layer cake for a standout celebration.",
    details:
      "Our 10-inch Fissure Triple Layered cake is designed for celebrations that deserve something special. Customize the flavour, covering, toppings, decorations, cake message, and design preferences.",
    highlights: ["Big celebrations", "Birthdays", "Statement cakes"],
    price: 75000,
    image: cake5,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "3 layers",
  },
  {
    name: "Toria Custom Triple Layered",
    category: "Cakes",
    description: "A personalized 7-inch triple-layer cake by Toria.",
    details:
      "Make your occasion memorable with Toria's custom triple-layered cake. Share your preferred flavour, covering, decorations, cake message, colours, and design ideas so your request can be discussed before confirmation.",
    highlights: ["Custom designs", "Birthdays", "Personal celebrations"],
    price: 58000,
    image: cake6,
    isCake: true,
    cakeSize: "7 inches",
    cakeLayers: "3 layers",
  },
  {
    name: "10'' Custom 4 Layers",
    category: "Cakes",
    description: "A custom 10-inch four-layer cake for a special celebration.",
    details:
      "Personalize this 10-inch four-layer cake with your preferred flavour, covering, toppings, decorations, cake message, and design notes. Toria will confirm custom requirements and final availability before accepting the order.",
    highlights: ["Custom designs", "Birthdays", "Special celebrations"],
    price: 90000,
    image: cake7,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "4 layers",
  },
  {
    name: "10'' Expresso Single Layer",
    category: "Cakes",
    description: "A 10-inch Expresso single-layer cake.",
    details:
      "Order this 10-inch Expresso single-layer cake and personalize the flavour, covering, toppings, decorations, cake message, and design preferences.",
    highlights: ["Expresso design", "Birthdays", "Personal celebrations"],
    price: 25000,
    image: cake8,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: "Custom Wedding 4 Tier Cake",
    category: "Cakes",
    description: "A custom four-tier wedding cake for your special day.",
    details:
      "Plan a memorable wedding cake with your preferred colours, flavour, covering, decorations, and design. Wedding cake requirements and final pricing should be confirmed with Toria before the order is accepted.",
    highlights: ["Weddings", "Custom designs", "Special occasions"],
    price: 350000,
    image: cake9,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "4 layers",
  },
  {
    name: "Bento with Cupcakes",
    category: "Cakes",
    description: "A bento cake paired with cupcakes for a sweet celebration.",
    details:
      "A bento cake and cupcakes combination for birthdays, gifting, and small celebrations. Share your preferred flavour, covering, cake message, and design notes with Toria.",
    highlights: ["Gifting", "Birthdays", "Small celebrations"],
    price: 28000,
    image: bentoCupcake,
    isCake: true,
    cakeSize: "6 inches",
    cakeLayers: "1 layer",
  },
  {
    name: 'Chocolate Drip 10" Double Layer',
    category: "Cakes",
    description: "A 10-inch double-layer chocolate drip cake.",
    details: "A chocolate drip cake for birthdays and special celebrations. Personalize the flavour, covering, toppings, cake message, and design notes when ordering.",
    highlights: ["Birthdays", "Chocolate lovers", "Special celebrations"],
    price: 49000,
    image: cake10,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "2 layers",
  },
  {
    name: "Half Moon 10'' Double Layered",
    category: "Cakes",
    description: "A 10-inch double-layer Half Moon celebration cake.",
    details: "A Half Moon design cake for memorable occasions. Share your preferred flavour, covering, decorations, cake message, and design preferences with Toria.",
    highlights: ["Birthdays", "Custom designs", "Celebrations"],
    price: 48000,
    image: cake11,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "2 layers",
  },
  {
    name: "Valentine 10'' Double Layered",
    category: "Cakes",
    description: "A 10-inch double-layer cake for Valentine's Day and romantic celebrations.",
    details: "A Valentine-themed cake for gifting and special moments. Personalize the flavour, covering, toppings, cake message, and design notes.",
    highlights: ["Valentine's Day", "Gifting", "Anniversaries"],
    price: 50000,
    image: cake12,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "2 layers",
  },
  {
    name: "Whipped Cream 10'' Single Layer",
    category: "Cakes",
    description: "A 10-inch single-layer cake with whipped cream covering.",
    details: "A classic whipped cream cake for birthdays and other celebrations. Add your preferred flavour, cake message, and design requests when ordering.",
    highlights: ["Birthdays", "Whipped cream", "Personal celebrations"],
    price: 35000,
    image: cake13,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: "Choco Whipped Cream Single Layer",
    category: "Cakes",
    description: "A single-layer chocolate cake with whipped cream covering.",
    details: "A chocolate whipped cream cake for sweet celebrations. Share your preferred flavour, decorations, cake message, and design notes with Toria.",
    highlights: ["Chocolate lovers", "Birthdays", "Celebrations"],
    price: 38000,
    image: cake14,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: 'Choco Web 10" Whipped Cream Single Layer',
    category: "Cakes",
    description: "A 10-inch single-layer whipped cream cake with a chocolate web design.",
    details: "A chocolate web design cake for birthdays and special occasions. Personalize the cake message and share any decoration preferences when ordering.",
    highlights: ["Chocolate design", "Birthdays", "Special occasions"],
    price: 38000,
    image: cake15,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: "Whipped Cream Classic Single Layer",
    category: "Cakes",
    description: "A classic single-layer whipped cream cake.",
    details: "A simple classic cake for birthdays, family celebrations, and gifting. Choose your preferred flavour and share your cake message or design preferences.",
    highlights: ["Classic design", "Birthdays", "Gifting"],
    price: 37000,
    image: cake16,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: "2 Tier Celebration Cake",
    category: "Cakes",
    description: "A two-tier cake for standout celebrations.",
    details: "A celebration cake suited to birthdays, anniversaries, and special events. Tier dimensions, design, flavour, and final requirements should be confirmed with Toria before the order is accepted.",
    highlights: ["Celebrations", "Birthdays", "Custom designs"],
    price: 70000,
    image: cake17,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "2 layers",
  },
  {
    name: '8" 3 Layer Custom Cake',
    category: "Cakes",
    description: "An 8-inch custom three-layer cake.",
    details: "Customize this 8-inch three-layer cake with your preferred flavour, covering, toppings, decorations, cake message, and design notes.",
    highlights: ["Custom designs", "Birthdays", "Special occasions"],
    price: 65000,
    image: cake18,
    isCake: true,
    cakeSize: "8 inches",
    cakeLayers: "3 layers",
  },
  {
    name: "Graduation Express Cake",
    category: "Cakes",
    description: "A graduation-themed cake for celebrating an achievement.",
    details: "Celebrate a graduation with a special cake. Share the graduate's name, preferred flavour, cake message, and decoration ideas when placing your order.",
    highlights: ["Graduations", "Achievements", "Gifting"],
    price: 40000,
    image: cake19,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "1 layer",
  },
  {
    name: "Cupcakes Naked Mixed of 12 Pack",
    category: "Cakes",
    description: "A mixed pack of 12 naked cupcakes.",
    details: "A pack of 12 mixed naked cupcakes for sharing, parties, and gifting. Contact Toria to confirm the available flavour mix before ordering.",
    highlights: ["Pack of 12", "Parties", "Gifting"],
    price: 10000,
    image: cupCake,
  },
  {
    name: "Fondant Celebration Cake",
    category: "Cakes",
    description: "A celebration cake finished with fondant.",
    details: "A fondant cake for special celebrations and custom designs. Share your preferred theme, colours, flavour, message, and other design requirements for confirmation.",
    highlights: ["Fondant finish", "Custom designs", "Special events"],
    price: 70000,
    image: fondantCake,
    isCake: true,
    cakeSize: "10 inches",
    cakeLayers: "2 layers",
  },
  {
    name: 'Football Character Cake 8" 3 layers',
    category: "Cakes",
    description: "An 8-inch three-layer football character cake.",
    details: "A football-themed character cake for football fans and birthdays. Share your preferred team colours, flavour, cake message, and design notes with Toria.",
    highlights: ["Football fans", "Birthdays", "Character cakes"],
    price: 70000,
    image: footballCharacterCake,
    isCake: true,
    cakeSize: "8 inches",
    cakeLayers: "3 layers",
  },
  {
    name: "Lion King Children Character Cake",
    category: "Cakes",
    description: "A Lion King-inspired character cake for children's celebrations.",
    details: "A character cake for children's birthdays and themed parties. Contact Toria to discuss the preferred flavour, cake message, theme details, and final design.",
    highlights: ["Children's birthdays", "Character cakes", "Themed parties"],
    price: 35000,
    image: lionKingCake,
    isCake: true,
    cakeSize: "6 inches",
    cakeLayers: "1 layer",
  },

  {
    name: "Pop Corn",
    category: "Snacks",
    description: "Fresh popcorn for a light, crunchy snack.",
    details: "Enjoy popcorn during movie nights, parties, and casual gatherings. Contact Toria to confirm pack sizes and availability.",
    highlights: ["Movie nights", "Parties", "Snacking"],
    price: 1200,
    image: popCornImage,
  },
  {
    name: "Pop Corn With Milk",
    category: "Snacks",
    description: "Popcorn served with milk for a tasty snack.",
    details: "A popcorn and milk combination for a satisfying snack. Contact Toria to confirm serving details and availability.",
    highlights: ["Snack time", "Treats", "Sharing"],
    price: 1500,
    image: popCornMilkImage,
  },
  {
    name: "Doughnut",
    category: "Snacks",
    description: "A soft, sweet doughnut for a quick treat.",
    details: "Enjoy a freshly prepared doughnut as a snack or sweet treat.",
    highlights: ["Sweet treat", "Snack time"],
    price: 800,
    image: doughnutImage,
  },
  {
    name: "Egg Roll",
    category: "Snacks",
    description: "A tasty egg roll for a satisfying snack.",
    details: "A convenient snack option for any time of day.",
    highlights: ["Quick snack", "On-the-go treat"],
    price: 500,
    image: eggRollImage,
  },
  {
    name: "Meat Pie",
    category: "Snacks",
    description: "A savoury meat pie with a delicious filling.",
    details: "Enjoy a savoury meat pie as a snack or light bite.",
    highlights: ["Savoury snack", "Tea-time treat"],
    price: 1200,
    image: meatPieImage,
  },
  {
    name: "Chicken Pie",
    category: "Snacks",
    description: "A savoury chicken pie for a delicious snack.",
    details: "Enjoy a chicken-filled pie as a snack or light meal.",
    highlights: ["Savoury snack", "Light meal"],
    price: 1400,
    image: chickenPieImage,
  },
  {
    name: "Sausage",
    category: "Snacks",
    description: "A tasty sausage snack.",
    details: "A simple savoury snack to enjoy any time.",
    highlights: ["Savoury snack", "Quick bite"],
    price: 800,
    image: sausageImage,
  },
  {
    name: "Small Chops",
    category: "Snacks",
    description: "Party favourites for events and celebrations.",
    details:
      "Small chops are a popular choice for celebrations, meetings, parties, and entertaining guests. Tell us about your event and the quantity you need so we can discuss your order.",
    highlights: ["Parties", "Meetings", "Event catering enquiries"],
    price: 3000,
    image: smallChopsImage,
  },
  {
    name: "Small Chops Tray",
    category: "Snacks",
    description: "Make every gathering extra special with our irresistible small chops tray. Perfect for birthdays, weddings, meetings, parties and celebrations!",
    details:
      "Our Small Chops Tray is thoughtfully prepared and beautifully arranged for your enjoyment. It's a great choice for birthdays, weddings, corporate events, parties, family gatherings and other special occasions.",
    highlights: ["Parties", "Meetings", "Event catering enquiries"],
    price: 35000,
    image: smallChopsTrayImage,
  },
  {
    name: "Shawarma",
    category: "Snacks",
    description: "Choose beef or chicken shawarma and add extra sausage if you like.",
    details:
      "Build your shawarma order by choosing beef or chicken, setting quantities for each, and adding extra sausage to either option.",
    highlights: ["Beef or chicken", "Custom quantities", "Optional extra sausage"],
    price: 3500,
    isShawarma: true,
    image:shawarmaImage,
  },
  
  {
    name: "Chicken",
    category: "Meals",
    description: "Chicken to enjoy with your meal order.",
    details: "Add chicken to your meal order. Please confirm the available preparation and portion with Toria when ordering.",
    highlights: ["Meal add-on", "Lunch", "Dinner"],
    price: 3000,
    image: chickenImage,
  },
  {
    name: "Big Size Food Tray",
    category: "Meals",
    description: "A big food tray for gatherings and special events.",
    details: "A large food tray option for parties, family gatherings, and events. Contact Toria to discuss the menu selection, servings, and final order details.",
    highlights: ["Large gatherings", "Parties", "Events"],
    price: 100000,
    image: bigFoodTray,
  },
  {
    name: "Chivita Juice",
    category: "Drinks",
    description: "Refreshing Chivita fruit juice.",
    details:
      "Enjoy Chivita Juice in a convenient 1 Litre pack.",
    highlights: ["1 Litre", "Fruit juice", "Refreshing"],
    price: 2200,
    image: chivitaImage,
  },
  {
    name: "Chi Exotic",
    category: "Drinks",
    description: "A refreshing Chi Exotic fruit drink.",
    details:
      "Enjoy Chi Exotic, a refreshing fruit drink. Available in a 1 Litre bottle.",
    highlights: ["1 Litre", "Refreshing drink", "Fruit drink"],
    price: 2200,
    image: chiImage,
},
{
  name: "Hollandia Yoghurt",
  category: "Drinks",
  description: "Creamy and delicious Hollandia Yoghurt.",
  details:
    "Enjoy Hollandia Yoghurt in a convenient 1 Litre bottle.",
  highlights: ["1 Litre", "Yoghurt", "Refreshing drink"],
  price: 2500,
  image: hollandiaImage,
},
{
  name: "Hollandia Yoghurt",
  category: "Drinks",
  description: "Creamy Hollandia Yoghurt in a smaller bottle.",
  details:
    "Enjoy Hollandia Yoghurt in a convenient 500ml bottle.",
  highlights: ["500ml", "Yoghurt", "Refreshing drink"],
  price: 1300,
  image: hollandiaSmallImage,
},
{
  name: "Fanta",
  category: "Drinks",
  description: "A refreshing Fanta soft drink.",
  details: "Enjoy a chilled 50cl bottle of Fanta.",
  highlights: ["50cl", "Soft drink", "Refreshing"],
  price: 600,
  image: fantaImage,
},
{
  name: "Coca-Cola",
  category: "Drinks",
  description: "A refreshing Coca-Cola soft drink.",
  details: "Enjoy a chilled 50cl bottle of Coca-Cola.",
  highlights: ["50cl", "Soft drink", "Refreshing"],
  price: 600,
  image: cokeImage,
},
{
  name: "Schweppes",
  category: "Drinks",
  description: "A refreshing Schweppes beverage.",
  details: "Enjoy a refreshing 33cl bottle of Schweppes.",
  highlights: ["33cl", "Refreshing drink"],
  price: 1000,
  image: schweppesImage,
},
{
  name: "Malt",
  category: "Drinks",
  description: "A refreshing malt drink.",
  details: "Enjoy a chilled 33cl bottle of malt.",
  highlights: ["33cl", "Malt drink", "Refreshing"],
  price: 1000,
  image: maltImage,
},

{
  name: "Eva Water",
  category: "Drinks",
  description: "Clean and refreshing bottled water.",
  details: "Stay refreshed with a 75cl bottle of Eva Water.",
  highlights: ["75cl", "Bottled water", "Refreshing"],
  price: 300,
  image: evaImage,
},
  {
    name: "Parfait",
    category: "Drinks",
    description: "A creamy, refreshing parfait layered with delicious ingredients.",
    details: "A delicious parfait to enjoy as a snack, dessert, or refreshing treat.",
    highlights: ["Dessert", "Snack time", "Refreshing treat"],
    price: 5000,
    image: parfaitImage,
  },
  {
    name: "Zobo",
    category: "Drinks",
    description: "A refreshing hibiscus drink, best served chilled.",
    details:
      "Enjoy zobo, a popular Nigerian hibiscus drink, as a refreshing option for meals, gatherings, and everyday enjoyment. Ask us about available sizes.",
    highlights: ["Nigerian favourite", "Meal accompaniments", "Events"],
    price: 1000,
    image: zoboImage,
  },
];

const formatPrice = (price) =>
  `₦${Number(price || 0).toLocaleString("en-NG")}`;

// These are estimated additional charges, not the base price of a cake.
// Confirm these amounts with Toria before accepting real orders.
const cakePricing = {
  whippedCream: 5000,
  mixedToppings: 5000,
  addOns: {
    "Cupcake candle": 1000,
    "Gold cake candle": 1500,
    "Cake Topper Acrylic": 4000,
    "Rose stem": 2000,
    "Chrysanthemum stem": 2000,
    "Helium balloons": 5000,
  },
};

const cakeSizes = [
  "6 inches",
  "7 inches",
  "8 inches",
  "10 inches",
  "12 inches",
];

const cakeLayers = ["1 layer", "2 layers", "3 layers", "4 layers"];

const createCakeOptions = (product) => ({
  size: product.cakeSize || "6 inches",
  layers: product.cakeLayers || "1 layer",
  flavour: "Vanilla",
  covering: "Buttercream",
  toppings: "None",
  addOns: [],
  cakeMessage: "",
  cakeColor: "",
  designNotes: "",
});

const Menu = () => {
  const { addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [quantities, setQuantities] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cakeOptions, setCakeOptions] = useState(
    createCakeOptions({})
  );
  const [shawarmaOptions, setShawarmaOptions] = useState({
  beefQuantity: 0,
  chickenQuantity: 0,
  extraSausage: 0,
});

  const inputClass =
    "mt-2 w-full rounded-xl border border-purple-100 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#6D2396] focus:ring-2 focus:ring-purple-100";

  const search = searchTerm.toLowerCase().trim();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  const getQuantity = (productName) =>
    quantities[productName] || 1;

  const changeQuantity = (productName, amount) => {
    setQuantities((current) => ({
      ...current,
      [productName]: Math.max(
        1,
        Math.min(99, (current[productName] || 1) + amount)
      ),
    }));
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);

    if (product.isCake) {
      setCakeOptions(createCakeOptions(product));
    }

    if (product.isShawarma) {
      setShawarmaOptions({
      beefQuantity: 0,
      chickenQuantity: 0,
      extraSausage: 0,
    });
    }
  };

  const updateCakeOption = (name, value) => {
    setCakeOptions((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const toggleCakeAddOn = (addOn) => {
    setCakeOptions((current) => ({
      ...current,
      addOns: current.addOns.includes(addOn)
        ? current.addOns.filter((item) => item !== addOn)
        : [...current.addOns, addOn],
    }));
  };

  // A cake's own listed price remains its base price.
  // Only the optional covering, toppings, and decorations
  // are added to the estimate here.
  const getCakePrice = () => {
    if (!selectedProduct) return 0;

    const basePrice = selectedProduct.price || 0;

    const coveringPrice =
      cakeOptions.covering === "Whipped cream"
        ? cakePricing.whippedCream
        : 0;

    const toppingsPrice =
      cakeOptions.toppings === "Mixed toppings"
        ? cakePricing.mixedToppings
        : 0;

    const addOnsPrice = cakeOptions.addOns.reduce(
      (total, addOn) =>
        total + (cakePricing.addOns[addOn] || 0),
      0
    );

    return (
      basePrice +
      coveringPrice +
      toppingsPrice +
      addOnsPrice
    );
  };

  const updateShawarmaOption = (name, value) => {
    setShawarmaOptions((current) => ({
      ...current,
      [name]: Math.max(0, Math.min(99, Number(value) || 0)),
    }));
  };

  const getShawarmaTotal = () =>
  shawarmaOptions.beefQuantity * 3500 +
  shawarmaOptions.chickenQuantity * 4000 +
  shawarmaOptions.extraSausage * 500;

  const handleAddToCart = (product) => {
  const quantity = getQuantity(product.name);

  if (product.isShawarma) {
    const {
      beefQuantity,
      chickenQuantity,
      extraSausage,
    } = shawarmaOptions;

    if (beefQuantity === 0 && chickenQuantity === 0) return;

    if (beefQuantity > 0) {
      addToCart({
        ...product,
        name: "Beef Shawarma",
        price: 3500,
        quantity: beefQuantity,
        isShawarma: true,
        shawarmaType: "Beef",
      });
    }

    if (chickenQuantity > 0) {
      addToCart({
        ...product,
        name: "Chicken Shawarma",
        price: 4000,
        quantity: chickenQuantity,
        isShawarma: true,
        shawarmaType: "Chicken",
      });
    }

    if (extraSausage > 0) {
      addToCart({
        name: "Extra Sausage",
        category: "Snacks",
        description: "Extra sausage for your Shawarma order.",
        price: 500,
        quantity: extraSausage,
        image: product.image,
      });
    }
  } else if (product.isCake) {
    addToCart({
      ...product,
      price: getCakePrice(),
      quantity,
      size: cakeOptions.size,
      layers: cakeOptions.layers,
      flavour: cakeOptions.flavour,
      covering: cakeOptions.covering,
      toppings: cakeOptions.toppings,
      addOns: [...cakeOptions.addOns],
      cakeMessage: cakeOptions.cakeMessage.trim(),
      cakeColor: cakeOptions.cakeColor,
      designNotes: cakeOptions.designNotes.trim(),
    });
  } else {
    addToCart({
      ...product,
      quantity,
    });
  }

  setSelectedProduct(null);
};
  const displayedCategories =
    activeCategory === "All"
      ? categories.filter((category) => category !== "All")
      : [activeCategory];

  const getHeadingId = (category) =>
    `heading-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <main className="min-h-screen bg-[#FFFDF9]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#351526] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-purple-100">
            <CakeSlice size={17} />
            Made to delight
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Explore Our{" "}
            <span className="text-purple-300">Menu</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-purple-100 sm:text-lg">
            From beautiful cakes and tasty snacks to satisfying meals
            and refreshing drinks, discover something delicious at
            Toria Cakes and Treats.
          </p>

          <a
            href="#our-menu"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#4B176D] transition hover:bg-purple-100"
          >
            Browse Our Menu
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Menu content */}
      <section
        id="our-menu"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D2396]">
            Something for everyone
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#351526] sm:text-4xl">
            Find Your Favourite
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Explore a product to learn more, customize your cake,
            and add your favourites to the cart.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-xl">
          <label htmlFor="menu-search" className="sr-only">
            Search menu
          </label>

          <div className="flex items-center gap-3 rounded-full border border-purple-100 bg-white px-5 py-3 shadow-sm focus-within:border-purple-400">
            <Search
              size={20}
              className="shrink-0 text-[#6D2396]"
            />

            <input
              id="menu-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search cakes, rice, shawarma..."
              className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${
                activeCategory === category
                  ? "bg-[#4B176D] text-white shadow-md"
                  : "border border-purple-100 bg-white text-gray-700 hover:border-purple-300 hover:text-[#6D2396]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product sections */}
        {filteredProducts.length > 0 && (
          <div className="mt-12 space-y-16">
            {displayedCategories.map((category) => {
              const categoryProducts = filteredProducts.filter(
                (product) => product.category === category
              );

              if (categoryProducts.length === 0) return null;

              return (
                <section
                  key={category}
                  id={`menu-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  aria-labelledby={getHeadingId(category)}
                  className="scroll-mt-28"
                >
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-purple-100 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D2396]">
                        Explore our selection
                      </span>

                      <h3
                        id={getHeadingId(category)}
                        className="mt-2 text-2xl font-extrabold text-[#351526] sm:text-3xl"
                      >
                        {category}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                        {categoryDescriptions[category]}
                      </p>
                    </div>

                    <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-[#6D2396]">
                      {categoryProducts.length}{" "}
                      {categoryProducts.length === 1 ? "item" : "items"}
                    </span>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categoryProducts.map((product) => (
                      <article
                        key={product.name}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-purple-50">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />

                          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#6D2396] shadow-sm">
                            {product.category}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                          <h4 className="text-lg font-bold text-[#351526]">
                            {product.name}
                          </h4>

                          <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                            {product.description}
                          </p>

                          <div className="mt-4">
                            <p className="text-xl font-extrabold text-[#6D2396]">
                              {formatPrice(product.price)}
                            </p>

                            <button
                              type="button"
                              onClick={() => openProductDetails(product)}
                              aria-label={`Buy ${product.name} and view details`}
                              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#6D2396] px-5 py-3 font-bold text-white transition hover:bg-[#4B176D] active:scale-[0.98]"
                            >
                              BUY NOW
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <Search size={32} className="mx-auto text-purple-300" />

            <h3 className="mt-4 text-xl font-bold text-[#351526]">
              No items found
            </h3>

            <p className="mt-2 text-gray-600">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-full bg-[#4B176D] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6D2396]"
            >
              Show all items
            </button>
          </div>
        )}
      </section>

      {/* Order call to action */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-purple-100 px-6 py-12 text-center sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#6D2396]">
            <UtensilsCrossed size={27} />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold text-[#351526] sm:text-3xl">
            Ready to Place Your Order?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Review your selected items and quantities in your cart
            before placing your order through WhatsApp.
          </p>

          <Link
            to="/cart"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4B176D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#6D2396]"
          >
            View My Cart
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Product details modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl bg-[#FFFDF9] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2.5 text-[#351526] shadow-md transition hover:rotate-90 hover:bg-purple-100"
            >
              <X size={22} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Product image */}
              <div className="relative min-h-64 bg-purple-50">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-64 w-full object-cover sm:h-80 md:absolute md:inset-0 md:h-full"
                />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#6D2396] shadow-sm">
                  {selectedProduct.category}
                </span>
              </div>

              {/* Product information */}
              <div className="max-h-[90vh] overflow-y-auto p-5 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#6D2396]">
                  <Heart size={16} />
                  Made to delight
                </div>

                <h2
                  id="product-modal-title"
                  className="mt-3 text-2xl font-extrabold text-[#351526] sm:text-3xl"
                >
                  {selectedProduct.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {selectedProduct.details}
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-[#351526]">
                    Perfect for
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProduct.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-purple-100 bg-purple-50 px-3 py-2 text-xs font-medium text-[#4B176D]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shawarma customizer */}
                {selectedProduct.isShawarma ? (
  <div className="mt-7 space-y-5 border-t border-purple-100 pt-6">
    <div>
      <h3 className="text-lg font-extrabold text-[#351526]">
        Build Your Shawarma Order
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        Choose Beef Shawarma, Chicken Shawarma, or both.
        You can also add extra sausage to your order.
      </p>
    </div>

    {[
      {
        title: "Beef Shawarma",
        price: 3500,
        quantityKey: "beefQuantity",
      },
      {
        title: "Chicken Shawarma",
        price: 4000,
        quantityKey: "chickenQuantity",
      },
    ].map((option) => (
      <div
        key={option.quantityKey}
        className="rounded-2xl border border-purple-100 bg-white p-5"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="font-bold text-[#351526]">
              {option.title}
            </h4>

            <p className="mt-1 text-sm font-semibold text-[#6D2396]">
              {formatPrice(option.price)} each
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-purple-100 bg-purple-50 px-3 py-2">
            <button
              type="button"
              onClick={() =>
                updateShawarmaOption(
                  option.quantityKey,
                  shawarmaOptions[option.quantityKey] - 1
                )
              }
              disabled={shawarmaOptions[option.quantityKey] <= 0}
              aria-label={`Decrease ${option.title} quantity`}
              className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
            >
              <Minus size={17} />
            </button>

            <span className="min-w-5 text-center font-bold text-[#351526]">
              {shawarmaOptions[option.quantityKey]}
            </span>

            <button
              type="button"
              onClick={() =>
                updateShawarmaOption(
                  option.quantityKey,
                  shawarmaOptions[option.quantityKey] + 1
                )
              }
              disabled={shawarmaOptions[option.quantityKey] >= 99}
              aria-label={`Increase ${option.title} quantity`}
              className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
            >
              <Plus size={17} />
            </button>
          </div>
        </div>
      </div>
    ))}

    {/* One shared extra sausage option */}
    <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-[#351526]">
            Extra Sausage
          </h4>

          <p className="mt-1 text-sm text-gray-600">
            Optional add-on · {formatPrice(500)} each
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-full border border-purple-100 bg-white px-3 py-2">
          <button
            type="button"
            onClick={() =>
              updateShawarmaOption(
                "extraSausage",
                shawarmaOptions.extraSausage - 1
              )
            }
            disabled={shawarmaOptions.extraSausage <= 0}
            aria-label="Decrease extra sausage quantity"
            className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
          >
            <Minus size={17} />
          </button>

          <span className="min-w-5 text-center font-bold text-[#351526]">
            {shawarmaOptions.extraSausage}
          </span>

          <button
            type="button"
            onClick={() =>
              updateShawarmaOption(
                "extraSausage",
                shawarmaOptions.extraSausage + 1
              )
            }
            disabled={shawarmaOptions.extraSausage >= 99}
            aria-label="Increase extra sausage quantity"
            className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
          >
            <Plus size={17} />
          </button>
        </div>
      </div>
    </div>

    {/* Shawarma order summary */}
    <div className="rounded-2xl bg-purple-50 p-5">
      <div className="flex items-center justify-between gap-3 text-sm text-gray-600">
        <span>Beef Shawarma</span>

        <span className="font-semibold text-[#351526]">
          {formatPrice(shawarmaOptions.beefQuantity * 3500)}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-sm text-gray-600">
        <span>Chicken Shawarma</span>

        <span className="font-semibold text-[#351526]">
          {formatPrice(shawarmaOptions.chickenQuantity * 4000)}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-sm text-gray-600">
        <span>Extra Sausage</span>

        <span className="font-semibold text-[#351526]">
          {formatPrice(shawarmaOptions.extraSausage * 500)}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-purple-200 pt-4">
        <span className="font-bold text-[#351526]">
          Estimated Total
        </span>

        <span className="text-xl font-extrabold text-[#6D2396]">
          {formatPrice(getShawarmaTotal())}
        </span>
      </div>
    </div>
  </div>
) : selectedProduct.isCake ? (
                  <div className="mt-7 space-y-6 border-t border-purple-100 pt-6">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#351526]">
                        Design Your Cake
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Your selected cake starts at{" "}
                        {formatPrice(selectedProduct.price)}.
                        Choose your preferences below.
                      </p>
                    </div>

                    {/* Cake size */}
                    <div>
                      <label
                        htmlFor="cake-size"
                        className="text-sm font-bold text-[#351526]"
                      >
                        Cake size
                      </label>

                      <select
                        id="cake-size"
                        value={cakeOptions.size}
                        onChange={(event) =>
                          updateCakeOption("size", event.target.value)
                        }
                        className={inputClass}
                      >
                        {cakeSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                            {size === selectedProduct.cakeSize
                              ? " — selected cake size"
                              : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Cake layers */}
                    <div>
                      <label
                        htmlFor="cake-layers"
                        className="text-sm font-bold text-[#351526]"
                      >
                        Number of layers
                      </label>

                      <select
                        id="cake-layers"
                        value={cakeOptions.layers}
                        onChange={(event) =>
                          updateCakeOption("layers", event.target.value)
                        }
                        className={inputClass}
                      >
                        {cakeLayers.map((layer) => (
                          <option key={layer} value={layer}>
                            {layer}
                            {layer === selectedProduct.cakeLayers
                              ? " — selected cake layers"
                              : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Flavour */}
                    <div>
                      <label
                        htmlFor="cake-flavour"
                        className="text-sm font-bold text-[#351526]"
                      >
                        Cake flavour
                      </label>

                      <select
                        id="cake-flavour"
                        value={cakeOptions.flavour}
                        onChange={(event) =>
                          updateCakeOption("flavour", event.target.value)
                        }
                        className={inputClass}
                      >
                        <option value="Vanilla">Vanilla</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Red Velvet">Red Velvet</option>
                      </select>
                    </div>

                    {/* Covering */}
                    <div>
                      <label
                        htmlFor="cake-covering"
                        className="text-sm font-bold text-[#351526]"
                      >
                        Cake covering
                      </label>

                      <select
                        id="cake-covering"
                        value={cakeOptions.covering}
                        onChange={(event) =>
                          updateCakeOption("covering", event.target.value)
                        }
                        className={inputClass}
                      >
                        <option value="Buttercream">
                          Buttercream — included
                        </option>

                        <option value="Whipped cream">
                          Whipped cream — add{" "}
                          {formatPrice(cakePricing.whippedCream)}
                        </option>
                      </select>
                    </div>

                    {/* Toppings */}
                    <div>
                      <label
                        htmlFor="cake-toppings"
                        className="text-sm font-bold text-[#351526]"
                      >
                        Toppings
                      </label>

                      <select
                        id="cake-toppings"
                        value={cakeOptions.toppings}
                        onChange={(event) =>
                          updateCakeOption("toppings", event.target.value)
                        }
                        className={inputClass}
                      >
                        <option value="None">No extra toppings</option>

                        <option value="Mixed toppings">
                          Mixed toppings — add{" "}
                          {formatPrice(cakePricing.mixedToppings)}
                        </option>
                      </select>
                    </div>

                    {/* Optional decorations */}
                    <div>
                      <h4 className="text-sm font-bold text-[#351526]">
                        Optional decorations
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Select any decorations you would like to request.
                      </p>

                      <div className="mt-3 space-y-3 rounded-xl border border-purple-100 bg-white p-4">
                        {Object.entries(cakePricing.addOns).map(
                          ([addOn, price]) => (
                            <label
                              key={addOn}
                              className="flex cursor-pointer items-center justify-between gap-3 text-sm"
                            >
                              <span className="flex items-center gap-3 text-gray-700">
                                <input
                                  type="checkbox"
                                  checked={cakeOptions.addOns.includes(addOn)}
                                  onChange={() => toggleCakeAddOn(addOn)}
                                  className="h-4 w-4 accent-[#6D2396]"
                                />

                                {addOn}
                              </span>

                              <span className="shrink-0 font-semibold text-[#6D2396]">
                                +{formatPrice(price)}
                              </span>
                            </label>
                          )
                        )}
                      </div>
                    </div>

                    {/* Cake message */}
                    <div>
                      <label
                        htmlFor="cake-message"
                        className="text-sm font-bold text-[#351526]"
                      >
                        Message on the cake
                      </label>

                      <input
                        id="cake-message"
                        type="text"
                        maxLength={100}
                        value={cakeOptions.cakeMessage}
                        onChange={(event) =>
                          updateCakeOption("cakeMessage", event.target.value)
                        }
                        placeholder="e.g. Happy Birthday, Sarah!"
                        className={inputClass}
                      />

                      <p className="mt-1 text-xs text-gray-500">
                        Leave blank if you don't need a message.
                      </p>
                    </div>
  
              {/* Cake colour preference */}
                    <div>
                      <label className="text-sm font-bold text-[#351526]">
                        Cake colour preference
                      </label>

                      <p className="mt-1 mb-3 text-xs text-gray-500">
                        Select one colour for your cake.
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: "Red", value: "#E33135" },
                          { name: "White", value: "#FFFFFF" },
                          { name: "Blue", value: "#2878BC" },
                          { name: "Green", value: "#13B65B" },
                          { name: "Pink", value: "#E90083" },
                          { name: "Orange", value: "#E34322" },
                          { name: "Brown", value: "#79543F" },
                          { name: "Purple", value: "#85008B" },
                          { name: "Yellow", value: "#F0EB18" },
                          { name: "Black", value: "#000000" },
                        ].map((color) => (
                          <button
                            key={color.name}
                            type="button"
                            onClick={() =>
                              updateCakeOption("cakeColor", color.name)
                            }
                            title={color.name}
                            aria-label={`Select ${color.name}`}
                            aria-pressed={cakeOptions.cakeColor === color.name}
                            className={`w-10 h-10 rounded-md border-2 transition-all ${
                              cakeOptions.cakeColor === color.name
                                ? "border-[#6D2396] ring-2 ring-[#6D2396] ring-offset-2 scale-105"
                                : "border-gray-300 hover:scale-105"
                            }`}
                            style={{ backgroundColor: color.value }}
                          />
                        ))}
                      </div>

                      {cakeOptions.cakeColor && (
                        <p className="mt-3 text-sm font-semibold text-[#6D2396]">
                          Selected colour: {cakeOptions.cakeColor}
                        </p>
                      )}
                    </div>

                    {/* Design notes */}
                    <div>
                      <label
                        htmlFor="cake-design-notes"
                        className="text-sm font-bold text-[#351526]"
                      >
                        Additional design preferences
                      </label>

                      <textarea
                        id="cake-design-notes"
                        rows={3}
                        maxLength={500}
                        value={cakeOptions.designNotes}
                        onChange={(event) =>
                          updateCakeOption("designNotes", event.target.value)
                        }
                        placeholder="Describe your preferred theme or cake design..."
                        className={inputClass}
                      />
                    </div>

                    {/* Cake quantity */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-[#351526]">
                          Quantity
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          How many cakes would you like?
                        </p>
                      </div>

                      <div className="flex items-center gap-3 rounded-full border border-purple-100 bg-white px-3 py-2">
                        <button
                          type="button"
                          onClick={() =>
                            changeQuantity(selectedProduct.name, -1)
                          }
                          disabled={getQuantity(selectedProduct.name) <= 1}
                          aria-label="Decrease cake quantity"
                          className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
                        >
                          <Minus size={17} />
                        </button>

                        <span className="min-w-5 text-center font-bold text-[#351526]">
                          {getQuantity(selectedProduct.name)}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            changeQuantity(selectedProduct.name, 1)
                          }
                          disabled={getQuantity(selectedProduct.name) >= 99}
                          aria-label="Increase cake quantity"
                          className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
                        >
                          <Plus size={17} />
                        </button>
                      </div>
                    </div>

                    {/* Live estimated cake price */}
                    <div className="rounded-2xl bg-purple-50 p-5">
                      <div className="flex items-center justify-between gap-3 text-sm text-gray-600">
                        <span>Base price</span>

                        <span className="font-semibold text-[#351526]">
                          {formatPrice(selectedProduct.price)}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3 text-sm text-gray-600">
                        <span>Optional extras</span>

                        <span className="font-semibold text-[#351526]">
                          {formatPrice(
                            getCakePrice() - selectedProduct.price
                          )}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3 text-sm text-gray-600">
                        <span>Quantity</span>

                        <span className="font-semibold text-[#351526]">
                          {getQuantity(selectedProduct.name)}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-purple-200 pt-4">
                        <span className="font-bold text-[#351526]">
                          Estimated subtotal
                        </span>

                        <span className="text-xl font-extrabold text-[#6D2396]">
                          {formatPrice(
                            getCakePrice() *
                              getQuantity(selectedProduct.name)
                          )}
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-5 text-gray-500">
                        Prices for changes to cake size, layers, flavour,
                        and custom designs may differ from this estimate.
                        Toria will confirm the final price and availability
                        before the order is accepted.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Regular product price */}
                    <div className="mt-7 border-t border-purple-100 pt-6">
                      <p className="text-sm text-gray-500">
                        Current listed price
                      </p>

                      <p className="mt-1 text-3xl font-extrabold text-[#6D2396]">
                        {formatPrice(selectedProduct.price)}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-gray-500">
                        Prices and availability are subject to confirmation.
                      </p>
                    </div>

                    {/* Regular product quantity */}
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-[#351526]">
                          Choose quantity
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Adjust before adding to cart
                        </p>
                      </div>

                      <div className="flex items-center gap-3 rounded-full border border-purple-100 bg-white px-3 py-2">
                        <button
                          type="button"
                          onClick={() =>
                            changeQuantity(selectedProduct.name, -1)
                          }
                          disabled={getQuantity(selectedProduct.name) <= 1}
                          aria-label="Decrease quantity"
                          className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
                        >
                          <Minus size={17} />
                        </button>

                        <span className="min-w-5 text-center font-bold text-[#351526]">
                          {getQuantity(selectedProduct.name)}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            changeQuantity(selectedProduct.name, 1)
                          }
                          disabled={getQuantity(selectedProduct.name) >= 99}
                          aria-label="Increase quantity"
                          className="rounded-full p-1 text-[#6D2396] hover:bg-purple-100 disabled:opacity-40"
                        >
                          <Plus size={17} />
                        </button>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-purple-50 p-4">
                      <span className="text-sm font-semibold text-[#351526]">
                        Your subtotal
                      </span>

                      <span className="text-lg font-extrabold text-[#6D2396]">
                        {formatPrice(
                          selectedProduct.price *
                            getQuantity(selectedProduct.name)
                        )}
                      </span>
                    </div>
                  </>
                )}

                {/* Add to cart */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(selectedProduct)}
                  disabled={selectedProduct.isShawarma && shawarmaOptions.beefQuantity === 0 && shawarmaOptions.chickenQuantity === 0}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4B176D] px-5 py-4 font-bold text-white transition hover:bg-[#6D2396] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>

                <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                  <Clock size={14} />
                  Confirm availability and custom requests on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Menu;