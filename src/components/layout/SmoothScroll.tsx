import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Use ResizeObserver to update height when content changes
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const h = contentRef.current.getBoundingClientRect().height;
        setContentHeight(h);
        if (h > 0) setIsReady(true);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useScroll();

  // Create a spring-based value based on raw scrollY
  // Higher stiffness/damping = more inertial and "heavier" (smoother)
  const smoothY = useSpring(scrollY, {
    stiffness: 100, // lower = more lag/smoothness
    damping: 30, // lower = more bounce
    mass: 1, // higher = more inertia
    restDelta: 0.001,
  });

  const transform = useTransform(smoothY, (value) => `translateY(-${value}px)`);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={contentRef}
        style={{
          transform,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          overflowX: "hidden",
          visibility: isReady ? "visible" : "hidden",
        }}
        className="w-full h-auto will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
