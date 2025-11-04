"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });

    let animationFrameId;
    let stars = [];
    let lastTime = performance.now();

    // Better mobile detection
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768;
    const fps = isMobile ? 24 : 30;
    const fpsInterval = 1000 / fps;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const area = window.innerWidth * window.innerHeight;
      const numStars = isMobile
        ? Math.min(Math.floor(area / 20000), 80)
        : Math.min(Math.floor(area / 8000), 200);

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * (isMobile ? 1 : 1.3),
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.7 + 0.3,
          fadeSpeed: Math.random() * 0.008 + 0.002,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    // Animation loop
    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;

      lastTime = currentTime - (elapsed % fpsInterval);

      // Clear canvas
      ctx.fillStyle = "#1c1c22";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges
        if (star.x < 0) star.x = window.innerWidth;
        if (star.x > window.innerWidth) star.x = 0;
        if (star.y < 0) star.y = window.innerHeight;
        if (star.y > window.innerHeight) star.y = 0;

        // Update opacity
        star.opacity += star.fadeSpeed * star.fadeDirection;
        if (star.opacity >= 1) {
          star.fadeDirection = -1;
        } else if (star.opacity <= 0.3) {
          star.fadeDirection = 1;
        }

        // Draw star
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, star.radius, star.radius);
      }
    };

    resizeCanvas();

    // Start animation after a brief delay on mobile
    const startTimeout = setTimeout(
      () => {
        animationFrameId = requestAnimationFrame(animate);
      },
      isMobile ? 300 : 0
    );

    // Throttled resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 250);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMounted]);

  if (!isMounted) return null;

  const isMobileDevice =
    typeof window !== "undefined" &&
    (window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #1c1c22, #16161d)",
          zIndex: -50,
          willChange: "auto",
        }}
      />

      {/* Single orb for mobile, three for desktop */}
      <motion.div
        className="fixed top-1/4 left-1/4 rounded-full blur-3xl pointer-events-none"
        style={{
          width: isMobileDevice ? "250px" : "384px",
          height: isMobileDevice ? "250px" : "384px",
          background:
            "radial-gradient(circle, rgba(8, 255, 153, 0.3) 0%, transparent 70%)",
          zIndex: -40,
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: isMobileDevice ? 15 : 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {!isMobileDevice && (
        <>
          <motion.div
            className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(8, 255, 153, 0.2) 0%, transparent 70%)",
              zIndex: -40,
              willChange: "transform",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="fixed top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(8, 255, 153, 0.15) 0%, transparent 70%)",
              zIndex: -40,
              willChange: "transform",
            }}
            animate={{
              scale: [1, 1.25, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}
    </>
  );
};

export default SpaceBackground;
