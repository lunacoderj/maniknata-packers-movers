import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { COMPANY, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "../data/company";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : isHome
            ? "transparent"
            : "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled ? "1px solid rgba(226,232,240,0.6)" : "none",
        }}
      >
        <div className="section-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div style={{
              width: "42px", height: "42px",
              background: "linear-gradient(135deg, #1e4fa0, #1a3a6e)",
              borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.25rem",
              boxShadow: "0 4px 12px rgba(30,79,160,0.3)",
            }}>
              🚛
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-family-display)",
                fontWeight: 800,
                fontSize: "1.0625rem",
                lineHeight: 1.1,
                color: scrolled || !isHome ? "var(--color-brand-navy)" : "white",
                transition: "color 0.3s",
              }}>
                Manikanta
              </div>
              <div style={{
                fontFamily: "var(--font-family-display)",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                color: scrolled || !isHome ? "var(--color-brand-orange)" : "rgba(255,200,100,1)",
                transition: "color 0.3s",
              }}>
                PACKERS & MOVERS
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: "0.5rem 0.875rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive
                      ? "var(--color-brand-blue)"
                      : scrolled || !isHome
                      ? "var(--color-text-secondary)"
                      : "rgba(255,255,255,0.9)",
                    background: isActive ? "rgba(30,79,160,0.08)" : "transparent",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden-mobile">
            <a
              href={`tel:${COMPANY.phone}`}
              style={{
                display: "flex", alignItems: "center", gap: "0.375rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                border: "1.5px solid",
                borderColor: scrolled || !isHome ? "var(--color-brand-blue)" : "rgba(255,255,255,0.5)",
                color: scrolled || !isHome ? "var(--color-brand-blue)" : "white",
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "all 0.2s",
                textDecoration: "none",
              }}
            >
              <Phone size={15} />
              {COMPANY.phone}
            </a>
            <a
              href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: scrolled || !isHome ? "var(--color-text-primary)" : "white",
              padding: "0.5rem",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(226,232,240,0.6)",
              padding: "1rem 1.5rem 1.5rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "1rem" }}>
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "var(--color-brand-blue)" : "var(--color-text-primary)",
                      background: isActive ? "rgba(30,79,160,0.08)" : "transparent",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href={`tel:${COMPANY.phone}`} className="btn-secondary" style={{ justifyContent: "center" }}>
                <Phone size={16} />
                Call {COMPANY.phone}
              </a>
              <a
                href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ justifyContent: "center" }}
              >
                <MessageCircle size={16} />
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for non-home pages */}
      {!isHome && <div style={{ height: "72px" }} />}
    </>
  );
}
