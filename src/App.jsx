import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Robot from './components/Robot';
import Skills from './components/Skills';
import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-x-hidden relative">
      {/* Professional Space Background */}
      <SpaceBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Robot />
      </div>
    </div>
  );
}

export default App;