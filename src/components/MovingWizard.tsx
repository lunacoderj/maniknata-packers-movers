import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Home, Building2, Bike, Car, Package, Truck, Calendar, Phone, ChevronRight, ChevronLeft, Check, User } from "lucide-react";
import { WHATSAPP_URL } from "../data/company";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import districtsList from "../data/districts.json";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MOVE_TYPES = [
  { id: "house", label: "House Shifting", icon: <Home size={28} /> },
  { id: "office", label: "Office Move", icon: <Building2 size={28} /> },
  { id: "bike", label: "Bike Transport", icon: <Bike size={28} /> },
  { id: "car", label: "Car Transport", icon: <Car size={28} /> },
  { id: "items", label: "Few Items", icon: <Package size={28} /> },
  { id: "interstate", label: "Interstate", icon: <Truck size={28} /> },
];

const HOME_SIZES = [
  { id: "1bhk", label: "1 BHK" },
  { id: "2bhk", label: "2 BHK" },
  { id: "3bhk", label: "3 BHK" },
  { id: "4bhk", label: "4 BHK+" },
  { id: "villa", label: "Villa" },
  { id: "other", label: "Other" },
];

function LocationSelector({ value, onChange, placeholder }: { value: string, onChange: (v: string) => void, placeholder: string }) {
  const [mode, setMode] = useState<"dropdown" | "text" | "map">("dropdown");
  const [position, setPosition] = useState<[number, number] | null>(null);

  const MapClickHandler = () => {
    useMapEvents({
      async click(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        setPosition([lat, lng]);
        onChange("Fetching address...");

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
          const data = await res.json();
          if (data && data.address) {
            const addr = data.address;
            const parts = [
              addr.house_number,
              addr.road || addr.pedestrian,
              addr.suburb || addr.neighbourhood,
              addr.city_district || addr.district || addr.county,
              addr.city || addr.town || addr.village,
              addr.state,
              addr.postcode
            ].filter(Boolean);
            
            const addressString = parts.join(", ") || data.display_name;
            onChange(addressString + ` (Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)})`);
          } else {
            onChange(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
          }
        } catch (error) {
          onChange(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
        }
      }
    });
    return null;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%" }}>
      <div style={{ display: "flex", gap: "0.5rem", background: "#f8fafc", padding: "0.25rem", borderRadius: "12px", flexWrap: "wrap" }}>
        <button
          onClick={() => setMode("dropdown")}
          style={{ flex: 1, minWidth: "100px", padding: "0.5rem", borderRadius: "8px", border: "none", background: mode === "dropdown" ? "white" : "transparent", boxShadow: mode === "dropdown" ? "0 2px 4px rgba(0,0,0,0.05)" : "none", color: mode === "dropdown" ? "#1e4fa0" : "#64748b", fontWeight: 600, transition: "all 0.2s", cursor: "pointer", fontSize: "0.8rem" }}
        >Select District</button>
        <button
          onClick={() => setMode("text")}
          style={{ flex: 1, minWidth: "100px", padding: "0.5rem", borderRadius: "8px", border: "none", background: mode === "text" ? "white" : "transparent", boxShadow: mode === "text" ? "0 2px 4px rgba(0,0,0,0.05)" : "none", color: mode === "text" ? "#1e4fa0" : "#64748b", fontWeight: 600, transition: "all 0.2s", cursor: "pointer", fontSize: "0.8rem" }}
        >Type Manually</button>
        <button
          onClick={() => setMode("map")}
          style={{ flex: 1, minWidth: "100px", padding: "0.5rem", borderRadius: "8px", border: "none", background: mode === "map" ? "white" : "transparent", boxShadow: mode === "map" ? "0 2px 4px rgba(0,0,0,0.05)" : "none", color: mode === "map" ? "#1e4fa0" : "#64748b", fontWeight: 600, transition: "all 0.2s", cursor: "pointer", fontSize: "0.8rem" }}
        >Drop Pin on Map</button>
      </div>

      {mode === "dropdown" && (
         <select
           value={districtsList.includes(value) ? value : ""}
           onChange={(e) => onChange(e.target.value)}
           className="input-field"
         >
           <option value="">Select district...</option>
           {districtsList.map((d: string) => <option key={d} value={d}>{d}</option>)}
         </select>
      )}

      {mode === "text" && (
        <input 
           type="text" 
           value={value} 
           onChange={(e) => onChange(e.target.value)} 
           placeholder={placeholder}
           className="input-field" 
        />
      )}

      {mode === "map" && (
        <div style={{ height: "250px", borderRadius: "12px", overflow: "hidden", border: "2px solid #e2e8f0" }}>
           <MapContainer center={[17.6868, 83.2185]} zoom={11} style={{ height: "100%", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {position && <Marker position={position} icon={customIcon} />}
              <MapClickHandler />
           </MapContainer>
        </div>
      )}
    </div>
  );
}

interface WizardData {
  moveType: string;
  homeSize: string;
  from: string;
  to: string;
  date: string;
  name: string;
  phone: string;
}

export default function MovingWizard() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [data, setData] = useState<WizardData>({
    moveType: "", homeSize: "", from: "", to: "", date: "", name: "", phone: "",
  });

  const totalSteps = 6;
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  const isHouseType = data.moveType === "house" || data.moveType === "office";

  const canProceed = () => {
    if (step === 1) return !!data.moveType;
    if (step === 2) return isHouseType ? !!data.homeSize : true;
    if (step === 3) return !!data.from;
    if (step === 4) return !!data.to;
    if (step === 5) return !!data.date;
    if (step === 6) return data.name.trim().length > 0 && data.phone.length >= 10;
    return false;
  };

  const next = () => {
    if (step === 1 && !isHouseType) { setStep(3); return; }
    if (step < totalSteps) setStep(s => s + 1);
    else submit();
  };

  const prev = () => {
    if (step === 3 && !isHouseType) { setStep(1); return; }
    if (step > 1) setStep(s => s - 1);
  };

  const submit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      const moveLabel = MOVE_TYPES.find(m => m.id === data.moveType)?.label ?? data.moveType;
      const sizeLabel = data.homeSize ? ` (${HOME_SIZES.find(s => s.id === data.homeSize)?.label ?? data.homeSize})` : "";
      const msg = `Hi! I am ${data.name}. I want to book your packers & movers service.

📦 Move Type: ${moveLabel}${sizeLabel}
📍 From: ${data.from}
📍 To: ${data.to}
📅 Date: ${data.date}
📱 Phone: +91 ${data.phone}

Please share a quote. Thank you!`;
      window.open(WHATSAPP_URL(msg), "_blank");
    }, 3500);
  };

  const stepTitles = [
    "What do you want to move?",
    "How much stuff?",
    "Pickup Location?",
    "Drop Location?",
    "When do you move?",
    "Your Contact Details",
  ];

  if (showSuccess) {
    return (
      <div style={{
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08)",
        overflow: "hidden",
        width: "100%",
        maxWidth: "480px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
      }}>
        <div style={{ position: "relative", width: "100%", height: "120px", marginBottom: "2rem" }}>
           <motion.div
             initial={{ x: "-100%" }}
             animate={{ x: "150%" }}
             transition={{ duration: 2.5, ease: "easeInOut" }}
             style={{ position: "absolute", top: "20px", left: 0, display: "flex", alignItems: "center", gap: "8px" }}
           >
             <Truck size={48} color="#1e4fa0" />
             <motion.div
                initial={{ y: -5, rotate: -5 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ repeat: Infinity, duration: 0.3, repeatType: "reverse" }}
             >
                <Package size={24} color="#f97316" />
             </motion.div>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 2.2, duration: 0.5 }}
             style={{ position: "absolute", right: "10%", top: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}
           >
             <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "#1e4fa0" }}>Manikanta</div>
             <div style={{ fontSize: "0.7rem", color: "#f97316", fontWeight: 700, letterSpacing: "1px" }}>PACKERS & MOVERS</div>
           </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 2.5, duration: 0.5 }}
           style={{ textAlign: "center" }}
        >
          <div style={{ color: "#16a34a", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
            <Check size={48} />
          </div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e4fa0", marginBottom: "0.5rem" }}>Your request is sent!</h3>
          <p style={{ color: "#64748b", lineHeight: 1.5 }}>
            Please wait until our team responds. Redirecting to WhatsApp...<br/>
            Thank you for choosing us!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08)",
      overflow: "hidden",
      width: "100%",
      maxWidth: "480px",
    }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1e4fa0, #1a3a6e)", padding: "1.25rem 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
          <div style={{ color: "white", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-family-display)" }}>
            Get Free Quote
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.25rem 0.75rem", color: "white", fontSize: "0.8rem", fontWeight: 600 }}>
            Step {step} of {totalSteps}
          </div>
        </div>
        {/* Progress Bar */}
        <div style={{ height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "999px", overflow: "hidden" }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ height: "100%", background: "#f97316", borderRadius: "999px" }}
          />
        </div>
        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginTop: "0.6rem" }}>
          {stepTitles[step - 1]}
        </div>
      </div>

      {/* Step Content */}
      <div style={{ padding: "1.5rem", minHeight: "240px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {step === 1 && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
                {MOVE_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setData(d => ({ ...d, moveType: type.id }))}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center",
                      gap: "0.5rem", padding: "0.875rem 0.5rem",
                      border: "2px solid",
                      borderColor: data.moveType === type.id ? "#1e4fa0" : "#e2e8f0",
                      borderRadius: "12px",
                      background: data.moveType === type.id ? "rgba(30,79,160,0.06)" : "transparent",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      color: data.moveType === type.id ? "#1e4fa0" : "#64748b",
                    }}
                  >
                    {type.icon}
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, textAlign: "center", lineHeight: 1.2 }}>{type.label}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && isHouseType && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
                {HOME_SIZES.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setData(d => ({ ...d, homeSize: size.id }))}
                    style={{
                      padding: "1rem 0.5rem",
                      border: "2px solid",
                      borderColor: data.homeSize === size.id ? "#1e4fa0" : "#e2e8f0",
                      borderRadius: "12px",
                      background: data.homeSize === size.id ? "rgba(30,79,160,0.06)" : "transparent",
                      cursor: "pointer",
                      fontWeight: 700, fontSize: "1rem",
                      color: data.homeSize === size.id ? "#1e4fa0" : "#334155",
                      transition: "all 0.2s",
                    }}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div>
                <LocationSelector 
                  value={data.from} 
                  onChange={(v) => setData(d => ({ ...d, from: v }))} 
                  placeholder="Enter pickup location or city..." 
                />
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.8rem", marginTop: "0.75rem" }}>
                  <MapPin size={14} />
                  Use map to drop a pin or type your location!
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <LocationSelector 
                  value={data.to} 
                  onChange={(v) => setData(d => ({ ...d, to: v }))} 
                  placeholder="Enter drop location or city..." 
                />
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.8rem", marginTop: "0.75rem" }}>
                  <MapPin size={14} />
                  We serve all cities across India.
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <input
                  type="date"
                  value={data.date}
                  onChange={(e) => setData(d => ({ ...d, date: e.target.value }))}
                  className="input-field"
                  min={new Date().toISOString().split("T")[0]}
                  style={{ marginBottom: "0.75rem" }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.8rem" }}>
                  <Calendar size={14} />
                  Need flexible dates? We'll work with you.
                </div>
              </div>
            )}

            {step === 6 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", border: "1.5px solid", borderColor: "#e2e8f0", borderRadius: "10px", overflow: "hidden", background: "#fff", transition: "border-color 0.2s" }}>
                  <div style={{ padding: "0.75rem", background: "#f8fafc", borderRight: "1.5px solid #e2e8f0", color: "#334155", flexShrink: 0 }}>
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData(d => ({ ...d, name: e.target.value }))}
                    placeholder="Your Full Name"
                    style={{ flex: 1, padding: "0.75rem 1rem", border: "none", outline: "none", fontSize: "0.9375rem", fontFamily: "var(--font-family-sans)" }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", border: "1.5px solid", borderColor: "#e2e8f0", borderRadius: "10px", overflow: "hidden", background: "#fff", transition: "border-color 0.2s" }}>
                  <div style={{ padding: "0.75rem 0.875rem", background: "#f8fafc", borderRight: "1.5px solid #e2e8f0", fontSize: "0.9rem", fontWeight: 600, color: "#334155", flexShrink: 0 }}>
                    +91
                  </div>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setData(d => ({ ...d, phone: v }));
                    }}
                    placeholder="Enter 10-digit number"
                    style={{ flex: 1, padding: "0.75rem 1rem", border: "none", outline: "none", fontSize: "0.9375rem", fontFamily: "var(--font-family-sans)" }}
                  />
                  {data.phone.length === 10 && (
                    <div style={{ padding: "0.75rem", color: "#16a34a" }}>
                      <Check size={18} />
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.8rem" }}>
                  <Phone size={14} />
                  We'll send quote details on WhatsApp — no spam.
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Buttons */}
      <div style={{ padding: "0 1.5rem 1.5rem", display: "flex", gap: "0.75rem" }}>
        {step > 1 && (
          <button
            onClick={prev}
            style={{
              display: "flex", alignItems: "center", gap: "0.375rem",
              padding: "0.75rem 1.25rem",
              border: "1.5px solid #e2e8f0",
              borderRadius: "999px",
              background: "transparent",
              color: "#64748b",
              fontWeight: 600, fontSize: "0.875rem",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <ChevronLeft size={16} />
            Back
          </button>
        )}
        <button
          onClick={next}
          disabled={!canProceed()}
          style={{
            flex: 1,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
            padding: "0.875rem",
            background: canProceed()
              ? step === totalSteps
                ? "linear-gradient(135deg, #25d366, #128c7e)"
                : "linear-gradient(135deg, #f97316, #ea580c)"
              : "#e2e8f0",
            borderRadius: "999px",
            border: "none",
            color: canProceed() ? "white" : "#94a3b8",
            fontWeight: 700, fontSize: "0.9375rem",
            cursor: canProceed() ? "pointer" : "not-allowed",
            transition: "all 0.2s",
            boxShadow: canProceed()
              ? step === totalSteps
                ? "0 6px 24px rgba(37,211,102,0.4)"
                : "0 6px 24px rgba(249,115,22,0.4)"
              : "none",
          }}
        >
          {step === totalSteps ? (
            <><MessageCircle size={18} /> Get Quote on WhatsApp</>
          ) : (
            <>Next Step <ChevronRight size={18} /></>
          )}
        </button>
      </div>
    </div>
  );
}

// MapPin import needed
function MapPin({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

