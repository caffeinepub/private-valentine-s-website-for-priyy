import { useMemo } from 'react';

interface LoveTransitionOverlayProps {
  onComplete: () => void;
}

/**
 * Love Transition Overlay Component
 * 
 * Full-screen transition overlay that displays animated floating love emojis, balloons, and heart icons.
 * Uses stable random positions/sizes generated once per mount with useMemo, all floating upward with proper CSS custom properties.
 * Completes after 3 seconds and calls onComplete callback.
 */
export function LoveTransitionOverlay({ onComplete }: LoveTransitionOverlayProps) {
  // Generate stable random values once per mount
  const emojis = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      emoji: ['💕', '🎈', '❤️'][Math.floor(Math.random() * 3)],
      left: Math.random(),
      size: 2 + Math.random() * 3,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
  }, []);

  // Auto-complete after 3 seconds
  useMemo(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-romantic-accent/20 backdrop-blur-sm flex items-center justify-center overflow-hidden"
      data-testid="love-transition"
    >
      {/* Animated emojis */}
      {emojis.map((item) => (
        <div
          key={item.id}
          className="absolute animate-love-emoji-float"
          style={{
            left: `${item.left * 100}%`,
            fontSize: `${item.size}rem`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            '--random-x': item.left,
          } as React.CSSProperties}
        >
          {item.emoji}
        </div>
      ))}

      {/* Central message */}
      <div className="relative z-10 text-center animate-fade-in">
        <div className="text-8xl mb-4 animate-heartbeat">💕</div>
        <p className="text-4xl font-script text-romantic-deep">Forever Yours!</p>
      </div>
    </div>
  );
}
