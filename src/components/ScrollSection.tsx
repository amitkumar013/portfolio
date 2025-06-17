import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollSection = ({ children, className = '' }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    scrollDirection === 'down' ? [100, 0, 0, -100] : [-100, 0, 0, 100]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        scale,
        y,
      }}
      initial={{ opacity: 0, y: scrollDirection === 'down' ? 100 : -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
}; 