export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: "house-shifting",
    slug: "house-shifting",
    title: "House Shifting",
    shortTitle: "House Shifting",
    icon: "🏠",
    description: "Complete household relocation services within Vizag and across India with utmost care and safety.",
    longDescription: "We handle your complete household move with professional care — from careful packing of fragile items to safe loading, transportation, unloading, and rearranging at your new home.",
    features: [
      "Professional packing with quality materials",
      "Careful loading & unloading",
      "Furniture disassembly & reassembly",
      "Safe transportation in covered trucks",
      "Insurance coverage for goods",
      "On-time delivery guarantee",
    ],
    image: "/images/packing/Screenshot 2026-06-19 041941.png",
    color: "#1e4fa0",
  },
  {
    id: "office-relocation",
    slug: "office-relocation",
    title: "Office Relocation",
    shortTitle: "Office Move",
    icon: "🏢",
    description: "Minimal downtime office moves with systematic planning and professional execution.",
    longDescription: "We understand business continuity is critical. Our office relocation services ensure your equipment, furniture, and documents are moved securely with minimal disruption to your operations.",
    features: [
      "Weekend & after-hours moving",
      "IT equipment handling",
      "Document & file management",
      "Workstation disassembly & setup",
      "Warehouse storage options",
      "Post-move setup assistance",
    ],
    image: "/images/packing/Screenshot 2026-06-19 042007.png",
    color: "#1e4fa0",
  },
  {
    id: "bike-transport",
    slug: "bike-transport",
    title: "Bike Transport",
    shortTitle: "Bike Transport",
    icon: "🏍️",
    description: "Safe and secure motorcycle & scooter transport via specialized carriers across India.",
    longDescription: "Your two-wheeler is transported safely in specialized bike carriers with secure strapping, protective wrapping, and door-to-door delivery across India.",
    features: [
      "Specialized bike carriers",
      "Full bike wrapping & protection",
      "Door-to-door delivery",
      "Pan-India coverage",
      "Real-time tracking",
      "Insurance coverage",
    ],
    image: "/images/bikes/Screenshot 2026-06-19 040403.png",
    color: "#f97316",
  },
  {
    id: "car-transport",
    slug: "car-transport",
    title: "Car Transport",
    shortTitle: "Car Transport",
    icon: "🚗",
    description: "Safe vehicle transportation using car carriers and flatbed trucks across India.",
    longDescription: "We transport your car safely on specialized car carrier trucks or flatbed vehicles. Your vehicle is secured, protected from weather, and delivered in perfect condition.",
    features: [
      "Enclosed & open carrier options",
      "Flatbed truck transport",
      "Pre & post transport inspection",
      "Door-to-door delivery",
      "Pan-India network",
      "Full insurance coverage",
    ],
    image: "/images/cars/Screenshot 2026-06-19 040309.png",
    color: "#f97316",
  },
  {
    id: "packing-services",
    slug: "packing-services",
    title: "Packing Services",
    shortTitle: "Packing",
    icon: "📦",
    description: "Professional packing using high-quality materials to keep your belongings safe during transit.",
    longDescription: "Our expert packers use premium quality materials — bubble wrap, corrugated boxes, stretch film — to ensure every item is packed safely and arrives damage-free.",
    features: [
      "Premium packing materials",
      "Fragile item specialists",
      "Electronic gadget packing",
      "Antique & artwork handling",
      "Labeled box system",
      "Eco-friendly options",
    ],
    image: "/images/packing/Screenshot 2026-06-19 042122.png",
    color: "#16a34a",
  },
  {
    id: "interstate-transport",
    slug: "interstate-transport",
    title: "Interstate Moving",
    shortTitle: "Interstate",
    icon: "🚛",
    description: "Reliable pan-India moving services with GPS tracking and on-time delivery guarantee.",
    longDescription: "Moving to another state? We have an all-India network of partners ensuring your goods reach any corner of the country safely and on schedule.",
    features: [
      "Pan-India network coverage",
      "GPS-tracked trucks",
      "Multi-city coordination",
      "Real-time status updates",
      "Doorstep pickup & delivery",
      "Transit insurance included",
    ],
    image: "/images/travelling/Screenshot 2026-06-19 035952.png",
    color: "#7c3aed",
  },
];
