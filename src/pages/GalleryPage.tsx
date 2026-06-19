import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MessageCircle } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "../data/gallery";
import { WHATSAPP_URL } from "../data/company";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay }}>
      {children}
    </motion.div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === active);

  return (
    <>
      <Helmet>
        <title>Photo Gallery - Manikanta Packers & Movers</title>
        <meta name="description" content="View our photo gallery of real moves. See how Manikanta Packers & Movers handle your precious belongings with care during packing and transit." />
        <meta name="keywords" content="packers and movers gallery, shifting photos, moving team in action, packing moving shifting house office cars bikes few items whatever" />
      </Helmet>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f2557, #1a3a6e)", padding: "7rem 1.5rem 4rem", textAlign: "center", color: "white" }}>
        <div className="section-container">
          <div className="section-label" style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.35)", margin: "0 auto 1rem" }}>
            📸 Photo Gallery
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", fontFamily: "var(--font-family-display)", fontWeight: 900 }}>
            Our Work in Pictures
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "0.875rem", fontSize: "1.0625rem", maxWidth: "500px", margin: "0.875rem auto 0" }}>
            Real photos from real moves — see how we handle your precious belongings with care.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ background: "var(--color-surface-1)" }}>
        <div className="section-container">
          {/* Filter Pills */}
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center", marginBottom: "2.5rem" }}>
              {GALLERY_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "999px",
                    border: "1.5px solid",
                    borderColor: active === cat.id ? "#1e4fa0" : "#e2e8f0",
                    background: active === cat.id ? "#1e4fa0" : "white",
                    color: active === cat.id ? "white" : "#334155",
                    fontWeight: 600, fontSize: "0.875rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  style={{ borderRadius: "14px", overflow: "hidden", cursor: "zoom-in", position: "relative", background: "#f1f5f9" }}
                  onClick={() => setLightbox(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block", transition: "transform 0.35s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{
                    position: "absolute", bottom: "0", left: "0", right: "0",
                    background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                    padding: "1.5rem 0.875rem 0.75rem",
                  }}>
                    <span style={{
                      background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)",
                      borderRadius: "999px", padding: "0.2rem 0.625rem",
                      color: "white", fontSize: "0.75rem", fontWeight: 600,
                    }}>
                      {item.categoryLabel}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <FadeIn>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "1.25rem" }}>
                Liked what you saw? Let's plan your move!
              </p>
              <a
                href={WHATSAPP_URL("Hi! I saw your gallery and would like a quote for my move.")}
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} /> Get a Free Quote
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.92)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "2rem", cursor: "zoom-out",
            }}
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: "12px" }}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: "1.5rem", right: "1.5rem",
                background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%",
                width: "44px", height: "44px", color: "white", cursor: "pointer",
                fontSize: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
