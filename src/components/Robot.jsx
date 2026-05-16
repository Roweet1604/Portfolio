import { useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const Robot = () => {
  const mousePosition = useMousePosition();

  useEffect(() => {
    // Load CommitBot Script
    const existingScript = document.getElementById('commitbot-script');

    if (!existingScript) {
      const script = document.createElement('script');

      script.src =
        'https://commitbot-ws0p.onrender.com/widget/widget.js';

      script.async = true;

      script.id = 'commitbot-script';

      script.setAttribute(
        'data-bot-id',
        '6a08bd4d5b3f35a12d36c242'
      );

      script.setAttribute(
        'data-api-url',
        'https://commitbot-ws0p.onrender.com'
      );

      document.body.appendChild(script);
    }
  }, []);

  const centerX =
    typeof window !== 'undefined'
      ? window.innerWidth / 2
      : 0;

  const centerY =
    typeof window !== 'undefined'
      ? window.innerHeight / 2
      : 0;

  const rotateX =
    ((mousePosition.y - centerY) / centerY) * 10;

  const rotateY =
    ((mousePosition.x - centerX) / centerX) * 10;

  const eyeShiftX =
    ((mousePosition.x - centerX) / centerX) * 30;

  const eyeShiftY =
    ((mousePosition.y - centerY) / centerY) * 30;

  // Open chatbot on robot click
  const openChatbot = () => {
    const chatbotButton =
      document.querySelector('button') ||
      document.querySelector('[class*="chat"]') ||
      document.querySelector('[id*="chat"]');

    if (chatbotButton) {
      chatbotButton.click();
    }
  };

  return (
    <>
      {/* Robot */}
      <div
        className="fixed bottom-8 right-8 z-[99999] cursor-pointer"
        onClick={openChatbot}
      >
        <div
          className="w-24 h-24 transform transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
          }}
        >
          <div className="relative">

            {/* Head */}
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto relative shadow-lg shadow-pink-400/30">

              {/* Eyes */}
              <div className="flex justify-center items-center pt-4 space-x-3">

                <div className="w-4 h-4 bg-white rounded-full relative overflow-hidden">
                  <div
                    className="w-2 h-2 bg-black rounded-full absolute transition-all duration-75"
                    style={{
                      left: `calc(50% + ${eyeShiftX * 0.2}px)`,
                      top: `calc(50% + ${eyeShiftY * 0.2}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                </div>

                <div className="w-4 h-4 bg-white rounded-full relative overflow-hidden">
                  <div
                    className="w-2 h-2 bg-black rounded-full absolute transition-all duration-75"
                    style={{
                      left: `calc(50% + ${eyeShiftX * 0.2}px)`,
                      top: `calc(50% + ${eyeShiftY * 0.2}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                </div>

              </div>

              {/* Mouth */}
              <div className="flex justify-center mt-1">
                <div className="w-4 h-2 bg-white/80 rounded-full" />
              </div>

              {/* Antenna */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-3 bg-gradient-to-t from-pink-300 to-yellow-300 rounded-full" />
                <div className="w-2 h-2 bg-yellow-300 rounded-full mx-auto -mt-1 animate-ping" />
              </div>

            </div>

            {/* Body */}
            <div className="w-12 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl mx-auto mt-1 shadow-lg shadow-purple-400/30 animate-pulse" />

            {/* Arms */}
            <div className="absolute top-6 -left-2 w-3 h-6 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full animate-wiggle" />

            <div className="absolute top-6 -right-2 w-3 h-6 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full animate-wiggle" />

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(10deg);
          }
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Robot;