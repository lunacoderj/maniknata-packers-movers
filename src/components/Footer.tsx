import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Mail, Star, Shield, Clock, Award } from "lucide-react";
import { COMPANY, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "../data/company";

const QUICK_LINKS = [
  { href: "/services", label: "Our Services" },
  { href: "/gallery", label: "Photo Gallery" },
  { href: "/reviews", label: "Customer Reviews" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

const SERVICE_LINKS = [
  { href: "/services/house-shifting", label: "House Shifting" },
  { href: "/services/office-relocation", label: "Office Relocation" },
  { href: "/services/bike-transport", label: "Bike Transport" },
  { href: "/services/car-transport", label: "Car Transport" },
  { href: "/services/packing-services", label: "Packing Services" },
  { href: "/services/interstate-transport", label: "Interstate Moving" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f1f45", color: "white" }}>
      {/* Trust Strip */}
      <div style={{ background: "linear-gradient(135deg, #1e4fa0, #1a3a6e)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: <Star size={20} />, title: "4.4★ Rated", sub: "433+ Google Reviews" },
              { icon: <Shield size={20} />, title: "Insured Goods", sub: "Full Transit Insurance" },
              { icon: <Clock size={20} />, title: "10+ Years", sub: "Trusted in Vizag" },
              { icon: <Award size={20} />, title: "Pan India", sub: "All-India Coverage" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{ color: "#f97316", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container" style={{ padding: "3.5rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                width: "44px", height: "44px",
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.25rem",
              }}>
                🚛
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.125rem", fontFamily: "var(--font-family-display)" }}>Manikanta</div>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.06em", color: "#f97316", fontWeight: 600 }}>PACKERS & MOVERS</div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Trusted packers & movers in Visakhapatnam serving all of India with professional, safe, and on-time relocation services.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href={`tel:${COMPANY.phone}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
                <Phone size={15} color="#f97316" />
                {COMPANY.phoneFormatted}
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                <MapPin size={15} color="#f97316" style={{ flexShrink: 0, marginTop: "2px" }} />
                {COMPANY.address}
              </div>
              <a href={`mailto:${COMPANY.email}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
                <Mail size={15} color="#f97316" />
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", color: "white" }}>Quick Links</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#f97316"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
                >
                  → {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", color: "white" }}>Our Services</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#f97316"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
                >
                  → {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", color: "white" }}>Get a Free Quote</h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
              Planning a move? Get an instant quote on WhatsApp. We respond within 5 minutes!
            </p>
            <a
              href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-secondary-white"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>
        </div>

        <div style={{
          marginTop: "3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.75rem",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Manikanta Packers & Movers. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
            Serving Visakhapatnam & All India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
