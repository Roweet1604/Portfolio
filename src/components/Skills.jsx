import {
  Bot,
  Code,
  Cpu,
  Database,
  FlameIcon,
  GitBranch,
  Globe,
  Monitor,
  Palette,
  Server,
  Smartphone,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { BiBarChart } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';

const Skills = () => {
  const LEETCODE_USER = 'roweet1604';
  const HACKERRANK_USER = 'rohitronit1212';

  const [stats, setStats] = useState({
    leetcode: { solved: 0, total: 0 },
    hackerrank: { score: 0, total: 1000 },
    hackerearth: { score: 0, total: 1000 },
  });

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USER}`)
      .then((r) => r.json())
      .then((d) =>
        setStats((s) => ({
          ...s,
          leetcode: { solved: d.totalSolved, total: d.totalQuestions },
        }))
      )
      .catch(() => {});
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'React.js', icon: <Code className="w-5 h-5" />, color: 'from-blue-400 to-cyan-500' },
        { name: 'JavaScript', icon: <Cpu className="w-5 h-5" />, color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML/CSS', icon: <Monitor className="w-5 h-5" />, color: 'from-orange-400 to-red-500' },
        { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, color: 'from-cyan-400 to-teal-500' },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Node.js', icon: <Server className="w-5 h-5" />, color: 'from-green-400 to-emerald-500' },
        { name: 'Express.js', icon: <Server className="w-5 h-5" />, color: 'from-gray-500 to-gray-700' },
        { name: 'MongoDB', icon: <Database className="w-5 h-5" />, color: 'from-green-500 to-green-700' },
        { name: 'REST APIs', icon: <Globe className="w-5 h-5" />, color: 'from-purple-400 to-purple-600' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-400 to-cyan-500',
      skills: [
        { name: 'Git/GitHub', icon: <GitBranch className="w-5 h-5" />, color: 'from-orange-500 to-red-600' },
        { name: 'VS Code', icon: <Code className="w-5 h-5" />, color: 'from-blue-500 to-blue-700' },
        { name: 'Firebase', icon: <FlameIcon className="w-5 h-5" />, color: 'from-yellow-500 to-yellow-700' },
        { name: 'MySQL', icon: <SiMysql className="w-5 h-5" />, color: 'from-blue-500 to-blue-700' },
        { name: 'Power BI', icon: <BiBarChart className="w-5 h-5" />, color: 'from-yellow-500 to-yellow-700' },
        { name: 'AI Agents', icon: <Bot className="w-5 h-5" />, color: 'from-gray-600 to-gray-800' },
      ],
    },
  ];

  const otherSkills = [
    { name: 'Responsive Design', icon: <Smartphone className="w-5 h-5" />, color: 'from-green-400 to-cyan-500' },
    { name: 'UI/UX Design', icon: <Palette className="w-5 h-5" />, color: 'from-purple-400 to-pink-500' },
    { name: 'Web Performance', icon: <Globe className="w-5 h-5" />, color: 'from-blue-400 to-indigo-500' },
    { name: 'Problem Solving', icon: <Cpu className="w-5 h-5" />, color: 'from-orange-400 to-red-500' },
  ];

  // const profileData = [
  //   {
  //     name: 'LeetCode',
  //     link: `https://leetcode.com/${LEETCODE_USER}`,
  //     percentage: stats.leetcode.total ? Math.round((stats.leetcode.solved / stats.leetcode.total) * 100) : 0,
  //     gradient: 'from-[#ffa116] to-[#f89f1b]',
  //   },
  //   {
  //     name: 'HackerRank',
  //     link: `https://www.hackerrank.com/${HACKERRANK_USER}`,
  //     percentage: Math.round((stats.hackerrank.score / stats.hackerrank.total) * 100),
  //     gradient: 'from-[#2ec866] to-[#007b5e]',
  //   },
  // ];

  return (
    <section id="skills" className="min-h-screen py-20 pb-4 relative">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-enhanced">
            My{' '}
            <span className="text-white font-extrabold text-4xl px-4 py-2 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-opacity-20 border border-cyan-500/30 backdrop-blur-md">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-200 text-lg mt-6 max-w-2xl mx-auto text-enhanced">
            Here's a showcase of my technical skills and the tools I love working with
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="content-enhanced rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center mb-8">
                <div
                  className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white text-enhanced">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 group/skill"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div
                        className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg text-white group-hover/skill:scale-110 transition-transform duration-300 shadow-md`}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-white font-medium text-sm group-hover/skill:text-cyan-300 transition-colors duration-300 text-enhanced">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-8 text-enhanced">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group content-enhanced rounded-xl p-6 border-cyan-400/30 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`p-3 bg-gradient-to-r ${skill.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-white font-medium text-center text-sm text-enhanced">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Responsive flex layout for circular cards */}
        {/* <div className="mt-20 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {profileData.map(({ name, link, percentage, gradient }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-40 h-40 rounded-full flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="72" stroke="#ffffff20" strokeWidth="8" fill="none" />
                <circle
                  cx="50%"
                  cy="50%"
                  r="72"
                  stroke={`url(#grad${idx})`}
                  strokeWidth="8"
                  strokeDasharray={Math.PI * 2 * 72}
                  strokeDashoffset={Math.PI * 2 * 72 * (1 - percentage / 100)}
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id={`grad${idx}`} gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor={gradient.split(' ')[0].replace('from-[', '').replace(']', '')} />
                    <stop offset="100%" stopColor={gradient.split(' ')[1].replace('to-[', '').replace(']', '')} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center z-10">
                <p className="text-white text-xl font-bold">{percentage}%</p>
                <p className="text-white text-sm">{name}</p>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
