import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedTech, setExpandedTech] = useState({});

  const categories = ['All', 'Web Development', 'App Development', 'AIML', 'Others'];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, animated portfolio website showcasing creative design and smooth interactions.",
      longDescription: "This very portfolio website featuring 3D elements, animations, and React architecture.",
      image: "/Portfolio.png",
      tech: ["React", "JavaScript", "Tailwind CSS", "Lucide", "React‑Icons"],
      github: "#",
      live: "#",
      featured: false,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Sort‑VizZ",
      description: "A visually interactive React-based sorting algorithm visualizer that dynamically animates various sorting techniques with customizable input.",
      longDescription: "Built with React‑Vite, Lucid, JavaScript, Tailwind CSS, Custom Parsing Utilities, Responsive Design",
      image: "/SortVizZ.png",
      tech: ["React", "JavaScript", "Lucide", "Tailwind CSS", "Custom Parsing Utilities", "Responsive Design"],
      github: "https://github.com/Roweet1604/SortVizZ",
      live: "https://sort-viz-z.vercel.app/",
      featured: false,
      category: "Web Development"
    }
  ];

  const featuredProjects   = projects.filter(p => p.featured);
  const filteredOtherProjects = projects
    .filter(p => !p.featured)
    .filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 z-10 relative">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-enhanced">
            My <span className="text-white font-extrabold text-4xl px-4 py-2 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-opacity-20 border border-cyan-500/30 backdrop-blur-md">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-200 text-lg mt-6 max-w-2xl mx-auto text-enhanced">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'border-cyan-400 text-cyan-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOtherProjects.map(project => {
            const isExpanded = expandedTech[project.id];
            const techToShow  = isExpanded ? project.tech : project.tech.slice(0, 3);
            const hiddenCount = project.tech.length - 3;

            return (
              <div
                key={project.id}
                className="content-enhanced rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                    >
                      <Github className="w-3 h-3" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white mb-2 text-enhanced">
                    {project.title}
                  </h4>
                  <p className="text-gray-200 text-sm mb-3 text-enhanced">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1">
                    {techToShow.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-300 text-xs rounded-full border border-cyan-400/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}

                    {/* +N more / Show less badge */}
                    {project.tech.length > 3 && (
                      <button
                        onClick={() =>
                          setExpandedTech(prev => ({
                            ...prev,
                            [project.id]: !isExpanded
                          }))
                        }
                        className="px-2 py-1 text-gray-300 text-xs hover:text-white transition"
                      >
                        {isExpanded ? 'Show less' : `+${hiddenCount} more`}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="content-enhanced rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4 text-enhanced">
              Want to see more?
            </h3>
            <p className="text-gray-200 mb-6 text-enhanced">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <a
              href="https://github.com/Roweet1604"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
