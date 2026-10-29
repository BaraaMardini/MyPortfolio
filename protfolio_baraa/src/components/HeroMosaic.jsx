import { useEffect, useRef } from 'react';

// Faint mosaic behind the hero, a nod to the gold and green tesserae of the
// Umayyad Mosque in Damascus. A few tiles catch the light at a time, and on
// devices with a mouse the tiles under the pointer light up as it moves.
// Geometry matches --texture-tiles in index.css.

const CELL = 16;
const TILE = 12;
const INSET = (CELL - TILE) / 2;
const BASE = 'rgba(226, 179, 79, 0.035)';
// Mostly gold, sometimes green glass
const GLINT_RGB = ['226, 179, 79', '226, 179, 79', '226, 179, 79', '96, 168, 128'];
const MAX_GLINTS = 36;

const pick = (list) => list[Math.floor(Math.random() * list.length)];

export default function HeroMosaic() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const glints = new Map(); // tile index -> { start, life, peak, rgb }
    let cols = 0;
    let rows = 0;
    let frame = 0;
    let running = false;

    const drawTile = (i, fill) => {
      const x = (i % cols) * CELL + INSET;
      const y = Math.floor(i / cols) * CELL + INSET;
      ctx.clearRect(x, y, TILE, TILE);
      ctx.fillStyle = BASE;
      ctx.fillRect(x, y, TILE, TILE);
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fillRect(x, y, TILE, TILE);
      }
    };

    const spawn = (i, now, peak = 0.18 + Math.random() * 0.32) => {
      glints.set(i, {
        start: now,
        life: 1800 + Math.random() * 2800,
        peak,
        rgb: pick(GLINT_RGB),
      });
    };

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      glints.clear();

      ctx.fillStyle = BASE;
      for (let i = 0; i < cols * rows; i += 1) {
        ctx.fillRect((i % cols) * CELL + INSET, Math.floor(i / cols) * CELL + INSET, TILE, TILE);
      }

      // Without motion, light a fixed scatter of tiles once
      if (reduceMotion) {
        for (let n = 0; n < MAX_GLINTS; n += 1) {
          drawTile(Math.floor(Math.random() * cols * rows), `rgba(${pick(GLINT_RGB)}, 0.25)`);
        }
      }
    };

    const step = (now) => {
      frame = requestAnimationFrame(step);
      const total = cols * rows;
      if (!total) return;

      const target = Math.min(MAX_GLINTS, Math.floor(total / 8));
      while (glints.size < target) spawn(Math.floor(Math.random() * total), now);

      glints.forEach((g, i) => {
        const t = (now - g.start) / g.life;
        if (t >= 1) {
          glints.delete(i);
          drawTile(i);
          return;
        }
        drawTile(i, `rgba(${g.rgb}, ${(g.peak * Math.sin(Math.PI * t)).toFixed(3)})`);
      });
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      frame = requestAnimationFrame(step);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onPointerMove = (e) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x < 0 || y < 0 || x >= r.width || y >= r.height) return;
      spawn(Math.floor(y / CELL) * cols + Math.floor(x / CELL), performance.now(), 0.6);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Only animate while the hero is on screen
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibility.observe(canvas);

    const host = canvas.closest('section');
    const trackPointer = finePointer && !reduceMotion && host;
    if (trackPointer) host.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      if (trackPointer) host.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__mosaic" aria-hidden="true" />;
}
