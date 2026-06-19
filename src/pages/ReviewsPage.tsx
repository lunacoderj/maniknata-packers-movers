import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import { REVIEWS } from "../data/reviews";
import { COMPANY, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "../data/company";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay }}>
      {children}
    </motion.div>
  );
}

export default function ReviewsPage() {
  const [filter, setFilter] = useState<number | "all">("all");
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = filter === "all" ? REVIEWS : REVIEWS.filter(r => r.stars === filter);
  const displayed = filtered.slice(0, visibleCount);

  return (
    <>
      <Helmet>
        <title>Customer Reviews & Testimonials | Packers and Movers</title>
        <meta name="description" content="Read real customer experiences with our moving services. Discover why hundreds of families trust us for their stress-free relocations." />
        <meta name="keywords" content="packers and movers reviews, customer testimonials, shifting feedback, best movers ratings, packing moving shifting house office cars bikes few items whatever" />
      </Helmet>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f2557, #1a3a6e)", padding: "7rem 1.5rem 4rem", textAlign: "center", color: "white" }}>
        <div className="section-container">
          <div className="section-label" style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.35)", margin: "0 auto 1rem" }}>
            ⭐ Real Customer Experiences
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", fontFamily: "var(--font-family-display)", fontWeight: 900 }}>
            What Our Customers Say
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
            {[1, 2, 3, 4, 5].map(s => (
              <Star key={s} size={26} fill={s <= 4 ? "#fb923c" : "none"} stroke="#fb923c" strokeWidth={1.5} />
            ))}
            <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "white", marginLeft: "0.25rem" }}>
              {COMPANY.rating} / 5 from {COMPANY.reviewsCount}+ reviews
            </span>
          </div>
        </div>
      </div>

      <section className="section-padding" style={{ background: "var(--color-surface-1)" }}>
        <div className="section-container">
          {/* Filters */}
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center", marginBottom: "3rem" }}>
              <button
                onClick={() => { setFilter("all"); setVisibleCount(9); }}
                style={{
                  padding: "0.5rem 1.25rem", borderRadius: "999px",
                  border: "1.5px solid", borderColor: filter === "all" ? "#1e4fa0" : "#e2e8f0",
                  background: filter === "all" ? "#1e4fa0" : "white",
                  color: filter === "all" ? "white" : "#334155",
                  fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s",
                }}
              >
                All Reviews
              </button>
              {[5, 4, 3, 2, 1].map(stars => (
                <button
                  key={stars}
                  onClick={() => { setFilter(stars); setVisibleCount(9); }}
                  style={{
                    padding: "0.5rem 1.25rem", borderRadius: "999px",
                    border: "1.5px solid", borderColor: filter === stars ? "#1e4fa0" : "#e2e8f0",
                    background: filter === stars ? "#1e4fa0" : "white",
                    color: filter === stars ? "white" : "#334155",
                    fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s",
                    display: "flex", alignItems: "center", gap: "0.25rem"
                  }}
                >
                  {stars} <Star size={14} fill={filter === stars ? "white" : "#64748b"} stroke="none" />
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            <AnimatePresence>
              {displayed.map((r, i) => (
                <motion.div
                  key={r.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (i % 9) * 0.04 }}
                  style={{
                    background: "white", borderRadius: "16px", padding: "1.5rem",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)", border: "1px solid rgba(226,232,240,0.7)",
                    display: "flex", flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1rem" }}>
                    <img
                      src={r.avatar} alt={r.name}
                      style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=1e4fa0&color=fff&size=44`;
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem" }}>{r.name}</div>
                      <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
                        {[1, 2, 3, 4, 5].map(s => (
                          <Star key={s} size={13} fill={s <= r.stars ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth={1.5} />
                        ))}
                      </div>
                    </div>
                    <div style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{r.date}</div>
                  </div>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}>
                    "{r.text}"
                  </p>
                  {r.isLocalGuide && (
                    <div style={{ marginTop: "0.75rem" }}>
                      <span className="badge badge-blue">📍 Local Guide</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          {visibleCount < filtered.length && (
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <button
                onClick={() => setVisibleCount(v => v + 9)}
                className="btn-secondary"
              >
                Load More Reviews
              </button>
            </div>
          )}

          {/* CTA */}
          <FadeIn>
            <div style={{
              marginTop: "5rem", background: "white", padding: "3rem", borderRadius: "20px",
              textAlign: "center", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(226,232,240,0.8)"
            }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>Ready to join our happy customers?</h2>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Experience the stress-free move that everyone is talking about. Contact us today for a free estimate.
              </p>
              <a href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} /> Get Your Free Quote
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
