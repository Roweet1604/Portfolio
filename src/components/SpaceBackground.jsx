import { Code, Cpu, Database, GitBranch, Globe, Monitor, Server, Smartphone, Zap } from 'lucide-react';

const SpaceBackground = () => {
  const techPlanets = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      name: "Frontend",
      size: 80,
      color: "from-cyan-400 to-blue-500",
      position: { top: "15%", left: "20%" },
      orbitDuration: "20s",
      glowColor: "cyan"
    },
    {
      id: 2,
      icon: <Database className="w-6 h-6" />,
      name: "Backend",
      size: 60,
      color: "from-purple-400 to-pink-500",
      position: { top: "60%", left: "80%" },
      orbitDuration: "25s",
      glowColor: "purple"
    },
    {
      id: 3,
      icon: <Globe className="w-5 h-5" />,
      name: "Web",
      size: 45,
      color: "from-green-400 to-emerald-500",
      position: { top: "30%", left: "70%" },
      orbitDuration: "15s",
      glowColor: "green"
    },
    {
      id: 4,
      icon: <Cpu className="w-4 h-4" />,
      name: "AI",
      size: 35,
      color: "from-orange-400 to-red-500",
      position: { top: "80%", left: "30%" },
      orbitDuration: "30s",
      glowColor: "orange"
    },
    {
      id: 5,
      icon: <Server className="w-6 h-6" />,
      name: "Cloud",
      size: 55,
      color: "from-indigo-400 to-purple-600",
      position: { top: "45%", left: "10%" },
      orbitDuration: "22s",
      glowColor: "indigo"
    },
    {
      id: 6,
      icon: <Smartphone className="w-4 h-4" />,
      name: "Mobile",
      size: 40,
      color: "from-pink-400 to-rose-500",
      position: { top: "70%", left: "60%" },
      orbitDuration: "18s",
      glowColor: "pink"
    }
  ];

  const shootingStars = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    startX: Math.random() * 100,
    startY: Math.random() * 50,
  }));

  const staticStars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.6 + 0.2,
    twinkleDelay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Space Gradient - Reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/90 to-purple-900/80" />
      
      {/* Nebula Effects - Much more subtle */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Static Stars - Reduced count and opacity */}
      {staticStars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity * 0.7,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: '4s',
            boxShadow: `0 0 ${star.size * 1.5}px rgba(255, 255, 255, 0.3)`,
          }}
        />
      ))}

      {/* Shooting Stars - Reduced count and opacity */}
      {shootingStars.map((star) => (
       <div
  key={`shooting-${star.id}`}
  className="absolute"
  style={{
    left: `${star.startX}%`,
    top: `${star.startY}%`,
    animation: `shootingStar ${star.duration}s linear infinite`,
    animationDelay: `${star.delay}s`,
  }}
>
  <div className="relative">
    {/* shooting star head + trail, trail to the left of the head */}
    <div className="absolute left-0 top-0 flex items-center rotate-45">
      {/* trail comes first, then the head, so trail is behind */}
      <div className="h-0.5 w-32 bg-gradient-to-l from-white/80 to-transparent" />
      <div className="w-2 h-2 bg-white rounded-full shadow shadow-white/40 shrink-0" />
    </div>
  </div>
</div>

      ))}

      {/* Tech Planets - Reduced opacity and size */}
      {techPlanets.map((planet) => (
        <div
          key={planet.id}
          className="absolute animate-pulse opacity-40"
          style={{
            top: planet.position.top,
            left: planet.position.left,
            animation: `float ${planet.orbitDuration} ease-in-out infinite, pulse 6s ease-in-out infinite`,
            animationDelay: `${planet.id * 0.5}s`,
          }}
        >
          {/* Planet Glow - Much more subtle */}
          <div 
            className={`absolute inset-0 rounded-full blur-xl opacity-20`}
            style={{
              width: `${planet.size * 0.8 + 15}px`,
              height: `${planet.size * 0.8 + 15}px`,
              background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              transform: 'translate(-7px, -7px)',
            }}
          />
          
          {/* Planet Body - Smaller and more transparent */}
          <div
            className={`relative bg-gradient-to-br ${planet.color} rounded-full flex items-center justify-center text-white shadow-lg border border-white/10 opacity-70`}
            style={{
              width: `${planet.size * 0.8}px`,
              height: `${planet.size * 0.8}px`,
              boxShadow: `0 0 ${planet.size/3}px rgba(255, 255, 255, 0.2), inset 0 0 ${planet.size/5}px rgba(0, 0, 0, 0.2)`,
            }}
          >
            <div className="scale-75">
              {planet.icon}
            </div>
            
            {/* Planet Ring - More subtle */}
            <div 
              className="absolute border border-white/20 rounded-full opacity-50"
              style={{
                width: `${planet.size * 1.2}px`,
                height: `${planet.size * 0.25}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotateX(75deg)',
              }}
            />
          </div>
          
          {/* Orbiting Satellites - Smaller and more subtle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"
            style={{
              animation: `orbit ${parseInt(planet.orbitDuration) / 2}s linear infinite`,
            }}
          >
            <div 
              className="w-1.5 h-1.5 bg-white rounded-full shadow-sm"
              style={{
                transform: `translateX(${planet.size * 0.6}px)`,
              }}
            />
          </div>
        </div>
      ))}

      {/* Central Sun - Much more subtle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="relative">
          {/* Sun Glow - Very subtle */}
          <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-yellow-400/30 via-orange-500/20 to-red-500/20 rounded-full blur-2xl opacity-30 animate-pulse" />
          
          {/* Sun Body - Smaller and more transparent */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-300/60 via-orange-400/50 to-red-500/50 rounded-full flex items-center justify-center shadow-lg opacity-60">
            <div className="flex items-center justify-center space-x-1 scale-75">
              <Monitor className="w-3 h-3 text-white" />
              <GitBranch className="w-3 h-3 text-white" />
              <Zap className="w-3 h-3 text-white" />
            </div>
            
            {/* Solar Flares - Much more subtle */}
            <div className="absolute inset-0 rounded-full opacity-40">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-6 bg-gradient-to-t from-orange-400/50 to-transparent"
                  style={{
                    top: '-12px',
                    left: '50%',
                    transformOrigin: '50% 32px',
                    transform: `translateX(-50%) rotate(${i * 60}deg)`,
                    animation: `flicker 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Constellation Lines - Much more subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="constellation" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Connect some planets with constellation lines */}
        <line x1="20%" y1="15%" x2="50%" y2="50%" stroke="url(#constellation)" strokeWidth="0.5" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;6" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="70%" y1="30%" x2="50%" y2="50%" stroke="url(#constellation)" strokeWidth="0.5" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;6" dur="5s" repeatCount="indefinite" />
        </line>
        <line x1="80%" y1="60%" x2="50%" y2="50%" stroke="url(#constellation)" strokeWidth="0.5" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;6" dur="4.5s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(-100px) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateX(-50px) translateY(-50px) scale(1);
            opacity: 0.6;
          }
          90% {
            transform: translateX(calc(100vw + 50px)) translateY(calc(100vh + 50px)) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-4px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(-0.5deg);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes flicker {
          0%, 100% {
            opacity: 0.4;
            transform: translateX(-50%) rotate(var(--rotation)) scaleY(1);
          }
          50% {
            opacity: 0.6;
            transform: translateX(-50%) rotate(var(--rotation)) scaleY(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;