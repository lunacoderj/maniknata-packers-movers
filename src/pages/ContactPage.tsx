import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import MovingWizard from "../components/MovingWizard";
import { COMPANY, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "../data/company";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Moving Quote</title>
        <meta name="description" content="Ready to move? Contact us for a free estimate on your household or office relocation. Reach out via WhatsApp, phone, or visit our office." />
        <meta name="keywords" content="contact packers and movers, moving quote, shifting estimate, house shifting contact, packing moving shifting house office cars bikes few items whatever" />
      </Helmet>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f2557, #1a3a6e)", padding: "7rem 1.5rem 4rem", textAlign: "center", color: "white" }}>
        <div className="section-container">
          <div className="section-label" style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.35)", margin: "0 auto 1rem" }}>
            📞 Contact Us
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", fontFamily: "var(--font-family-display)", fontWeight: 900 }}>
            Let's Plan Your Move
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "0.875rem", fontSize: "1.0625rem", maxWidth: "540px", margin: "0.875rem auto 0" }}>
            Get in touch for a free estimate, to schedule a survey, or for any queries.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ background: "var(--color-surface-1)" }}>
        <div className="section-container">
          <div style={{
            display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "4rem", alignItems: "start"
          }} className="contact-grid">
            
            {/* Contact Info */}
            <div>
              <FadeIn>
                <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-family-display)", fontWeight: 800, marginBottom: "1.5rem" }}>
                  Get In Touch
                </h2>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
                  Our support team is available 24/7. Whether you need an urgent move or want to plan weeks ahead, we are just a call or message away.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {/* Phone */}
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px", background: "rgba(30,79,160,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-blue)", flexShrink: 0
                    }}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Phone</div>
                      <a href={`tel:${COMPANY.phone}`} style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-text)", textDecoration: "none" }}>{COMPANY.phoneFormatted}</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px", background: "rgba(30,79,160,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-blue)", flexShrink: 0
                    }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</div>
                      <a href={`mailto:${COMPANY.email}`} style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-text)", textDecoration: "none" }}>{COMPANY.email}</a>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px", background: "rgba(30,79,160,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-blue)", flexShrink: 0
                    }}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Office Address</div>
                      <div style={{ fontSize: "1rem", color: "var(--color-text)", lineHeight: 1.6 }}>{COMPANY.address}</div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px", background: "rgba(30,79,160,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-blue)", flexShrink: 0
                    }}>
                      <Clock size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Working Hours</div>
                      <div style={{ fontSize: "1rem", color: "var(--color-text)", lineHeight: 1.6 }}>24/7 Service Available</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "3rem" }}>
                  <a href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ width: "100%", justifyContent: "center" }}>
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Moving Wizard */}
            <div>
              <FadeIn delay={0.15}>
                <div style={{ background: "white", padding: "2rem", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", border: "1px solid rgba(226,232,240,0.8)" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", textAlign: "center" }}>Request a Callback</h3>
                  <MovingWizard />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height: "400px", width: "100%", background: "#e2e8f0" }}>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.name + ", " + COMPANY.address)}&t=&z=16&ie=UTF8&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Manikanta Packers & Movers Location"
        ></iframe>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
