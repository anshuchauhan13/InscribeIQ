import { motion } from "motion/react";

// Lightweight scroll-entrance wrapper. Fades + slides its children into view the
// first time they enter the viewport. Direction is configurable; `delay` lets
// callers stagger siblings. Reduced-motion is honoured globally via the
// <MotionConfig reducedMotion="user"> in App.jsx.
const OFFSET = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;
  const from = OFFSET[direction] ?? OFFSET.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.22, 0.61, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
