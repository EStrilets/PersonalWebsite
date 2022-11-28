import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function CardComponent({ children, newStyles }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    return (
      <motion.div
        className={newStyles}
        style={{ x, y, rotateX, rotateY, }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {children}
      </motion.div>
    );
}
