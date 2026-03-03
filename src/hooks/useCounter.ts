import { useEffect, useState } from "react";

interface UseCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
}

export const useCounter = ({ from = 0, to, duration = 1, delay = 0 }: UseCounterProps) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;

      if (elapsed < delay) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((elapsed - delay) / duration, 1);
      const currentCount = Math.floor(from + (to - from) * progress);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration, delay]);

  return count;
};
