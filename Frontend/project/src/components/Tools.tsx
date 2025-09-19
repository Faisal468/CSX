import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tools: React.FC = () => {
  const tools = [
    { name: 'React', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', category: 'Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', category: 'AI/ML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', category: 'Language', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Trello', category: 'Management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
    { name: 'Excel', category: 'Data Analysis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftexcel/microsoftexcel-original.svg' },
    { name: 'Docker', category: 'DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Flutter', category: 'Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'TensorFlow', category: 'AI/ML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Figma', category: 'Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', category: 'Version Control', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'MS Project', category: 'Management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg' },
    { name: 'Kubernetes', category: 'DevOps', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Next.js', category: 'Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'PM', category: 'Management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'Asana', category: ' Management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/asana/asaana-original.svg' },
    { name: 'Solidworks', category: 'Engineering', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidworks/solidworks-original.svg' },
    { name: 'Matlab', category: 'Engineering', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
  ];

  // Split tools into two rows for the grid layout
  const row1 = tools.slice(0, 9);
  const row2 = tools.slice(9, 18);

  const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Database', 'Cloud', 'Mobile', 'Design', 'DevOps', 'Engineering', 'Management'];

  // State to pause animation on hover
  const [isPaused, setIsPaused] = useState(false);
  
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to check if we're on mobile
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background with vertical lines */}
      <div className="absolute inset-0 z-0">
        {/* Vertical lines pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#00b4ff]/30 to-transparent"
              style={{ 
                left: `${5 + i * 5}%`,
                opacity: 0.1 + Math.random() * 0.3
              }}
            ></div>
          ))}
        </div>

        {/* Blue glow effects */}
        <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-[#00b4ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 bg-[#3b82F6]/5 rounded-full blur-3xl"></div>
        
        {/* Additional smaller glows */}
        <div className="absolute top-3/4 left-1/4 w-1/4 h-1/4 bg-[#00b4ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-1/5 h-1/5 bg-[#00b4ff]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Technologies We <span className="bg-gradient-to-r from-[#00c3ff] to-[#0055b3] bg-clip-text text-transparent">Utilize</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry-leading tools to deliver exceptional software solutions.
          </p>
        </motion.div>

        {/* Tools Rows with Animation - Desktop Version (hidden on mobile) */}
        <div 
          className={`mb-12 overflow-hidden ${isMobile ? 'hidden' : 'block'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* First row */}
          <div className="mb-6 relative">
            <motion.div 
              className="flex gap-4"
              initial={{ x: "100%" }}
              animate={{ x: isPaused ? "auto" : "-100%" }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 25, 
                ease: "linear" 
              }}
            >
              {/* Double the items to create seamless loop */}
              {[...row1, ...row1].map((tool, index) => (
                <div
                  key={`row1-${tool.name}-${index}`}
                  className="flex-shrink-0 w-[140px] bg-[#001a2c] rounded-lg p-3 border border-[#00b4ff]/20 hover:border-[#00b4ff]/60 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 hover:scale-110 transition-transform duration-300">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#00c3ff] to-[#0055b3] rounded-lg flex items-center justify-center text-white font-bold text-base">${tool.name.charAt(0)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-[#00b4ff] font-semibold text-sm mb-0.5">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-400">{tool.category}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - same direction and speed */}
          <div className="relative">
            <motion.div 
              className="flex gap-4"
              initial={{ x: "100%" }}
              animate={{ x: isPaused ? "auto" : "-100%" }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 25, 
                ease: "linear" 
              }}
            >
              {/* Double the items to create seamless loop */}
              {[...row2, ...row2].map((tool, index) => (
                <div
                  key={`row2-${tool.name}-${index}`}
                  className="flex-shrink-0 w-[140px] bg-[#001a2c] rounded-lg p-3 border border-[#00b4ff]/20 hover:border-[#00b4ff]/60 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 hover:scale-110 transition-transform duration-300">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#00c3ff] to-[#0055b3] rounded-lg flex items-center justify-center text-white font-bold text-base">${tool.name.charAt(0)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-[#00b4ff] font-semibold text-sm mb-0.5">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-400">{tool.category}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Version (visible only on mobile) */}
        <div className={`mb-12 overflow-hidden ${isMobile ? 'block' : 'hidden'}`}>
          {/* Single row for mobile with smaller items */}
          <div className="relative">
            <motion.div 
              className="flex gap-2"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 20, // Slightly faster on mobile
                ease: "linear" 
              }}
            >
              {/* All tools in a single row for mobile */}
              {[...tools, ...tools].map((tool, index) => (
                <div
                  key={`mobile-${tool.name}-${index}`}
                  className="flex-shrink-0 w-[100px] bg-[#001a2c] rounded-lg p-2 border border-[#00b4ff]/20 text-center"
                >
                  <div className="w-8 h-8 mx-auto mb-1">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#00c3ff] to-[#0055b3] rounded-lg flex items-center justify-center text-white font-bold text-xs">${tool.name.charAt(0)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-[#00b4ff] font-semibold text-xs mb-0.5">
                    {tool.name}
                  </h3>
                  <p className="text-[10px] text-gray-400">{tool.category}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {categories.map((category) => (
            <span
              key={category}
              className={`px-3 py-1.5 bg-[#001a2c] backdrop-blur-sm rounded-full text-gray-300 border border-[#00b4ff]/20 hover:border-[#00b4ff]/60 hover:text-[#00b4ff] transition-all duration-300 cursor-pointer ${isMobile ? 'text-[10px]' : 'text-xs'}`}
            >
              {category}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;