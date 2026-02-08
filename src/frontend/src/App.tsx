import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [finalSlideState, setFinalSlideState] = useState<'question' | 'no-rejected' | 'yes-accepted'>('question');

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const messages = [
    {
      title: "My Dearest Priyy🦋",
      text: "From the moment you came into my life, everything changed. You brought color to my world, warmth to my heart, and meaning to every single day."
    },
    {
      title: "You Are My Everything",
      text: "Your smile lights up my darkest days. Your laughter is the sweetest melody I've ever heard. Being with you feels like coming home."
    },
    {
      title: "Forever and Always",
      text: "Every moment with you is a treasure I hold close to my heart. You make me want to be better, to love deeper, to dream bigger."
    },
    {
      title: "Will You Be My Valentine?",
      text: "I promise to cherish you, support you, and love you with all that I am. Today, tomorrow, and for all the days to come. You are my forever."
    }
  ];

  const handleNext = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentMessageIndex > 0) {
      setCurrentMessageIndex(currentMessageIndex - 1);
      // Reset final slide state when navigating away
      if (currentMessageIndex === messages.length - 1) {
        setFinalSlideState('question');
      }
    }
  };

  const handleYesClick = () => {
    setFinalSlideState('yes-accepted');
  };

  const handleNoClick = () => {
    setFinalSlideState('no-rejected');
  };

  const isLastSlide = currentMessageIndex === messages.length - 1;

  // Determine content for the final slide based on state
  const getFinalSlideContent = () => {
    if (finalSlideState === 'yes-accepted') {
      return {
        title: "Forever Yours! 💕",
        text: "Thank you for saying yes! My heart is overflowing with joy. You are forever mine, and I am forever yours. Together, we'll create a lifetime of beautiful memories."
      };
    } else if (finalSlideState === 'no-rejected') {
      return {
        title: "Nice Try! 😊",
        text: "There is no choice to select 'No' here. My love for you is inevitable, and so is your answer. Let's try this again..."
      };
    } else {
      return messages[currentMessageIndex];
    }
  };

  const currentContent = isLastSlide ? getFinalSlideContent() : messages[currentMessageIndex];

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
        {[...Array(15)].map((_, i) => (
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
        <div
          className={`max-w-4xl w-full transition-all duration-1000 transform ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header with name */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="text-romantic-gold animate-pulse" size={32} />
              <h1 className="text-6xl md:text-8xl font-script text-romantic-deep animate-shimmer">
                Priyy🦋
              </h1>
              <Sparkles className="text-romantic-gold animate-pulse" size={32} />
            </div>
            <p className="text-xl md:text-2xl text-romantic-text font-light tracking-wide">
              A Love Letter Just For You
            </p>
          </div>

          {/* Message card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-2 border-romantic-accent/30 animate-slide-up">
            <div className="min-h-[300px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Heart className="text-romantic-accent fill-romantic-accent animate-heartbeat" size={28} />
                  <h2 className="text-3xl md:text-4xl font-serif text-romantic-deep text-center">
                    {currentContent.title}
                  </h2>
                  <Heart className="text-romantic-accent fill-romantic-accent animate-heartbeat" size={28} />
                </div>
                
                <p className="text-lg md:text-xl text-romantic-text leading-relaxed text-center font-light mb-8">
                  {currentContent.text}
                </p>

                {/* Yes/No buttons for final slide */}
                {isLastSlide && finalSlideState !== 'yes-accepted' && (
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Button
                      onClick={handleYesClick}
                      size="lg"
                      className="bg-romantic-accent hover:bg-romantic-accent/90 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      Yes! 💕
                    </Button>
                    {finalSlideState === 'question' && (
                      <Button
                        onClick={handleNoClick}
                        size="lg"
                        variant="outline"
                        className="border-2 border-romantic-accent/50 text-romantic-deep hover:bg-romantic-accent/10 px-12 py-6 text-xl font-semibold"
                      >
                        No
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Navigation - hide on final slide when showing Yes/No or after acceptance */}
              {!(isLastSlide && (finalSlideState === 'question' || finalSlideState === 'no-rejected' || finalSlideState === 'yes-accepted')) && (
                <div className="flex items-center justify-between gap-4">
                  <Button
                    onClick={handlePrevious}
                    disabled={currentMessageIndex === 0}
                    variant="outline"
                    className="border-romantic-accent text-romantic-deep hover:bg-romantic-accent/10 disabled:opacity-30"
                  >
                    Previous
                  </Button>

                  <div className="flex gap-2">
                    {messages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMessageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentMessageIndex
                            ? 'bg-romantic-accent w-8'
                            : 'bg-romantic-accent/30 hover:bg-romantic-accent/50'
                        }`}
                        aria-label={`Go to message ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    disabled={currentMessageIndex === messages.length - 1}
                    className="bg-romantic-accent hover:bg-romantic-accent/90 text-white disabled:opacity-30"
                  >
                    Next
                  </Button>
                </div>
              )}

              {/* Show navigation on final slide only when not in question/no-rejected/yes-accepted state */}
              {isLastSlide && (finalSlideState === 'question' || finalSlideState === 'no-rejected' || finalSlideState === 'yes-accepted') && (
                <div className="flex items-center justify-between gap-4 mt-8">
                  <Button
                    onClick={handlePrevious}
                    variant="outline"
                    className="border-romantic-accent text-romantic-deep hover:bg-romantic-accent/10"
                  >
                    Previous
                  </Button>

                  <div className="flex gap-2">
                    {messages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentMessageIndex(index);
                          if (index !== messages.length - 1) {
                            setFinalSlideState('question');
                          }
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentMessageIndex
                            ? 'bg-romantic-accent w-8'
                            : 'bg-romantic-accent/30 hover:bg-romantic-accent/50'
                        }`}
                        aria-label={`Go to message ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="w-[72px]" /> {/* Spacer to balance layout */}
                </div>
              )}
            </div>
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

export default App;
