export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "packing" | "loading" | "trucks" | "bikes" | "cars" | "travelling";
  categoryLabel: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Packing
  { id: "p1", src: "/images/packing/Screenshot 2026-06-19 040456.png", alt: "Professional packing service", category: "packing", categoryLabel: "Packing" },
  { id: "p2", src: "/images/packing/Screenshot 2026-06-19 040612.png", alt: "Careful packing of household items", category: "packing", categoryLabel: "Packing" },
  { id: "p3", src: "/images/packing/Screenshot 2026-06-19 040629.png", alt: "Quality packing materials", category: "packing", categoryLabel: "Packing" },
  { id: "p4", src: "/images/packing/Screenshot 2026-06-19 040639.png", alt: "Box packing service", category: "packing", categoryLabel: "Packing" },
  { id: "p5", src: "/images/packing/Screenshot 2026-06-19 040757.png", alt: "Expert packers at work", category: "packing", categoryLabel: "Packing" },
  { id: "p6", src: "/images/packing/Screenshot 2026-06-19 040810.png", alt: "Secure packaging", category: "packing", categoryLabel: "Packing" },
  { id: "p7", src: "/images/packing/Screenshot 2026-06-19 041941.png", alt: "House shifting packing", category: "packing", categoryLabel: "Packing" },
  { id: "p8", src: "/images/packing/Screenshot 2026-06-19 041955.png", alt: "Furniture packing", category: "packing", categoryLabel: "Packing" },
  { id: "p9", src: "/images/packing/Screenshot 2026-06-19 042007.png", alt: "Office relocation packing", category: "packing", categoryLabel: "Packing" },
  { id: "p10", src: "/images/packing/Screenshot 2026-06-19 042026.png", alt: "Careful item packing", category: "packing", categoryLabel: "Packing" },
  { id: "p11", src: "/images/packing/Screenshot 2026-06-19 042047.png", alt: "Professional packers", category: "packing", categoryLabel: "Packing" },
  { id: "p12", src: "/images/packing/Screenshot 2026-06-19 042106.png", alt: "Packing in progress", category: "packing", categoryLabel: "Packing" },
  { id: "p13", src: "/images/packing/Screenshot 2026-06-19 042122.png", alt: "Complete packing service", category: "packing", categoryLabel: "Packing" },
  { id: "p14", src: "/images/packing/Screenshot 2026-06-19 042147.png", alt: "Household goods packed", category: "packing", categoryLabel: "Packing" },
  // Loading
  { id: "l1", src: "/images/loading/Screenshot 2026-06-19 040816.png", alt: "Loading items into truck", category: "loading", categoryLabel: "Loading" },
  { id: "l2", src: "/images/loading/Screenshot 2026-06-19 040842.png", alt: "Professional loading team", category: "loading", categoryLabel: "Loading" },
  { id: "l3", src: "/images/loading/Screenshot 2026-06-19 040851.png", alt: "Careful loading process", category: "loading", categoryLabel: "Loading" },
  { id: "l4", src: "/images/loading/Screenshot 2026-06-19 042113.png", alt: "Team loading household goods", category: "loading", categoryLabel: "Loading" },
  { id: "l5", src: "/images/loading/Screenshot 2026-06-19 042132.png", alt: "Loading completed", category: "loading", categoryLabel: "Loading" },
  // Trucks
  { id: "t1", src: "/images/trucks/Screenshot 2026-06-19 035912.png", alt: "Transport truck", category: "trucks", categoryLabel: "Transport" },
  { id: "t2", src: "/images/trucks/Screenshot 2026-06-19 035933.png", alt: "Moving truck ready", category: "trucks", categoryLabel: "Transport" },
  { id: "t3", src: "/images/trucks/Screenshot 2026-06-19 040021.png", alt: "Goods truck", category: "trucks", categoryLabel: "Transport" },
  { id: "t4", src: "/images/trucks/Screenshot 2026-06-19 040035.png", alt: "Delivery truck", category: "trucks", categoryLabel: "Transport" },
  { id: "t5", src: "/images/trucks/Screenshot 2026-06-19 040201.png", alt: "Large transport truck", category: "trucks", categoryLabel: "Transport" },
  { id: "t6", src: "/images/trucks/Screenshot 2026-06-19 040424.png", alt: "Movers truck", category: "trucks", categoryLabel: "Transport" },
  // Bikes
  { id: "b1", src: "/images/bikes/Screenshot 2026-06-19 040403.png", alt: "Bike transport service", category: "bikes", categoryLabel: "Bike Transport" },
  { id: "b2", src: "/images/bikes/Screenshot 2026-06-19 040434.png", alt: "Motorcycle transport", category: "bikes", categoryLabel: "Bike Transport" },
  { id: "b3", src: "/images/bikes/Screenshot 2026-06-19 040539.png", alt: "Two-wheeler transport", category: "bikes", categoryLabel: "Bike Transport" },
  { id: "b4", src: "/images/bikes/Screenshot 2026-06-19 042017.png", alt: "Safe bike delivery", category: "bikes", categoryLabel: "Bike Transport" },
  // Cars
  { id: "c1", src: "/images/cars/Screenshot 2026-06-19 040309.png", alt: "Car transport service", category: "cars", categoryLabel: "Car Transport" },
  { id: "c2", src: "/images/cars/Screenshot 2026-06-19 040323.png", alt: "Vehicle relocation", category: "cars", categoryLabel: "Car Transport" },
  { id: "c3", src: "/images/cars/Screenshot 2026-06-19 040340.png", alt: "Car carrier transport", category: "cars", categoryLabel: "Car Transport" },
  // Travelling
  { id: "tr1", src: "/images/travelling/Screenshot 2026-06-19 035952.png", alt: "Interstate transport", category: "travelling", categoryLabel: "Interstate" },
  { id: "tr2", src: "/images/travelling/Screenshot 2026-06-19 040445.png", alt: "Long distance moving", category: "travelling", categoryLabel: "Interstate" },
  { id: "tr3", src: "/images/travelling/Screenshot 2026-06-19 040557.png", alt: "Pan India transport", category: "travelling", categoryLabel: "Interstate" },
  // Review Images
  { id: "rev1", src: "https://lh3.googleusercontent.com/grass-cs/ANxoTn2GCBHP3NxyqCy2HTYHDNFhvPJ0bmB5cVvEM96cxzkj2UhmNIdT60dSlXg7s7DiuTb_KF7NBCVQtx3FHXwMgst5jdmGhrR4wTmnaN-SvfX74KvJFjStdN3Bt5WS8Haz5bQZlGB0xQoFVsl9=k-no", alt: "Customer review photo", category: "packing", categoryLabel: "Packing" },
  { id: "rev2", src: "https://lh3.googleusercontent.com/grass-cs/ANxoTn0JWupsQqkOtjtvyaHSNaFJqomv_xTL8Jw3FQlV7F4tcGFoQDoNYWSmrRFCZP0gxmdH1YVpsxd1_NHAGGjRo-qFEH6oyG80J5OAszxV5DRKyY9XZ8ybCTPlnclyWAp_cYZanh92Esb8jiw=k-no", alt: "Customer review photo", category: "packing", categoryLabel: "Packing" },
  { id: "rev3", src: "https://lh3.googleusercontent.com/grass-cs/ANxoTn0QT6YRC4nVwMBFXMAJprdjP-LTNGssIwTLdIk73u3WNPX3i9goqjt-YCyrnMYbz3yqnH4UehbockU_Qq94Hg8Fhj0gESQB1KAV_bmoQJmdzpl9AjfH_zvM6p9ayn91fq-GvrhLTw4XNYk=k-no", alt: "Customer review photo", category: "packing", categoryLabel: "Packing" },
  { id: "rev4", src: "https://lh3.googleusercontent.com/grass-cs/ANxoTn1FnDgmW4gxGGnYFvT-pK_uR__FI0kZcSOwpTK3fCnXf-SasKaLkUIfCiITDc2_SG7OSr2i7MtzhMuLMORQcLmyLhbhn9pKDy0FExNZf0LyyRaH7gB7guHCZQERmjj_zlUbQkC43OvTGJd7=k-no", alt: "Customer review photo", category: "packing", categoryLabel: "Packing" },
  { id: "rev5", src: "https://lh3.googleusercontent.com/grass-cs/ANxoTn1_BQIy5tFLpqYb0BBNabfSsIeFA7c9LqKnPDlkYL6u4YuN9_4WUVTRfgh8rWur4WIfQVl6et3L0OrGr78-0leTqgO3ue6wt-cBo2QSDYR_ce149D43OAPJrmKD6UEAE07i-la2cVwPUv4=k-no", alt: "Customer review photo", category: "packing", categoryLabel: "Packing" },
  { id: "rev6", src: "https://lh3.googleusercontent.com/grass-cs/ANxoTn25nnn4kebqpDoeuAd2mbl9tNC_GzZlmZyxys0D_bGhixw92-OIaOxSg91-Ic9bSrmgq1Yutogr50VfSkOWn3qEZVGnVTMbtA7grke0NZUojKQcfcmS6vsDeMAp-X5U4pY-JYycqfap_DE=k-no", alt: "Customer review photo", category: "packing", categoryLabel: "Packing" },
];
export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "packing", label: "Packing" },
  { id: "loading", label: "Loading" },
  { id: "trucks", label: "Transport" },
  { id: "bikes", label: "Bike Transport" },
  { id: "cars", label: "Car Transport" },
  { id: "travelling", label: "Interstate" },
];
