import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Plus, Minus, MessageCircle, Phone, Search, HelpCircle, Truck, Shield, Map, CreditCard } from "lucide-react";
import { FAQS, FAQ_CATEGORIES } from "../data/faqs";
import { COMPANY, WHATSAPP_URL } from "../data/company";

function FadeIn({ children, delay = 0, y = 20 }: { children: React.ReactNode; delay?: number, y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay }}>
      {children}
    </motion.div>
  );
}

const getCategoryIcon = (cat: string) => {
  switch (cat) {
    case "Pricing": return <CreditCard size={18} />;
    case "Process": return <Truck size={18} />;
    case "Safety": return <Shield size={18} />;
    case "Coverage": return <Map size={18} />;
    default: return <HelpCircle size={18} />;
  }
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = useMemo(() => {
    let result = FAQS;
    if (activeCategory !== "All") {
      result = result.filter(f => f.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>FAQ & Help Center - Manikanta Packers & Movers</title>
        <meta name="description" content="Find answers to frequently asked questions about moving, packing, pricing, and insurance with Manikanta Packers & Movers." />
        <meta name="keywords" content="packers and movers FAQ, moving questions, shifting queries, house shifting cost, packing moving shifting house office cars bikes few items whatever" />
      </Helmet>
      {/* Dynamic Header */}
      <div style={{ 
        background: "linear-gradient(135deg, #050b14 0%, #0a1931 50%, #152b52 100%)", 
        padding: "8rem 1.5rem 5rem", 
        textAlign: "center", 
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(circle at 50% 100%, rgba(37,99,235,0.15) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />
        <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div style={{ 
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              padding: "0.5rem 1.25rem", borderRadius: "999px", color: "white",
              fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em",
              marginBottom: "1.5rem"
            }}>
              <MessageCircle size={16} /> Help Center
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontFamily: "var(--font-family-display)", fontWeight: 900, lineHeight: 1.1 }}
          >
            How can we <span className="gradient-text">help you?</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ maxWidth: "600px", margin: "2.5rem auto 0", position: "relative" }}
          >
            <div style={{
              display: "flex", alignItems: "center", background: "white",
              borderRadius: "16px", padding: "0.5rem 1rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              border: "4px solid rgba(255,255,255,0.2)"
            }}>
              <Search size={24} color="#64748b" style={{ marginRight: "0.75rem" }} />
              <input 
                type="text" 
                placeholder="Search for answers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: "none", outline: "none", width: "100%", padding: "0.75rem 0",
                  fontSize: "1.0625rem", color: "#334155", background: "transparent"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <section className="section-padding" style={{ background: "var(--color-surface-1)", minHeight: "60vh" }}>
        <div className="section-container" style={{ maxWidth: "1100px" }}>
          
          <div className="faq-layout">
            {/* Sidebar Categories */}
            <div className="faq-sidebar">
              <div style={{ position: "sticky", top: "100px" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 800, marginBottom: "1rem", color: "var(--color-text)", paddingLeft: "1rem" }}>
                  Categories
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {FAQ_CATEGORIES.map((cat, i) => {
                    const isActive = activeCategory === cat;
                    return (
                      <motion.button
                        key={cat}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => { setActiveCategory(cat); setOpenId(null); setSearchQuery(""); }}
                        style={{
                          display: "flex", alignItems: "center", gap: "0.75rem",
                          padding: "1rem 1.25rem", borderRadius: "12px",
                          border: "none", background: isActive ? "white" : "transparent",
                          color: isActive ? "var(--color-brand-blue)" : "var(--color-text-secondary)",
                          fontWeight: isActive ? 700 : 500, fontSize: "0.9375rem",
                          cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                          boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
                        }}
                        whileHover={{ background: isActive ? "white" : "rgba(0,0,0,0.02)" }}
                      >
                        <div style={{ 
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: "32px", height: "32px", borderRadius: "8px",
                          background: isActive ? "rgba(37,99,235,0.1)" : "var(--color-surface-2)",
                          color: isActive ? "var(--color-brand-blue)" : "var(--color-text-muted)"
                        }}>
                          {getCategoryIcon(cat)}
                        </div>
                        {cat}
                        {isActive && <motion.div layoutId="activeTab" style={{ marginLeft: "auto", width: "4px", height: "20px", background: "var(--color-brand-blue)", borderRadius: "4px" }} />}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="faq-content">
              {searchQuery && (
                <div style={{ marginBottom: "1.5rem", color: "var(--color-text-muted)", fontSize: "0.9375rem" }}>
                  Showing results for "<span style={{ color: "var(--color-text)", fontWeight: 600 }}>{searchQuery}</span>"
                  ({filteredFaqs.length})
                </div>
              )}

              {filteredFaqs.length === 0 ? (
                <div style={{ textAlign: "center", padding: "4rem 2rem", background: "white", borderRadius: "16px", border: "1px dashed #cbd5e1" }}>
                  <HelpCircle size={48} color="#94a3b8" style={{ margin: "0 auto 1rem" }} />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>No matching questions found</h3>
                  <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>We couldn't find any FAQs matching your search criteria.</p>
                  <button onClick={() => setSearchQuery("")} className="btn-secondary">Clear Search</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <AnimatePresence mode="popLayout">
                    {filteredFaqs.map((faq, i) => {
                      const isOpen = openId === faq.id;
                      return (
                        <motion.div
                          key={faq.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.25, delay: i * 0.03 }}
                          style={{
                            background: "white", borderRadius: "16px",
                            border: isOpen ? "2px solid rgba(37,99,235,0.2)" : "1px solid rgba(226,232,240,0.8)",
                            boxShadow: isOpen ? "0 12px 24px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.02)",
                            overflow: "hidden",
                            position: "relative"
                          }}
                        >
                          {isOpen && (
                            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "var(--color-brand-blue)" }} />
                          )}
                          <button
                            onClick={() => setOpenId(isOpen ? null : faq.id)}
                            style={{
                              width: "100%", textAlign: "left", padding: "1.5rem",
                              background: "transparent", border: "none", cursor: "pointer",
                              display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem",
                              color: isOpen ? "var(--color-brand-blue)" : "var(--color-text)",
                            }}
                          >
                            <span style={{ fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.4 }}>{faq.question}</span>
                            <span style={{
                              flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%",
                              background: isOpen ? "var(--color-brand-blue)" : "var(--color-surface-2)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              color: isOpen ? "white" : "var(--color-text)",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                            }}>
                              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </span>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <div style={{
                                  padding: "0 1.5rem 1.5rem 1.5rem", color: "var(--color-text-secondary)",
                                  lineHeight: 1.75, fontSize: "1rem"
                                }}>
                                  <div style={{ 
                                    paddingTop: "1rem", borderTop: "1px solid rgba(226,232,240,0.6)",
                                    display: "flex", gap: "1rem"
                                  }}>
                                    <div style={{ flexShrink: 0, color: "var(--color-brand-orange)", marginTop: "2px" }}>
                                      <MessageCircle size={20} />
                                    </div>
                                    <div>{faq.answer}</div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          <style>{`
            .faq-layout {
              display: grid;
              grid-template-columns: 280px 1fr;
              gap: 3rem;
            }
            @media (max-width: 900px) {
              .faq-layout {
                grid-template-columns: 1fr;
                gap: 2rem;
              }
              .faq-sidebar {
                display: none;
              }
            }
          `}</style>

          {/* Still Have Questions? */}
          <FadeIn delay={0.2}>
            <div style={{
              marginTop: "5rem", textAlign: "center", padding: "3rem 2rem",
              background: "linear-gradient(135deg, white, rgba(37,99,235,0.05))",
              borderRadius: "24px", border: "1px solid rgba(226,232,240,0.8)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
            }}>
              <div style={{ display: "inline-flex", padding: "1rem", background: "rgba(249,115,22,0.1)", borderRadius: "50%", color: "var(--color-brand-orange)", marginBottom: "1.5rem" }}>
                <Phone size={32} />
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem", fontFamily: "var(--font-family-display)" }}>Still need help?</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "1.125rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
                Our moving experts are available 24/7. Contact us anytime for immediate assistance with your specific needs.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href={WHATSAPP_URL("Hi! I have a specific question about your moving services.")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "1rem 2rem", fontSize: "1.0625rem" }}>
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
                <a href={`tel:${COMPANY.phone}`} className="btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.0625rem" }}>
                  <Phone size={20} /> Call {COMPANY.phoneFormatted}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
