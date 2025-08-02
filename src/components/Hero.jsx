import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-enhanced">
                <span className="text-white font-extrabold text-4xl px-4 py-2 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-opacity-20 border border-cyan-500/30 backdrop-blur-md">
                  Hello, I'm
                </span>
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-enhanced">
                Rohit Raj
              </h2>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 text-enhanced">
                {/* Frontend Developer & UI/UX Enthusiast */}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              
              <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                <a
                  href="/RohitRaj_CV.pdf"
                    download
                    
              >
                Download CV
                </a>
              </button>  
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/Roweet1604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 content-enhanced rounded-full hover:bg-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/rohit-raj1604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 content-enhanced rounded-full hover:bg-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rohitdev1604@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 content-enhanced rounded-full hover:bg-pink-400/30 hover:border-pink-400/50 transition-all duration-300">
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur opacity-75 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Photo Frame */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                <img 
                  src= "/MyPicss.png"
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg rotate-12 animate-bounce shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full animate-pulse shadow-lg" />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 animate-bounce"
          >
            <span className="text-sm mb-2 text-enhanced">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;