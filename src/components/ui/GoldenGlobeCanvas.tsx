"use client";

import React, { useEffect, useRef } from "react";
import { WORLD_MAP_PATH } from "@/lib/worldMapPath";

export function GoldenGlobeCanvas({ className = "" }: { className?: string }) {
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

    const goldPalette = [
      "#38bdf8",
      "#7dd3fc",
      "#bae6fd",
      "#0ea5e9",
      "#0284c7",
      "#e0f2fe",
    ];

    class Particle {
      baseX: number;
      baseY: number;
      baseZ: number;
      size: number;
      color: string;
      alpha: number;

      x2d: number = 0;
      y2d: number = 0;
      vx: number = 0;
      vy: number = 0;

      constructor(x: number, y: number, z: number, color: string, dprScale: number) {
        this.baseX = x;
        this.baseY = y;
        this.baseZ = z;
        this.size = (Math.random() * 0.8 + 0.5) * dprScale;
        this.color = color;
        this.alpha = Math.random() * 0.6 + 0.4;
      }
    }

    let particles: Particle[] = [];
    let rotationY = 0;
    const rotationX = 0.15;

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 1024;
      const radius = isMobile ? Math.min(cw, ch) * 0.42 : Math.min(cw, ch) * 0.38;

      // Draw map path to offscreen canvas to sample it
      const offCanvas = document.createElement("canvas");
      offCanvas.width = 800;
      offCanvas.height = 400;
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      const path2d = new Path2D(WORLD_MAP_PATH);
      offCtx.fillStyle = "#fff";
      offCtx.fill(path2d);

      const imgData = offCtx.getImageData(0, 0, 800, 400).data;

      const step = isMobile ? 3 : 2; // higher step on mobile for performance

      for (let y = 0; y < 400; y += step) {
        for (let x = 0; x < 800; x += step) {
          const idx = (y * 800 + x) * 4;
          const alpha = imgData[idx + 3];

          if (alpha > 128) {
            // Add a tiny random offset to make it look organic
            const rx = x + (Math.random() - 0.5) * step;
            const ry = y + (Math.random() - 0.5) * step;

            // Map x to longitude (0 to 2PI), y to latitude (0 to PI)
            const lon = (rx / 800) * Math.PI * 2;
            const lat = (ry / 400) * Math.PI;

            // Convert spherical to cartesian (radius is flipped on Y to match north/south)
            const x3d = radius * Math.sin(lat) * Math.cos(lon);
            const z3d = radius * Math.sin(lat) * Math.sin(lon);
            const y3d = -radius * Math.cos(lat);

            const color = goldPalette[(x + y) % goldPalette.length];
            particles.push(new Particle(x3d, y3d, z3d, color, dpr));
          }
        }
      }
    };

    initParticles();

    const handleResize = () => {
      if (!canvas) return;
      cw = canvas.width = canvas.offsetWidth * dpr;
      ch = canvas.height = canvas.offsetHeight * dpr;
      initParticles();
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

    const mouseForce = 4000 * dpr;

    const animate = () => {
      ctx.clearRect(0, 0, cw, ch);

      const isMobile = window.innerWidth < 1024;
      const originX = isMobile ? cw / 2 : cw * 0.75;
      const originY = ch * 0.52;

      const ambientGlow = ctx.createRadialGradient(
        originX, originY, 20 * dpr,
        originX, originY, cw * 0.35
      );
      ambientGlow.addColorStop(0, "rgba(56, 189, 248, 0.08)");
      ambientGlow.addColorStop(0.5, "rgba(56, 189, 248, 0.02)");
      ambientGlow.addColorStop(1, "transparent");
      
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, cw, ch);

      rotationY += 0.003;

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const rotX = p.baseX * cosY - p.baseZ * sinY;
        let rotZ = p.baseZ * cosY + p.baseX * sinY;
        
        const rotY = p.baseY * cosX - rotZ * sinX;
        rotZ = rotZ * cosX + p.baseY * sinX;

        const fov = 1200;
        const zDepth = rotZ + fov;
        const scale = fov / zDepth;

        const targetX2d = originX + rotX * scale;
        const targetY2d = originY + rotY * scale;

        if (p.x2d === 0 && p.y2d === 0) {
          p.x2d = targetX2d;
          p.y2d = targetY2d;
        }

        const dx = targetX2d - p.x2d;
        const dy = targetY2d - p.y2d;
        p.vx += dx * 0.04;
        p.vy += dy * 0.04;

        if (mouse.active && rotZ > -100) {
          const mx = p.x2d - mouse.x;
          const my = p.y2d - mouse.y;
          const distSq = mx * mx + my * my;
          
          if (distSq < 12000 * dpr) {
            const force = Math.min(mouseForce / distSq, 25 * dpr);
            const angle = Math.atan2(my, mx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
          }
        }

        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x2d += p.vx;
        p.y2d += p.vy;

        let currentAlpha = p.alpha;
        if (rotZ < 0) {
           currentAlpha = p.alpha * 0.15;
        }

        const currentSize = Math.max(0.1, p.size * scale);

        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fillRect(p.x2d, p.y2d, currentSize * 2, currentSize * 2);
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
