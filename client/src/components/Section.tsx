import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export function Section({ id, className, children, delay = 0 }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx("py-24 md:py-32 relative", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </section>
  );
}
