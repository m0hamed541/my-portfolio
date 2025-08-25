import React, { useEffect, useRef, useState } from "react";

/**
 * CustomCursor – SVG circle cursor that follows the mouse with smoothing.
 *
 * Usage:
 *   1) Place <CustomCursor /> once near the root of your app (e.g., in App.tsx).
 *   2) Props are optional. Example:
 *        <CustomCursor color="#10b981" size={22} strokeWidth={2} smoothing={0.18} />
 */
export default function CustomCursor({
  size = 20,
  color = "#111827", // Tailwind slate-900
  strokeWidth = 2,
  opacity = 1,
  smoothing = 0.15, // 0..1 (higher = tighter follow)
  hideNative = true, // hides the default OS cursor
  zIndex = 2147483647, // stay above everything
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  smoothing?: number; // 0..1
  hideNative?: boolean;
  zIndex?: number;
}) {
  const [renderPos, setRenderPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);
  const [scaled, setScaled] = useState(false);

  // Internals (not causing re-renders)
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  // Hide native cursor globally (optional)
  useEffect(() => {
    if (!hideNative) return;
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = prev;
    };
  }, [hideNative]);

  // Mouse/touch listeners
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setScaled(true);
    const onUp = () => setScaled(false);

    // On touch devices, just hide the custom cursor
    const onTouchStart = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  // rAF loop to smoothly follow the target
  useEffect(() => {
    const loop = () => {
      // linear interpolation towards the target
      pos.current.x += (target.current.x - pos.current.x) * smoothing;
      pos.current.y += (target.current.y - pos.current.y) * smoothing;
      setRenderPos({ x: pos.current.x, y: pos.current.y });
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [smoothing]);

  // Calculated styles
  const half = size / 2;
  const scale = scaled ? 0.85 : 1;
  const visibility = visible ? 1 : 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden
      style={{
        position: "fixed",
        left: `${renderPos.x - half}px`,
        top: `${renderPos.y - half}px`,
        pointerEvents: "none",
        opacity: opacity * visibility,
        transform: `translateZ(0) scale(${scale})`,
        transition: "transform 120ms ease, opacity 160ms ease",
        mixBlendMode: "difference", // stays visible on light/dark backgrounds
        zIndex,
      }}
    >
      <circle
        r={half - strokeWidth}
        cx={half}
        cy={half}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
}
