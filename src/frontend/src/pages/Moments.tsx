import { Heart, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MomentsProps {
  onBack: () => void;
}

function Moments({ onBack }: MomentsProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/generated/bokeh-lights-bg.dim_1920x1080.png)' }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/assets/generated/romantic-hearts-bg.dim_1024x768.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-rose via-romantic-pink to-romantic-lavender" />
      </div>

      {/* Floating hearts animation */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romantic-accent animate-float-heart opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full">
          {/* Back button */}
          <div className="mb-8 animate-fade-in">
            <Button
              onClick={onBack}
              variant="outline"
              className="border-romantic-accent text-romantic-deep hover:bg-romantic-accent/10"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="text-romantic-gold animate-pulse" size={32} />
              <h1 className="text-5xl md:text-7xl font-script text-romantic-deep animate-shimmer">
                Our Precious Moments💞
              </h1>
              <Sparkles className="text-romantic-gold animate-pulse" size={32} />
            </div>
            <p className="text-xl md:text-2xl text-romantic-text font-light tracking-wide mt-4">
              Every moment with you is a treasure I hold close to my heart
            </p>
          </div>

          {/* Lovely message card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-2 border-romantic-accent/30 animate-slide-up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="text-romantic-accent fill-romantic-accent animate-heartbeat" size={28} />
              <h2 className="text-3xl md:text-4xl font-serif text-romantic-deep text-center">
                Forever in My Heart
              </h2>
              <Heart className="text-romantic-accent fill-romantic-accent animate-heartbeat" size={28} />
            </div>
            
            <p className="text-lg md:text-xl text-romantic-text leading-relaxed text-center font-light">
              These moments captured in time remind me of how blessed I am to have you in my life. 
              Your smile, your laughter, your presence - they all make my world infinitely brighter. 
              Every photograph tells a story of our love, and I cherish each and every one. 
              You are my today and all of my tomorrows. 💕
            </p>
          </div>

          {/* Photo gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Photo 1 */}
            <div className="group relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-romantic-accent via-romantic-gold to-romantic-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-xl border-2 border-romantic-accent/20 overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src="/assets/IMG_20251207_221903_037-2.webp"
                    alt="Our precious moment together"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-romantic-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-romantic-deep font-serif text-lg">A moment of pure joy 💕</p>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-romantic-accent via-romantic-gold to-romantic-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-xl border-2 border-romantic-accent/20 overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src="/assets/20260106_172708-2.jpg"
                    alt="Another beautiful memory"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-romantic-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-romantic-deep font-serif text-lg">Together forever 💞</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 mb-8 animate-bounce-slow">
            <Heart className="text-romantic-accent fill-romantic-accent" size={32} />
            <Heart className="text-romantic-gold fill-romantic-gold" size={40} />
            <Heart className="text-romantic-accent fill-romantic-accent" size={32} />
          </div>

          {/* Butterfly accent */}
          <div className="flex justify-center animate-bounce-slow">
            <img
              src="/assets/generated/butterfly-accent.dim_200x200.png"
              alt="Butterfly"
              className="w-24 h-24 opacity-80"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 py-6 text-center">
        <p className="text-romantic-text/80 text-sm flex items-center justify-center gap-2">
          © 2026. Built with <Heart className="text-romantic-accent fill-romantic-accent inline w-4 h-4 animate-heartbeat" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-romantic-deep hover:text-romantic-accent transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Moments;
