"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor in CSS for body, but wait, usually it's better to keep the default cursor and just put this ball *under* or *around* the cursor.
    // We will make this ball follow the mouse with a slight delay using GSAP for a very smooth premium feel.

    const ctx = gsap.context(() => {
      // Very fast, smooth following (0.08s delay)
      const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.08, ease: "power3.out" });
      const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.08, ease: "power3.out" });
      
      let idleTimeout: NodeJS.Timeout;
      const isHovering = { current: false };

      const onPointerMove = (e: PointerEvent) => {
        // Offset by +28px
        xTo(e.clientX + 28);
        yTo(e.clientY + 28);

        if (!isHovering.current) {
          // Use overwrite: 'auto' to prevent tweens from fighting and flickering on every pointermove
          gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.15, overwrite: "auto" });
          
          // Reset idle timeout
          clearTimeout(idleTimeout);
          idleTimeout = setTimeout(() => {
            gsap.to(cursorRef.current, { opacity: 0, scale: 0.5, duration: 0.8 }); // Slowly disappear when stopped
          }, 1000); // 1 second of no movement
        }
      };

      const onPointerDown = () => {
        gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.1 });
      };

      const onPointerUp = () => {
        if (!isHovering.current) {
          gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.3 });
        }
      };

      // Add hover states for interactive elements (links, buttons)
      const onMouseEnterInteractive = () => {
        isHovering.current = true;
        clearTimeout(idleTimeout);
        gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.4 }); // disappear slowly
      };
      const onMouseLeaveInteractive = () => {
        isHovering.current = false;
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      window.addEventListener("pointerup", onPointerUp, { passive: true });

      // We attach hover listeners to all interactive elements
      const interactives = document.querySelectorAll("a, button, input, select, textarea");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });

      return () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointerup", onPointerUp);
        clearTimeout(idleTimeout);
        interactives.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnterInteractive);
          el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        });
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] opacity-0 mix-blend-screen"
      style={{
        backgroundColor: "#075985", // Very dark SkyBlue (Sky 800)
        boxShadow: "none", // Removed glow to keep it subtle
      }}
    />
  );
}
