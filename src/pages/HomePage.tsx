import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Phone, MessageCircle, Star, Shield, Clock, Award, CheckCircle,
  ChevronRight, MapPin
} from "lucide-react";
import MovingWizard from "../components/MovingWizard";
import { COMPANY, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "../data/company";
import { SERVICES } from "../data/services";
import { REVIEWS } from "../data/reviews";
import { processVideos } from "../data/videos";

/* ─────────────────────── helpers ─────────────────────── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.1, 0.2, 0.2, 0.9] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────── Hero ─────────────────────── */
function Hero() {
  return (
    <section
      className="gradient-hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* bg decorative blobs */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse 60% 60% at 80% 40%, rgba(249,115,22,0.12) 0%, transparent 70%),
                     radial-gradient(ellipse 50% 50% at 20% 70%, rgba(37,99,235,0.2) 0%, transparent 60%)`,
      }} />

      <div className="section-container" style={{ width: "100%", padding: "4rem 1.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: "3rem",
          alignItems: "center",
        }}
          className="hero-grid"
        >
          {/* Left – copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(249,115,22,0.18)", border: "1px solid rgba(249,115,22,0.35)",
                borderRadius: "999px", padding: "0.375rem 1rem",
                color: "#fb923c", fontSize: "0.8125rem", fontWeight: 700,
                letterSpacing: "0.05em", textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}>
                <Star size={13} fill="currentColor" />
                {COMPANY.rating}★ — {COMPANY.reviewsCount}+ Happy Customers in Vizag
              </div>

              <h1 style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                fontFamily: "var(--font-family-display)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}>
                Vizag's Most Trusted{" "}
                <span className="gradient-text">Packers & Movers</span>
              </h1>

              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.125rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "520px" }}>
                Professional relocation within Visakhapatnam and all across India — household, office, vehicle transport with door-to-door service and zero damage guarantee.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                {["✅ 10+ Years Experience", "✅ Pan-India Coverage", "✅ Insurance Included", "✅ On-Time Guaranteed"].map(f => (
                  <span key={f} style={{
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "999px", padding: "0.35rem 0.875rem",
                    color: "rgba(255,255,255,0.9)", fontSize: "0.8125rem", fontWeight: 600,
                  }}>{f}</span>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle size={20} /> Get Free Quote
                </a>
                <a href={`tel:${COMPANY.phone}`} className="btn-secondary-white">
                  <Phone size={18} /> {COMPANY.phoneFormatted}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right – Moving Wizard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <MovingWizard />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────── Trust Bar ─────────────────────── */
function TrustBar() {
  const stats = [
    { icon: <Star size={22} fill="#fff" />, value: `${COMPANY.rating}★`, label: "Google Rating" },
    { icon: <Award size={22} />, value: `${COMPANY.reviewsCount}+`, label: "Verified Reviews" },
    { icon: <Clock size={22} />, value: `${COMPANY.experience}`, label: "Years Experience" },
    { icon: <MapPin size={22} />, value: "Pan India", label: "All Cities Covered" },
    { icon: <Shield size={22} />, value: "100%", label: "Insured Goods" },
  ];

  return (
    <div className="trust-bar">
      <div className="section-container" style={{ padding: "0 1.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "0",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "1.5rem 1rem",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.25)" : "none",
              color: "white", textAlign: "center",
            }}>
              <div style={{ marginBottom: "0.5rem", opacity: 0.9 }}>{s.icon}</div>
              <div style={{ fontWeight: 900, fontSize: "1.375rem", fontFamily: "var(--font-family-display)" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", opacity: 0.85, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Services Grid ─────────────────────── */
function ServicesGrid() {
  return (
    <section className="section-padding" style={{ background: "var(--color-surface-1)" }}>
      <div className="section-container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">🚛 What We Do</div>
            <h2 className="section-title">Complete Moving Solutions</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              From a single bike to an entire household or office — we handle every type of move with care and professionalism.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.07}>
              <Link to={`/services#${service.slug}`} style={{ display: "block" }}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{
                      position: "absolute", top: "1rem", left: "1rem",
                      background: "white", borderRadius: "10px", padding: "0.5rem 0.75rem",
                      fontSize: "1.375rem", boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    }}>
                      {service.icon}
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.5rem" }}>{service.title}</h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "1rem", lineHeight: 1.65 }}>
                      {service.description}
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      {service.features.slice(0, 3).map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8375rem", color: "var(--color-text-secondary)" }}>
                          <CheckCircle size={14} color="#16a34a" style={{ flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--color-brand-blue)", fontWeight: 700, fontSize: "0.9rem" }}>
                      Know more <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Why Choose Us ─────────────────────── */
function WhyUs() {
  const reasons = [
    { icon: "🛡️", title: "Full Insurance Coverage", desc: "All your goods are insured during transit. Zero liability to you." },
    { icon: "⏱️", title: "On-Time Delivery", desc: "We commit to your schedule and deliver on the promised date." },
    { icon: "📦", title: "Premium Packing", desc: "High-quality bubble wrap, corrugated boxes, and stretch film." },
    { icon: "🗺️", title: "Pan-India Network", desc: "Serving all major cities and towns across India seamlessly." },
    { icon: "📞", title: "24/7 Support", desc: "Our team is always reachable — before, during, and after the move." },
    { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. Free site visits and detailed quotations." },
  ];

  return (
    <section className="section-padding" style={{ background: "white" }}>
      <div className="section-container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "4rem", alignItems: "center" }} className="why-us-grid">
          <FadeIn>
            <div>
              <div className="section-label">⭐ Why Choose Us</div>
              <h2 className="section-title">Vizag's #1 Packers & Movers</h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
                With over {COMPANY.experience} years of experience and {COMPANY.reviewsCount}+ verified reviews, Manikanta Packers & Movers is the most trusted name in Visakhapatnam. We don't just move boxes — we move your life with care.
              </p>
              <a href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} /> Get Instant Quote
              </a>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.06}>
                <div style={{
                  padding: "1.25rem",
                  background: "var(--color-surface-1)",
                  borderRadius: "14px",
                  border: "1px solid var(--color-surface-3)",
                  transition: "box-shadow 0.25s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,79,160,0.12)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div style={{ fontSize: "1.875rem", marginBottom: "0.625rem" }}>{r.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.375rem" }}>{r.title}</div>
                  <div style={{ color: "var(--color-text-muted)", fontSize: "0.8375rem", lineHeight: 1.6 }}>{r.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .why-us-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ReviewsSection() {
  const r1 = REVIEWS.slice(0, 34);
  const row1 = [...r1, ...r1];
  
  const r2 = REVIEWS.slice(34, 68);
  const row2 = [...r2, ...r2];
  
  const r3 = [...REVIEWS.slice(68, 100), ...REVIEWS.slice(0, 2)];
  const row3 = [...r3, ...r3];

  const ReviewCard = ({ r, i, rowIndex }: { r: any, i: number, rowIndex: number }) => {
    let borderRadius = "16px";
    if (rowIndex === 1) borderRadius = "32px 8px 32px 8px";
    else if (rowIndex === 2) borderRadius = "8px 32px 8px 32px";
    else if (rowIndex === 3) borderRadius = "24px 24px 0px 24px";

    return (
      <motion.div 
        key={r.id + "-" + i}
        whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
        className="review-card"
        style={{
          flexShrink: 0,
          background: "white",
          borderRadius: borderRadius,
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          border: "1px solid rgba(226,232,240,0.7)",
          display: "flex", flexDirection: "column",
          cursor: "pointer"
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1rem" }}>
          <img
            src={r.avatar}
            alt={r.name}
            style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=1e4fa0&color=fff&size=44`;
            }}
          />
          <div>
            <div className="review-name" style={{ fontWeight: 700 }}>{r.name}</div>
            <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={13} fill={s <= r.stars ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth={1.5} />
              ))}
            </div>
          </div>
          <div style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{r.date}</div>
        </div>
        <p className="review-text" style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, flex: 1 }}>
          {r.text.length > 180 ? r.text.slice(0, 180) + "…" : r.text}
        </p>
        {r.isLocalGuide && (
          <div style={{ marginTop: "0.75rem" }}>
            <span className="badge badge-blue">📍 Local Guide</span>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="section-padding" style={{ background: "var(--color-surface-1)", overflow: "hidden" }}>
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          padding-right: 1.5rem;
          width: max-content;
        }
        .marquee-left {
          animation: marqueeLeft 180s linear infinite;
        }
        .marquee-right {
          animation: marqueeRight 180s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .review-card {
          width: 350px;
          padding: 1.5rem;
        }
        .review-text {
          font-size: 0.875rem;
        }
        .review-name {
          font-size: 0.9375rem;
        }
        @media (max-width: 768px) {
          .marquee-track {
            gap: 1rem !important;
            padding-right: 1rem !important;
          }
          .review-card {
            width: 230px !important;
            padding: 1rem !important;
          }
          .review-text {
            font-size: 0.75rem !important;
            line-height: 1.5 !important;
          }
          .review-name {
            font-size: 0.8125rem !important;
          }
        }
      `}</style>
      <div className="section-container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">💬 Customer Reviews</div>
            <h2 className="section-title">What Our Customers Say</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={22} fill={s <= 4 ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth={1.5} />
              ))}
              <span style={{ fontWeight: 700, fontSize: "1.125rem", color: "#334155", marginLeft: "0.25rem" }}>
                {COMPANY.rating} / 5 from {COMPANY.reviewsCount}+ reviews
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      <div style={{ position: "relative", width: "100%", overflow: "hidden", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Left and Right fades for the marquee */}
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--color-surface-1), transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--color-surface-1), transparent)", zIndex: 10, pointerEvents: "none" }} />

        {/* Row 1 (Moves Left) */}
        <div className="marquee-track marquee-left">
          {row1.map((r, i) => <ReviewCard key={`r1-${i}`} r={r} i={i} rowIndex={1} />)}
        </div>

        {/* Row 2 (Moves Right) */}
        <div className="marquee-track marquee-right">
          {row2.map((r, i) => <ReviewCard key={`r2-${i}`} r={r} i={i} rowIndex={2} />)}
        </div>

        {/* Row 3 (Moves Left) */}
        <div className="marquee-track marquee-left">
          {row3.map((r, i) => <ReviewCard key={`r3-${i}`} r={r} i={i} rowIndex={3} />)}
        </div>
      </div>

      <div className="section-container">
        <FadeIn>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/reviews" className="btn-secondary">
              See All {COMPANY.reviewsCount}+ Reviews <ChevronRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────── Gallery Teaser ─────────────────────── */
function GalleryTeaser() {
  const galleryItems = [
    { src: "/images/loading/Screenshot 2026-06-19 040816.png", title: "Careful Loading", subtitle: "Our team ensuring zero damage" },
    { src: "/images/packing/Screenshot 2026-06-19 041941.png", title: "Premium Packing", subtitle: "Multi-layer protection" },
    { src: "/images/trucks/Screenshot 2026-06-19 035912.png", title: "Our Fleet", subtitle: "Clean & spacious vehicles" },
    { src: "/images/bikes/Screenshot 2026-06-19 040403.png", title: "Bike Transport", subtitle: "Scratch-free delivery" },
    { src: "/images/cars/Screenshot 2026-06-19 040309.png", title: "Car Carriers", subtitle: "Safe transport across India" },
    { src: "/images/travelling/Screenshot 2026-06-19 035952.png", title: "On Time Delivery", subtitle: "GPS tracking enabled" },
  ];

  return (
    <section className="section-padding" style={{ background: "white" }}>
      <div className="section-container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">📸 Our Work</div>
            <h2 className="section-title">See Our Moves in Action</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Real photos from real moves. Hover over each image for details.
            </p>
          </div>
        </FadeIn>

        <div className="bento-gallery">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className={`bento-item bento-item-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="bento-image-wrapper">
                <img
                  src={item.src}
                  alt={item.title}
                  className="bento-image"
                  loading="lazy"
                />
                <div className="bento-overlay">
                  <div className="bento-content">
                    <h3 className="bento-title">{item.title}</h3>
                    <p className="bento-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/gallery" className="btn-secondary">
              View Full Gallery <ChevronRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .bento-gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 240px);
          gap: 1.25rem;
        }
        
        .bento-item {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          background: var(--color-surface-2);
        }
        
        .bento-item-0 { grid-column: span 2; grid-row: span 2; }
        .bento-item-1 { grid-column: span 2; grid-row: span 1; }
        .bento-item-2 { grid-column: span 1; grid-row: span 1; }
        .bento-item-3 { grid-column: span 1; grid-row: span 1; }
        .bento-item-4 { grid-column: span 2; grid-row: span 1; }
        .bento-item-5 { grid-column: span 2; grid-row: span 1; }
        
        .bento-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .bento-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .bento-item:hover .bento-image {
          transform: scale(1.06);
        }
        
        .bento-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 1.75rem;
        }
        
        .bento-item:hover .bento-overlay {
          opacity: 1;
        }
        
        .bento-content {
          transform: translateY(15px);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .bento-item:hover .bento-content {
          transform: translateY(0);
        }
        
        .bento-title {
          color: white;
          font-size: 1.375rem;
          font-weight: 800;
          margin-bottom: 0.35rem;
          font-family: var(--font-family-display);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .bento-subtitle {
          color: rgba(255,255,255,0.85);
          font-size: 0.9375rem;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .bento-gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-auto-rows: 200px;
          }
          .bento-item-0 { grid-column: span 2; grid-row: span 2; }
          .bento-item-1 { grid-column: span 2; grid-row: span 1; }
          .bento-item-2 { grid-column: span 1; grid-row: span 1; }
          .bento-item-3 { grid-column: span 1; grid-row: span 1; }
          .bento-item-4 { grid-column: span 2; grid-row: span 1; }
          .bento-item-5 { grid-column: span 2; grid-row: span 1; }
        }

        @media (max-width: 600px) {
          .bento-gallery {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .bento-item {
            height: 240px;
          }
          .bento-item-0 { height: 320px; }
          
          /* Always show overlays on mobile */
          .bento-overlay {
            opacity: 1;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
            padding: 1.25rem;
          }
          .bento-content {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────── Process Videos ─────────────────────── */
function ProcessVideos() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="section-padding" style={{ background: "linear-gradient(135deg, #0a1128 0%, #162a52 100%)", color: "white", overflow: "hidden" }}>
      <div className="section-container">
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>🎬 Process in Action</div>
            <h2 className="section-title" style={{ color: "white" }}>See How We Work</h2>
            <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(255,255,255,0.7)" }}>
              Real footage of our expert team packing, loading, and transporting your goods with utmost care.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: "flex",
          height: "60vh",
          minHeight: "450px",
          maxHeight: "700px",
          gap: "0.75rem",
          width: "100%",
        }}>
          {processVideos.map((video, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={video.id}
                onMouseEnter={() => setExpandedIndex(i)}
                onClick={() => setExpandedIndex(i)}
                initial={false}
                animate={{
                  flex: isExpanded ? 4 : 1,
                  opacity: isExpanded ? 1 : 0.6,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#000",
                  boxShadow: isExpanded ? "0 10px 30px rgba(0,0,0,0.5)" : "none",
                }}
              >
                <video
                  src={video.url}
                  title={video.title}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: isExpanded ? "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)" : "rgba(0,0,0,0.4)",
                  transition: "background 0.5s ease"
                }} />
                
                <motion.div
                  animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                  }}
                >
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "var(--color-brand-orange)", color: "white",
                    padding: "0.25rem 0.75rem", borderRadius: "999px",
                    fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.05em", marginBottom: "0.5rem"
                  }}>
                    Step {i + 1}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "white", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    {video.title}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Final CTA ─────────────────────── */
function FinalCTA() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0f2557 0%, #1a3a6e 50%, #1e4fa0 100%)",
      padding: "5rem 1.5rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(249,115,22,0.15) 0%, transparent 60%)",
      }} />
      <div className="section-container" style={{ position: "relative" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.12)", borderRadius: "999px", padding: "0.4rem 1rem", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
              📦 Free Packing Estimate
            </span>
            <span style={{ background: "rgba(255,255,255,0.12)", borderRadius: "999px", padding: "0.4rem 1rem", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
              ⚡ 5-Minute Response
            </span>
            <span style={{ background: "rgba(255,255,255,0.12)", borderRadius: "999px", padding: "0.4rem 1rem", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
              🚛 Same-Day Availability
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.875rem, 5vw, 3rem)",
            color: "white",
            fontFamily: "var(--font-family-display)",
            fontWeight: 900,
            marginBottom: "1rem",
          }}>
            Ready to Move? Let's Get Started!
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            Chat with us on WhatsApp for a free, no-obligation quote. We'll respond within 5 minutes!
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <a href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem" }}>
              <MessageCircle size={22} /> WhatsApp for Free Quote
            </a>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary-white" style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem" }}>
              <Phone size={20} /> Call Now
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────── Page ─────────────────────── */
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Top Packers and Movers in India | Safe & Stress-Free Relocation</title>
        <meta name="description" content="Looking for reliable packers and movers? We provide expert household and office relocation, car shifting, bike transport, and few items moving services across India with 100% safety and transparency. Get a free quote today!" />
        <meta name="keywords" content="packers and movers, packers & movers, movers and packers, shifting services, house shifting, office relocation, car transport, bike transport, local shifting, domestic shifting, intercity moving, few items shifting, best packers and movers, safe relocation, packing and moving, house shifting services, vehicle transport, furniture shifting, reliable packers" />
      </Helmet>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <ReviewsSection />
      <GalleryTeaser />
      <ProcessVideos />
      <FinalCTA />
    </>
  );
}
