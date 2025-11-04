"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random(),
          fadeSpeed: Math.random() * 0.02 + 0.005,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    // Animate stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
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

        // Add glow for larger stars
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(8, 255, 153, ${star.opacity * 0.3})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Canvas for animated stars */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50"
        style={{ background: "linear-gradient(to bottom, #1c1c22, #16161d)" }}
      />

      {/* Animated gradient orbs */}
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
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none -z-40"
        style={{
          background: "radial-gradient(circle, #08ff99 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none -z-40"
        style={{
          background: "radial-gradient(circle, #08ff99 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default SpaceBackground;
