export const COMPANY = {
  name: "Manikanta Packers & Movers",
  shortName: "Manikanta Movers",
  phone: "07674981849",
  phoneFormatted: "+91 76749 81849",
  whatsapp: "917674981849",
  email: "info@manikantapackersandmovers.com",
  website: "https://manikantapackersandmovers.com",
  address: "High School Rd, New Gajuwaka, Krishna Nagar, Gajuwaka, Andhra Pradesh 530026",
  city: "Visakhapatnam",
  state: "Andhra Pradesh",
  pincode: "530026",
  lat: 17.6896796,
  lng: 83.2113599,
  rating: 4.4,
  reviewsCount: 433,
  experience: "10+",
  mapsUrl: "https://www.google.com/maps/place/Manikanta+Packers+%26+Movers/@17.6896796,83.2113599,17z",
  googleReviewUrl: "https://www.google.com/maps/place/Manikanta+Packers+%26+Movers/@17.6896796,83.2113599,17z",
};

export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  `Hi! I'm interested in your packers & movers services.\n\nPlease share details and a quote for my move.\n\nThank you!`;
