import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface LoveTransitionOverlayProps {
  onComplete: () => void;
}

export function LoveTransitionOverlay({ onComplete }: LoveTransitionOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Complete the transition after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation before calling onComplete
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Generate random positions and delays for emojis
  const loveEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞', '💘'];
  const emojiElements = Array.from({ length: 30 }, (_, i) => ({
    emoji: loveEmojis[i % loveEmojis.length],
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2.5 + Math.random() * 1.5,
  }));

  // Generate balloons with maroon, pink, and blue colors
  const balloonColors = [
    'oklch(0.45 0.15 350)', // maroon
    'oklch(0.75 0.20 345)', // pink
    'oklch(0.65 0.15 250)', // blue
  ];
  
  const balloonElements = Array.from({ length: 20 }, (_, i) => ({
    color: balloonColors[i % balloonColors.length],
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 3 + Math.random() * 2,
    size: 30 + Math.random() * 30,
  }));

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-auto transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.3), rgba(255, 192, 203, 0.3), rgba(230, 190, 255, 0.3))',
        backdropFilter: 'blur(2px)',
      }}
    >
      {/* Love emojis floating up */}
      {emojiElements.map((item, index) => (
        <div
          key={`emoji-${index}`}
          className="absolute animate-love-emoji-float"
          style={{
            left: `${item.left}%`,
            bottom: '-50px',
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: '2rem',
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Balloons floating up */}
      {balloonElements.map((balloon, index) => (
        <div
          key={`balloon-${index}`}
          className="absolute animate-balloon-float"
          style={{
            left: `${balloon.left}%`,
            bottom: '-100px',
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.2}px`,
            }}
          >
            {/* Balloon body */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: balloon.color,
                boxShadow: `inset -10px -10px 20px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.2)`,
              }}
            />
            {/* Balloon shine */}
            <div
              className="absolute rounded-full"
              style={{
                top: '15%',
                left: '25%',
                width: '30%',
                height: '30%',
                background: 'rgba(255, 255, 255, 0.4)',
                filter: 'blur(5px)',
              }}
            />
            {/* Balloon string */}
            <div
              className="absolute"
              style={{
                bottom: '-20px',
                left: '50%',
                width: '1px',
                height: '20px',
                background: 'rgba(0, 0, 0, 0.3)',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
        </div>
      ))}

      {/* Floating hearts (lucide icons) */}
      {Array.from({ length: 15 }, (_, i) => (
        <Heart
          key={`heart-${i}`}
          className="absolute text-romantic-accent fill-romantic-accent animate-love-heart-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-50px',
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            fontSize: `${24 + Math.random() * 20}px`,
          }}
        />
      ))}
    </div>
  );
}
