"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    let animationFrameId;
    let stars = [];
    let lastTime = 0;
    const fps = 30;
    const fpsInterval = 1000 / fps;

    // Detect mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEnd = isMobile && window.devicePixelRatio <= 2;

    // Set canvas size with pixel ratio consideration
    const resizeCanvas = () => {
      const dpr = isLowEnd ? 1 : Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      ctx.scale(dpr, dpr);
      initStars();
    };

    // Initialize stars with better mobile optimization
    const initStars = () => {
      stars = [];
      const area = canvas.width * canvas.height;
      const starDensity = isMobile ? 15000 : 5000;
      const numStars = Math.min(
        Math.floor(area / starDensity),
        isMobile ? 150 : 300
      );

      for (let i = 0; i < numStars; i++) {
        const radius = Math.random() * (isMobile ? 1.2 : 1.5);
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.8 + 0.2,
          fadeSpeed: Math.random() * 0.01 + 0.002,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
          hasGlow: !isMobile && radius > 1.2 && Math.random() > 0.7,
        });
      }
    };

    // Optimized animation with FPS limiting
    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;

      lastTime = currentTime - (elapsed % fpsInterval);

      // Clear with background color instead of clearRect
      ctx.fillStyle = "#1c1c22";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Batch rendering
      ctx.save();

      stars.forEach((star) => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Update opacity for twinkling
        star.opacity += star.fadeSpeed * star.fadeDirection;
        if (star.opacity >= 1 || star.opacity <= 0.2) {
          star.fadeDirection *= -1;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Add glow only for special stars on desktop
        if (star.hasGlow) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(8, 255, 153, ${star.opacity * 0.2})`;
          ctx.fill();
        }
      });

      ctx.restore();
    };

    resizeCanvas();

    // Delay start for mobile to let page settle
    const startDelay = isMobile ? 100 : 0;
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, startDelay);

    // Debounce resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Reduce motion for mobile
  const isMobileDevice =
    typeof window !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const orbDuration = isMobileDevice ? 12 : 8;

  return (
    <>
      {/* Canvas for animated stars */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50"
        style={{ background: "linear-gradient(to bottom, #1c1c22, #16161d)" }}
      />

      {/* Simplified animated gradient orbs for mobile */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none -z-40"
        style={{
          background: "radial-gradient(circle, #08ff99 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: orbDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {!isMobileDevice && (
        <>
          <motion.div
            className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none -z-40"
            style={{
              background:
                "radial-gradient(circle, #08ff99 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: orbDuration + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="fixed top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none -z-40"
            style={{
              background:
                "radial-gradient(circle, #08ff99 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: orbDuration + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </>
  );
};

export default SpaceBackground;
