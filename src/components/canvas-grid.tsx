'use client';

import { useEffect, useRef } from 'react';

interface CanvasGridProps {
  className?: string;
}

export function CanvasGrid({ className = '' }: CanvasGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const squareSize = 12;
      const rect = canvas.getBoundingClientRect();
      const cols = Math.ceil(rect.width / squareSize);
      const rows = Math.ceil(rect.height / squareSize);

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const opacity = Math.random() * 0.1 + 0.02;
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fillRect(x * squareSize, y * squareSize, squareSize - 1, squareSize - 1);
        }
      }

      const gradient = ctx.createRadialGradient(
        rect.width / 2, rect.height / 2, 0,
        rect.width / 2, rect.height / 2, Math.max(rect.width, rect.height) * 0.6
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');

      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.globalCompositeOperation = 'source-over';
    };

    resizeCanvas();
    drawGrid();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      drawGrid();
    });

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ imageRendering: 'pixelated' }}
    />
  );
}