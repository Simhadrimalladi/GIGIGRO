"use client";

import React, { useEffect, useRef } from "react";

export function ParticleCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: width * 0.75, y: height * 0.5, radius: 160 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class GoldParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseOpacity: number;
      color: string;
      angle: number;
      angularSpeed: number;
      pulseSpeed: number;

      constructor() {
        // Cluster on the right half like reference screenshot
        const clusterCenterX = width * 0.75;
        const clusterCenterY = height * 0.45;
        const radius = Math.random() * (width * 0.3);
        const theta = Math.random() * Math.PI * 2;

        this.x = clusterCenterX + Math.cos(theta) * radius;
        this.y = clusterCenterY + Math.sin(theta) * radius;
        this.size = Math.random() * 2.8 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = -Math.random() * 0.8 - 0.2; // Upward drift
        this.baseOpacity = Math.random() * 0.7 + 0.2;
        this.opacity = this.baseOpacity;
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = (Math.random() - 0.5) * 0.03;
        this.pulseSpeed = Math.random() * 0.04 + 0.01;

        const goldHues = ["#D4AF37", "#FFDF73", "#E5C158", "#FFF2A8", "#B38F26"];
        this.color = goldHues[Math.floor(Math.random() * goldHues.length)];
      }

      update() {
        if (prefersReducedMotion) return;

        this.angle += this.angularSpeed;
        this.x += this.speedX + Math.sin(this.angle) * 0.4;
        this.y += this.speedY;

        // Shimmering twinkle
        this.opacity =
          this.baseOpacity + Math.sin(Date.now() * 0.003 * this.pulseSpeed * 50) * 0.25;

        // Gentle cursor interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 3;
          this.y -= (dy / distance) * force * 3;
        }

        // Loop back to bottom right cluster
        if (this.y < -20) {
          this.y = height + 20;
          this.x = width * 0.65 + (Math.random() - 0.2) * (width * 0.35);
        }
        if (this.x < width * 0.4) this.x = width * 0.45;
        if (this.x > width + 20) this.x = width * 0.9;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, this.opacity));
        ctx.shadowColor = "#D4AF37";
        ctx.shadowBlur = this.size * 5;
        ctx.fill();
        ctx.restore();
      }
    }

    const count = Math.min(Math.floor((width * height) / 6000), 160);
    const particles: GoldParticle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push(new GoldParticle());
    }

    const connectParticles = () => {
      const maxDistance = 75;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep golden glowing core behind the particles
      const gradient = ctx.createRadialGradient(
        width * 0.78,
        height * 0.45,
        30,
        width * 0.78,
        height * 0.45,
        width * 0.38
      );
      gradient.addColorStop(0, "rgba(212, 175, 55, 0.15)");
      gradient.addColorStop(0.5, "rgba(212, 175, 55, 0.04)");
      gradient.addColorStop(1, "rgba(5, 5, 5, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
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
