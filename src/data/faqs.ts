export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  // Pricing
  {
    id: "f1",
    category: "Pricing",
    question: "How do you calculate the moving cost?",
    answer: "The cost depends on the quantity of items, distance, move type (local/interstate), floor level, and special items like heavy furniture or vehicles. We provide a free on-site or video survey to give you an accurate quote with no hidden charges.",
  },
  {
    id: "f2",
    category: "Pricing",
    question: "Are there any hidden charges?",
    answer: "Absolutely not. We believe in complete transparency. Your final quote will clearly list all charges including packing materials, loading/unloading, transport, and any special handling. What you see is what you pay.",
  },
  {
    id: "f3",
    category: "Pricing",
    question: "Do you charge separately for packing materials?",
    answer: "Packing material charges are included in our standard quotes. We use quality bubble wrap, corrugated boxes, stretch film, and foam padding — all included in your package price.",
  },
  {
    id: "f4",
    category: "Pricing",
    question: "How can I get a free quote?",
    answer: "Simply click 'Get Free Quote' or WhatsApp us at 07674981849. Tell us your move details and we'll respond within 5 minutes with an accurate estimate. Alternatively, fill out our Moving Wizard form and we'll contact you immediately.",
  },
  // Process
  {
    id: "f5",
    category: "Process",
    question: "How long does a typical house move take?",
    answer: "A 2BHK local move typically takes 4-6 hours. A 3BHK move may take 6-8 hours. Interstate moves depend on distance — Vizag to Hyderabad usually takes 2 days including packing and delivery.",
  },
  {
    id: "f6",
    category: "Process",
    question: "Do you offer weekend or holiday moving?",
    answer: "Yes! We operate 7 days a week including weekends and holidays. Many customers prefer weekend moves to minimize work disruption. Book in advance as weekends fill up quickly.",
  },
  {
    id: "f7",
    category: "Process",
    question: "Can you also help with unpacking at the new location?",
    answer: "Yes, we offer unpacking and rearranging services at the destination. Our team will carefully unpack all boxes and arrange items as per your instructions.",
  },
  {
    id: "f8",
    category: "Process",
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 3-5 days in advance for local moves and 1-2 weeks for interstate moves. For month-end moves (which are peak time), book at least 2 weeks ahead.",
  },
  // Safety
  {
    id: "f9",
    category: "Safety",
    question: "How do you ensure my belongings are safe during transit?",
    answer: "All items are professionally packed with quality materials. Fragile items get extra bubble wrap and foam padding. Goods are loaded in covered trucks and secured with straps. We also offer transit insurance for added peace of mind.",
  },
  {
    id: "f10",
    category: "Safety",
    question: "Do you provide insurance for my goods?",
    answer: "Yes, we provide transit insurance coverage for your goods. This covers damage or loss during transit. Insurance details and premium are communicated clearly before your move.",
  },
  {
    id: "f11",
    category: "Safety",
    question: "What happens if something gets damaged?",
    answer: "In the rare case of damage, we handle claims promptly. Our team will assess the damage, and insurance claims are processed quickly. Customer satisfaction is our priority and we ensure every issue is resolved fairly.",
  },
  // Vehicles
  {
    id: "f12",
    category: "Vehicle Transport",
    question: "Can you transport my bike or car interstate?",
    answer: "Absolutely! We specialize in bike and car transport across India. Bikes are transported in specialized carriers with full wrapping. Cars go on flatbed or enclosed car carriers depending on your preference.",
  },
  {
    id: "f13",
    category: "Vehicle Transport",
    question: "Will my vehicle be driven or transported?",
    answer: "Your vehicle is always transported on a carrier — never driven. This prevents additional mileage, wear, and any risk of accidents. We also do a pre and post inspection.",
  },
  // Coverage
  {
    id: "f14",
    category: "Coverage",
    question: "Do you serve all areas in Visakhapatnam?",
    answer: "Yes! We serve all areas in Visakhapatnam including Gajuwaka, Seethammadhara, Dwaraka Nagar, MVP Colony, Rushikonda, Maddilapalem, Steel Plant Area, Bheemunipatnam, and all other localities.",
  },
  {
    id: "f15",
    category: "Coverage",
    question: "Do you do interstate moves?",
    answer: "Yes! We cover all major cities across India — Hyderabad, Chennai, Bangalore, Mumbai, Delhi, Pune, and more. We have a trusted pan-India partner network for seamless interstate moves.",
  },
];

export const FAQ_CATEGORIES = ["All", "Pricing", "Process", "Safety", "Vehicle Transport", "Coverage"];
