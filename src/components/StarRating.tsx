import { motion } from "framer-motion";

interface StarRatingProps {
  stars: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ stars, size = "md" }: StarRatingProps) {
  const sizeClass = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";
  return (
    <div className={`star-rating ${sizeClass}`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s}>{s <= Math.round(stars) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {target}{suffix}
    </motion.span>
  );
}
