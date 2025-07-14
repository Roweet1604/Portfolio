import { Code, Heart, Lightbulb, Palette } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Bringing ideas to life with beautiful UI"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Finding innovative solutions to challenges"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User Focus",
      description: "Creating experiences users love"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-enhanced">
            About <span className="text-white font-extrabold text-4xl px-4 py-2 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-opacity-20 border border-cyan-500/30 backdrop-blur-md">
            Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="content-enhanced rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-3xl font-semibold text-white mb-4 text-enhanced">
                  Passionate Frontend Developer
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6 text-enhanced">
                  I'm a Third-year Computer Science and Engineering student with a strong passion
                  for building smart, functional digital products. My journey into tech started during
                  college, and I've been fascinated by the endless possibilities of solving real-world problems through code—whether
                  it's on the web or beyond.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed text-enhanced">
                  I believe in continuous learning and staying updated with the latest technologies.
                  My goal is to create experiences that are not only visually appealing but also intelligent,
                  intuitive, and accessible to everyone.
                </p>
              </div>
              
              {/* Personal Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="content-enhanced rounded-xl p-6 border-cyan-400/30 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-200 text-enhanced">Projects Completed</div>
                </div>
                <div className="content-enhanced rounded-xl p-6 border-purple-400/30 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1+</div>
                  <div className="text-gray-200 text-enhanced">Years Learning</div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8 text-enhanced">What I Bring</h3>
              
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 content-enhanced rounded-xl hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 text-enhanced">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-enhanced">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fun Fact */}
          <div className="mt-16 text-center">
            <div className="content-enhanced rounded-2xl p-8 max-w-4xl mx-auto hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4 text-enhanced">Fun Fact</h3>
              <p className="text-gray-200 text-lg text-enhanced">
                When I'm not coding, you can find me exploring new design trends, 
                playing chess and Table Tennis, or exploring new technologies. I believe creativity 
                flows best when you have diverse interests! 🎨♟️🎮
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;