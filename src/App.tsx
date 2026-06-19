import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MovingSkeleton from "./components/MovingSkeleton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActionButtons from "./components/FloatingActionButtons";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ReviewsPage from "./pages/ReviewsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!appLoaded) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "white" }}>
        <MovingSkeleton />
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionButtons />
      </div>
    </Router>
  );
}

export default App;
