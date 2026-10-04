"use client";

import React, { useEffect, useRef } from "react";

export function GoldenSlideCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let cw = (canvas.width = canvas.offsetWidth * dpr);
    let ch = (canvas.height = canvas.offsetHeight * dpr);

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    // Official DIJIGRO slide PNG base64 (400 x 498 px)
    const DIJIGRO_SLIDE_SRC =
      "data:image/png;base64,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";

    class Particle {
      homeX: number;
      homeY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      pulseRate: number;
      pulsePhase: number;

      constructor(
        homeX: number,
        homeY: number,
        color: string,
        dprScale: number
      ) {
        this.homeX = homeX;
        this.homeY = homeY;
        // Spawn near home position with gentle organic offset
        this.x = homeX + (Math.random() - 0.5) * 6 * dprScale;
        this.y = homeY + (Math.random() - 0.5) * 6 * dprScale;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        // Very micro ball radius (~0.4px to 0.8px on screen)
        this.size = (Math.random() * 0.4 + 0.4) * dprScale;
        this.color = color;
        this.alpha = Math.random() * 0.35 + 0.65;
        this.pulseRate = Math.random() * 0.04 + 0.015;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(
        mx: number,
        my: number,
        mouseForce: number,
        isMouseActive: boolean,
        dprScale: number
      ) {
        // 1. Spring force pulling back to original anchor position
        const dx = this.homeX - this.x;
        const dy = this.homeY - this.y;
        const distToHome = Math.sqrt(dx * dx + dy * dy);
        const angleToHome = Math.atan2(dy, dx);
        let spring = distToHome * 0.012; // Spring pull strength

        // Subtle restless organic float:
        this.pulsePhase += this.pulseRate;
        spring += Math.sin(this.pulsePhase) * 0.04 * dprScale;

        // 2. Mouse Repulsion Force (Exact ParticleSlider inverse-square formula):
        let repulse = 0;
        let repulseAngle = 0;

        if (isMouseActive && mx >= 0 && my >= 0) {
          const j = this.x - mx;
          const k = this.y - my;
          const distSq = j * j + k * k;

          // High outward force inside circular zone creates the clean bubble
          repulse = Math.min(mouseForce / distSq, 38 * dprScale);
          repulseAngle = Math.atan2(k, j);
        }

        // 3. Accelerate particle with spring and mouse forces
        this.vx += spring * Math.cos(angleToHome) + repulse * Math.cos(repulseAngle);
        this.vy += spring * Math.sin(angleToHome) + repulse * Math.sin(repulseAngle);

        // 4. Smooth fluid friction damping (0.92 from dijigro.com):
        this.vx *= 0.92;
        this.vy *= 0.92;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.globalAlpha = this.alpha;
        // At micro sizes, fillRect is much faster than arc and visually identical to a dot
        context.fillRect(this.x, this.y, this.size * 2, this.size * 2);
      }
    }

    let particles: Particle[] = [];

    const initParticles = (img: HTMLImageElement) => {
      const offCanvas = document.createElement("canvas");
      offCanvas.width = 400;
      offCanvas.height = 498;
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0);
      const imgData = offCtx.getImageData(0, 0, 400, 498);
      const data = imgData.data;

      // Position the wing graphic on the right side of the hero section - compact scale matching Screenshot 2
      const isMobile = window.innerWidth < 1024;
      const targetHeight = Math.min(ch * 0.65, 530 * dpr);
      const scale = targetHeight / 498;

      const originX = isMobile
        ? (cw - 400 * scale) / 2
        : cw * 0.75 - (400 * scale) / 2;
      const originY = ch * 0.52 - (498 * scale) / 2;

      // Curated skyblue palette
      const goldPalette = [
        "#38bdf8",
        "#7dd3fc",
        "#bae6fd",
        "#0ea5e9",
        "#0284c7",
        "#e0f2fe",
      ];

      particles = [];

      // Sample densely to create a huge number of very micro balls
      for (let y = 0; y < 498; y += 1.2) {
        for (let x = 0; x < 400; x += 1.2) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          const idx = (py * 400 + px) * 4;
          const alpha = data[idx + 3];
          if (alpha > 45) {
            const homeX = originX + x * scale;
            const homeY = originY + y * scale;
            const color = goldPalette[(px + py) % goldPalette.length];
            particles.push(new Particle(homeX, homeY, color, dpr));
          }
        }
      }
    };

    const img = new Image();
    img.src = DIJIGRO_SLIDE_SRC;
    img.onload = () => {
      initParticles(img);
    };

    const handleResize = () => {
      if (!canvas) return;
      cw = canvas.width = canvas.offsetWidth * dpr;
      ch = canvas.height = canvas.offsetHeight * dpr;
      if (img.complete && img.naturalWidth > 0) {
        initParticles(img);
      }
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.x = (e.clientX - rect.left) * dpr;
        mouse.y = (e.clientY - rect.top) * dpr;
        mouse.active = true;
      } else {
        mouse.active = false;
        mouse.x = -9999;
        mouse.y = -9999;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!canvas || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouse.x = (touch.clientX - rect.left) * dpr;
      mouse.y = (touch.clientY - rect.top) * dpr;
      mouse.active = true;
    };

    const handleTouchEnd = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Calculated mouseForce to produce an exact proportional ~95px circular magnetic void
    const mouseForce = 0.012 * Math.pow(95 * dpr, 3);

    const animate = () => {
      ctx.clearRect(0, 0, cw, ch);

      // Warm ambient focal aura behind the wing
      const ambientGlow = ctx.createRadialGradient(
        cw * 0.75,
        ch * 0.52,
        20 * dpr,
        cw * 0.75,
        ch * 0.52,
        cw * 0.32
      );
      ambientGlow.addColorStop(0, "rgba(56, 189, 248, 0.09)");
      ambientGlow.addColorStop(0.5, "rgba(56, 189, 248, 0.02)");
      ambientGlow.addColorStop(1, "transparent");

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, cw, ch);

      // Update and draw each particle ball
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(mouse.x, mouse.y, mouseForce, mouse.active, dpr);
        p.draw(ctx);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
