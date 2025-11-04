"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

// Stairs component - assumes you have this
const Stairs = () => {
  const totalSteps = 6;
  const isMobile =
    typeof window !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };

  const reverseIndex = (index) => totalSteps - index - 1;

  return (
    <>
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: isMobile ? 0.3 : 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * (isMobile ? 0.05 : 0.08),
          }}
          className="h-full w-full bg-accent relative"
        />
      ))}
    </>
  );
};

const StairTransition = () => {
  const pathname = usePathname();
  const isMobile =
    typeof window !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Memoize transition durations
  const transitionConfig = useMemo(
    () => ({
      delay: isMobile ? 0.5 : 0.8,
      duration: isMobile ? 0.2 : 0.3,
      ease: "easeInOut",
    }),
    [isMobile]
  );

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>

        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: transitionConfig,
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
