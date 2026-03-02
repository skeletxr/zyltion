import { useEffect } from "react";
import Lenis from "lenis";

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initial scroll trigger update if needed
    lenis.on("scroll", () => {
      // Logic for scroll animations can go here if using ScrollTrigger or similar
    });

    return () => {
      lenis.destroy();
    };
  }, []);
};
