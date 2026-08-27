import { useEffect, useRef } from "react";
import "./CanvasBackground.css";

const DEFAULTS = {
  spacing: 36,
  baseSize: 19,
  maxSize: 24,
  influence: 250,
  baseAlpha: 0.14,
  hoverAlpha: 0.58,
  easing: 0.35,
};

function CanvasBackground({ options = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return undefined;

    const settings = { ...DEFAULTS, ...options };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const cursor = { targetX: -9999, targetY: -9999, x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let columns = 0;
    let rows = 0;
    let pixelRatio = 1;
    let animationFrame;

    const getAccent = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#14b8a6";

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const spacing = width < 600 ? 48 : settings.spacing;
      columns = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / (spacing * 0.86)) + 1;
    };

    const updateCursor = (event) => {
      cursor.targetX = event.clientX;
      cursor.targetY = event.clientY;
    };

    const clearCursor = () => {
      cursor.targetX = -9999;
      cursor.targetY = -9999;
    };

    const draw = () => {
      const spacing = width < 600 ? 48 : settings.spacing;
      const influence = width < 1000 ? settings.influence * 0.78 : settings.influence;
      const easing = reduceMotion ? 0.08 : settings.easing;
      const accent = getAccent();

      cursor.x += (cursor.targetX - cursor.x) * easing;
      cursor.y += (cursor.targetY - cursor.y) * easing;
      context.clearRect(0, 0, width, height);

      for (let column = 0; column < columns; column += 1) {
        for (let row = 0; row < rows; row += 1) {
          const x = column * spacing + (row % 2) * (spacing / 2);
          const y = row * spacing * 0.86;
          const distance = Math.hypot(cursor.x - x, cursor.y - y);
          const normalized = Math.max(0, 1 - distance / influence);
          const proximity = normalized * normalized;
          const alpha = settings.baseAlpha + (settings.hoverAlpha - settings.baseAlpha) * proximity;
          const size = settings.baseSize + (settings.maxSize - settings.baseSize) * proximity;
          const scale = size / settings.baseSize;

          context.beginPath();
          drawHexagon(context, x, y, size, scale);
          context.fillStyle = hexToRgba(accent, alpha);
          context.strokeStyle = hexToRgba(accent, alpha * 0.9);
          context.lineWidth = 0.65 + proximity * 0.8;
          context.fill();
          context.stroke();
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!touchDevice) {
      window.addEventListener("mousemove", updateCursor, { passive: true });
      window.addEventListener("mouseleave", clearCursor, { passive: true });
    }
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseleave", clearCursor);
    };
  }, [options]);

  return <canvas ref={canvasRef} className="canvas-background" aria-hidden="true" />;
}

function drawHexagon(context, x, y, size, scale) {
  const points = 6;
  const angleOffset = Math.PI / 6;
  context.moveTo(x + size * scale * Math.cos(angleOffset), y + size * scale * Math.sin(angleOffset));
  for (let point = 1; point <= points; point += 1) {
    const angle = angleOffset + (point * Math.PI * 2) / points;
    context.lineTo(x + size * Math.cos(angle) * scale, y + size * Math.sin(angle) * scale);
  }
  context.closePath();
}

function hexToRgba(color, alpha) {
  if (!color.startsWith("#")) return color;
  const value = color.slice(1);
  const hex = value.length === 3 ? value.split("").map((part) => part + part).join("") : value;
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export default CanvasBackground;
