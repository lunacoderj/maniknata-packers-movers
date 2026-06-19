import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle } from "lucide-react";
import { SERVICES } from "../data/services";
import { WHATSAPP_URL } from "../data/company";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Our Services - Manikanta Packers & Movers | House & Office Shifting</title>
        <meta name="description" content="Explore our complete moving solutions including house shifting, office relocation, car transport, bike shifting, and packing services across India." />
        <meta name="keywords" content="packers and movers services, house shifting services, office relocation, car shifting, bike transport, luggage shifting, few items moving, packing services, loading and unloading, moving company, best movers, safe shifting" />
      </Helmet>
      {/* Page Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f2557, #1a3a6e)",
        padding: "7rem 1.5rem 4rem",
        textAlign: "center",
        color: "white",
      }}>
        <div className="section-container">
          <div className="section-label" style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.35)", margin: "0 auto 1rem" }}>
            🚛 Our Services
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", fontFamily: "var(--font-family-display)", fontWeight: 900 }}>
            Complete Moving Solutions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "0.875rem", fontSize: "1.0625rem", maxWidth: "540px", margin: "0.875rem auto 0" }}>
            From single items to full household moves — we've got you covered across India.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="section-padding" style={{ background: "var(--color-surface-1)" }}>
        <div className="section-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {SERVICES.map((service, i) => (
              <FadeIn key={service.id} delay={0.05}>
                <div id={service.slug} style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                  gap: "3rem",
                  alignItems: "center",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                }} className="service-detail-grid">
                  {/* Image */}
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }} className="service-img-col">
                    <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
                      <img src={service.image} alt={service.title} style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }} />
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{service.icon}</div>
                    <h2 style={{ fontSize: "1.875rem", fontFamily: "var(--font-family-display)", fontWeight: 800, marginBottom: "0.875rem" }}>{service.title}</h2>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>{service.longDescription}</p>
                    <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem", marginBottom: "2rem" }}>
                      {service.features.map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                          <CheckCircle size={15} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL(`Hi! I need ${service.title} services. Please share details and a quote.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <MessageCircle size={18} /> Get Quote for {service.shortTitle}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
          .service-img-col, .service-detail-grid > div { order: unset !important; }
        }
      `}</style>
    </>
  );
}
