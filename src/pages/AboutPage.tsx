import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Clock, MapPin, Award, CheckCircle, ChevronRight, Truck, Users, Package } from "lucide-react";
import { COMPANY, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "../data/company";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const stats = [
    { icon: <Award size={28} />, value: `${COMPANY.experience} Years`, label: "Industry Experience" },
    { icon: <Users size={28} />, value: `${COMPANY.reviewsCount}+`, label: "Happy Families Moved" },
    { icon: <MapPin size={28} />, value: "Pan India", label: "Network Coverage" },
    { icon: <Shield size={28} />, value: "100%", label: "Safe Delivery Record" },
  ];

  return (
    <div style={{ paddingTop: "72px" }}>
      <Helmet>
        <title>About Us | Manikanta Packers & Movers</title>
        <meta name="description" content="Learn about Manikanta Packers & Movers, a trusted moving company with years of experience in house shifting, office relocation, car transport, and packing services." />
        <meta name="keywords" content="about packers and movers, reliable moving company, professional packers, best movers and packers, trusted relocation experts, packing moving shifting house office cars bikes few items whatever" />
      </Helmet>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #0f2557 0%, #1a3a6e 50%, #1e4fa0 100%)",
        padding: "4rem 1.5rem",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(249,115,22,0.15) 0%, transparent 70%)"
        }} />
        <div className="section-container" style={{ position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: "inline-block", background: "rgba(255,255,255,0.1)",
              padding: "0.4rem 1rem", borderRadius: "999px",
              fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em",
              marginBottom: "1rem", color: "var(--color-brand-orange)"
            }}>
              ABOUT US
            </div>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontFamily: "var(--font-family-display)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "1.5rem"
            }}>
              Moving Homes,<br/> Delivering <span className="gradient-text">Trust</span>
            </h1>
            <p style={{
              fontSize: "1.125rem", color: "rgba(255,255,255,0.85)",
              maxWidth: "600px", margin: "0 auto", lineHeight: 1.7
            }}>
              As {COMPANY.city}'s most reliable relocation experts, we've spent the last decade perfecting the art of stress-free moving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ background: "var(--color-surface-1)", borderBottom: "1px solid var(--color-surface-3)" }}>
        <div className="section-container" style={{ padding: "0 1.5rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                borderRight: i !== stats.length - 1 ? "1px solid var(--color-surface-3)" : "none"
              }}>
                <div style={{ color: "var(--color-brand-blue)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: "1.75rem", fontWeight: 900,
                  fontFamily: "var(--font-family-display)",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.25rem"
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <FadeIn>
              <div>
                <h2 style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)", fontFamily: "var(--font-family-display)",
                  fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "1.5rem", lineHeight: 1.2
                }}>
                  Our Story
                </h2>
                <div style={{ color: "var(--color-text-secondary)", fontSize: "1.0625rem", lineHeight: 1.8 }}>
                  <p style={{ marginBottom: "1.25rem" }}>
                    Founded in {COMPANY.city}, {COMPANY.name} started with a simple vision: to make shifting homes and offices a hassle-free, secure, and affordable experience for everyone. Over the years, we have grown from a small local moving team to a trusted, full-fledged relocation company serving all of India.
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    We understand that we aren't just moving boxes; we are moving your memories, your hard-earned assets, and your life. That's why our core philosophy revolves around extreme care, premium packaging, and absolute transparency.
                  </p>
                  <p>
                    Today, with over {COMPANY.experience} years of experience and thousands of successful relocations, our reputation speaks through the glowing reviews of our customers.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ position: "relative", padding: "1rem" }}>
                {/* Decorative bg */}
                <div style={{
                  position: "absolute", top: 0, right: 0, bottom: "2rem", left: "2rem",
                  background: "var(--color-brand-blue)", opacity: 0.08, borderRadius: "24px", zIndex: -1
                }} />
                
                <img 
                  src="/images/trucks/Screenshot 2026-06-19 035912.png" 
                  alt="Our Moving Trucks" 
                  style={{
                    width: "100%", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    objectFit: "cover", aspectRatio: "4/3"
                  }}
                />
                
                {/* Floating card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute", bottom: "-1.5rem", left: "-1.5rem",
                    background: "white", padding: "1.25rem 1.5rem", borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: "1rem"
                  }}
                >
                  <div style={{ background: "rgba(22, 163, 74, 0.15)", color: "#16a34a", padding: "0.75rem", borderRadius: "50%" }}>
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--color-text-primary)" }}>100% Secure</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>Zero Damage Guarantee</div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding" style={{ background: "var(--color-surface-1)" }}>
        <div className="section-container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">OUR CORE VALUES</div>
              <h2 className="section-title">What Drives Us</h2>
            </div>
          </FadeIn>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem"
          }}>
            {[
              { icon: <Shield size={32} />, title: "Safety First", desc: "We treat your belongings like our own. From multi-layer packing to secure loading, safety is never compromised." },
              { icon: <Clock size={32} />, title: "Punctuality", desc: "We value your time. Our team arrives strictly on schedule and ensures deliveries happen on the promised date." },
              { icon: <Package size={32} />, title: "Quality Packing", desc: "Using only premium materials—bubble wraps, corrugated sheets, and stretch films—to prevent any transit damage." },
              { icon: <Truck size={32} />, title: "Transparent Pricing", desc: "No hidden costs. What we quote during our free site visit is exactly what you pay." }
            ].map((val, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{
                    width: "60px", height: "60px", borderRadius: "14px",
                    background: "rgba(30,79,160,0.08)", color: "var(--color-brand-blue)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem"
                  }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--color-text-primary)" }}>{val.title}</h3>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, flex: 1 }}>{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)", fontFamily: "var(--font-family-display)",
            fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "1.5rem"
          }}>
            Planning a Relocation?
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.125rem", marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Contact us today for a free home survey and get a customized moving plan that fits your budget.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Chat on WhatsApp <ChevronRight size={18} />
            </a>
            <Link to="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
