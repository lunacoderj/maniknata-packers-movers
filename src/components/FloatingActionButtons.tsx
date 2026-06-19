import { MessageCircle, Phone } from "lucide-react";
import { COMPANY, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "../data/company";

export default function FloatingActionButtons() {
  return (
    <div style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      zIndex: 9999,
    }}>
      <a
        href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px -4px rgba(37,211,102,0.5)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 36px -4px rgba(37,211,102,0.65)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 32px -4px rgba(37,211,102,0.5)";
        }}
      >
        <MessageCircle size={28} className="icon-vibrate" />
      </a>
      <a
        href={`tel:${COMPANY.phone}`}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--color-brand-orange), var(--color-brand-orange-dark))",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px -4px rgba(249,115,22,0.5)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 36px -4px rgba(249,115,22,0.65)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 32px -4px rgba(249,115,22,0.5)";
        }}
      >
        <Phone size={28} className="icon-ring" />
      </a>
    </div>
  );
}
