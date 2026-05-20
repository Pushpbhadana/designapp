"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TextCursorProps {
  text?: string;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

const TextCursor: React.FC<TextCursorProps> = ({
  text = '⚛️',
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const idCounter = useRef<number>(0);
  const requestRef = useRef<number | undefined>(undefined);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const addTrailPoint = (x: number, y: number) => {
    setTrail(prev => {
      let newTrail = [...prev];
      
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x,
          y,
          angle: 0,
          ...(randomFloat && {
            randomX: (Math.random() * 20) - 10,
            randomY: (Math.random() * 20) - 10,
            randomRotate: (Math.random() * 20) - 10
          })
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = x - last.x;
        const dy = y - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          rawAngle = ((rawAngle + 180) % 360) - 180;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...(randomFloat && {
                randomX: (Math.random() * 20) - 10,
                randomY: (Math.random() * 20) - 10,
                randomRotate: (Math.random() * 20) - 10
              })
            });
          }
        }
      }
      
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      
      return newTrail;
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    // Get mouse position relative to viewport
    const x = e.clientX;
    const y = e.clientY;
    mousePosRef.current = { x, y };
    
    // Use requestAnimationFrame for smoother animation
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    
    requestRef.current = requestAnimationFrame(() => {
      addTrailPoint(x, y);
      lastMoveTimeRef.current = Date.now();
    });
  };

  useEffect(() => {
    if (!mounted) return;
    
    // Attach to window for full screen coverage
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mounted, spacing, followMouseDirection, randomFloat, maxPoints]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100 && trail.length > 0) {
        setTrail(prev => prev.slice(1));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval, trail.length]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-9999">
      <AnimatePresence mode="popLayout">
        {trail.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, rotate: item.angle }}
            animate={{
              opacity: 1,
              scale: 1,
              x: randomFloat ? [0, item.randomX || 0, 0] : 0,
              y: randomFloat ? [0, item.randomY || 0, 0] : 0,
              rotate: randomFloat 
                ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] 
                : item.angle
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              opacity: { duration: exitDuration, ease: 'easeOut' },
              scale: { duration: exitDuration, ease: 'easeOut' },
              ...(randomFloat && {
                x: {
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: "reverse"
                },
                y: {
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: "reverse"
                },
                rotate: {
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              })
            }}
            className="absolute select-none whitespace-nowrap text-3xl"
            style={{ 
              left: item.x, 
              top: item.y,
              transform: 'translate(-50%, -50%)',
              willChange: 'transform',
              zIndex: trail.length - index // Newer items on top
            }}
          >
            {text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextCursor;