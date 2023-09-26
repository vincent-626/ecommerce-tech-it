import laptop1_1 from "../images/1-1.jpeg";
import laptop1_2 from "../images/1-2.png";
import laptop1_3 from "../images/1-3.png";
import laptop2_1 from "../images/2-1.jpeg";
import laptop2_2 from "../images/2-2.jpg";
import laptop2_3 from "../images/2-3.jpg";
import phone1_1 from "../images/3-1.png";
import phone1_2 from "../images/3-2.png";
import phone1_3 from "../images/3-3.jpg.webp";
import watch1_1 from "../images/4-1.jpg";
import watch1_2 from "../images/4-2.png";
import watch1_3 from "../images/4-3.png";
import keyboard1_1 from "../images/5-1.png";
import keyboard1_2 from "../images/5-2.png";
import keyboard1_3 from "../images/5-3.jpg";
import mouse1_1 from "../images/6-1.png";
import mouse1_2 from "../images/6-2.png";
import mouse1_3 from "../images/6-3.png";

export const PRODUCTS = [
  {
    id: 1,
    name: "Apple Macbook Air M2 (13 inch)",
    price: 1599,
    category: "laptops",
    image: laptop1_1,
    altImg: [laptop1_2, laptop1_3],
    description:
      "The most affordable Mac laptop to get things done on the go. Supercharged by the next-generation M2 chip, the redesigned MacBook Air combines incredible performance and up to 18 hours of battery life into its strikingly thin aluminium enclosure.",
  },
  {
    id: 2,
    name: "Apple Macbook Pro M2 Pro (14 inch)",
    price: 2899,
    category: "laptops",
    image: laptop2_1,
    altImg: [laptop2_2, laptop2_3],
    description:
      "Supercharged by M2 Pro, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S23 Ultra",
    price: 1528,
    category: "phones",
    image: phone1_1,
    altImg: [phone1_2, phone1_3],
    description:
      "The Samsung Galaxy S23 Ultra is the headliner of the S23 series. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 2 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.",
  },
  {
    id: 4,
    name: "Huawei Watch GT 3",
    price: 298,
    category: "watches",
    image: watch1_1,
    altImg: [watch1_2, watch1_3],
    description:
      "HUAWEI WATCH GT 3 42 mm Smartwatch, 1.32 inches AMOLED Colour Screen, Modern and Sophisticated Look, Durable Battery Life, All-Day SpO2 Monitoring, Personal AI Running Coach, Accurate Heart Rate Monitoring, 100+ Workout Modes, Bluetooth Calling, Dual-Band Five-System GNSS, Wireless Charging, Professional Training Advice, Route Back Navigation, All-Round and Non-Stop Care",
  },
  {
    id: 5,
    name: "Keychron K3",
    price: 109,
    category: "keyboards",
    image: keyboard1_1,
    altImg: [keyboard1_2, keyboard1_3],
    description:
      "Keychron K3 Pro is an ultra-slim wireless custom mechanical keyboard that allows anyone to master any keys or macro commands on its 75% compact layout through VIA, it has included LSA (low profile spherical-angled) profile keycaps for both Windows and macOS, and users can hot-swap with Gateron low-profile MX mechanical switch in a breeze (for RGB Backlight Hot-Swappable Version only).",
  },
  {
    id: 6,
    name: "Logitech MX Master 3S",
    price: 189,
    category: "mice",
    image: mouse1_1,
    altImg: [mouse1_2, mouse1_3],
    description:
      "Meet MX Master 3S - an iconic mouse remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass134 mm minimum glass thickness. sensor.",
  },
];
