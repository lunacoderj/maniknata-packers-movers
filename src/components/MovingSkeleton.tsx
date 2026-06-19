import { motion } from "framer-motion";
import { Truck, Package } from "lucide-react";

export default function MovingSkeleton() {
  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", padding: "2rem 1rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Header Skeleton - Truck driving in */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
         <motion.div 
           initial={{ x: -100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
           style={{ width: "60px", height: "60px", borderRadius: "16px", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}
         >
            <Truck size={28} color="#94a3b8" />
         </motion.div>
         
         <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{ height: "20px", borderRadius: "4px", background: "#e2e8f0" }}
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              style={{ height: "14px", borderRadius: "4px", background: "#f1f5f9" }}
            />
         </div>
      </div>

      {/* Grid of "Moving Boxes" Skeletons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
         {[1, 2, 3, 4].map((i) => (
           <motion.div
             key={i}
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: i * 0.15 + 0.3, type: "spring", bounce: 0.5 }}
             style={{ 
               height: "140px", 
               borderRadius: "16px", 
               background: "#f8fafc",
               position: "relative",
               border: "2px dashed #cbd5e1",
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-end",
               padding: "1rem",
               overflow: "hidden"
             }}
           >
             {/* Box Tape Graphic */}
             <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "16px", background: "#e2e8f0", opacity: 0.6, transform: "translateY(-50%)" }} />
             
             {/* Box Icon Graphic */}
             <div style={{ position: "absolute", top: "12px", right: "12px" }}>
               <Package size={20} color="#cbd5e1" />
             </div>

             {/* Skeleton Text Lines inside the "Box" */}
             <div style={{ zIndex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <div style={{ height: "10px", width: "80%", background: "#e2e8f0", borderRadius: "4px" }} />
                <div style={{ height: "10px", width: "50%", background: "#e2e8f0", borderRadius: "4px" }} />
             </div>
             
             {/* Shimmer animation across the box */}
             <motion.div
               animate={{ x: ["-100%", "200%"] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               style={{ 
                 position: "absolute", top: 0, left: 0, bottom: 0, width: "50%", 
                 background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                 transform: "skewX(-20deg)",
                 zIndex: 2
               }}
             />
           </motion.div>
         ))}
      </div>

      {/* Footer Skeleton Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ height: "48px", width: "100%", background: "#e2e8f0", borderRadius: "12px", marginTop: "1rem", position: "relative", overflow: "hidden" }}
      >
        <motion.div
           animate={{ x: ["-100%", "200%"] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
           style={{ 
             position: "absolute", top: 0, left: 0, bottom: 0, width: "30%", 
             background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
             transform: "skewX(-20deg)"
           }}
         />
      </motion.div>
    </div>
  );
}
