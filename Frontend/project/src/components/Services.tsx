import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Brain, GraduationCap, Calculator, Palette, Settings, BarChart, Briefcase, Zap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'web-apps',
      title: 'Web Apps',
      description: 'Custom web applications built with modern frameworks and technologies for optimal performance and user experience.',
      icon: Code,
      features: ['React/Vue/Angular', 'Node.js Backend', 'Database Integration', 'API Development'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user interfaces.',
      icon: Smartphone,
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai',
      title: 'AI Cutting-edge',
      description: 'Advanced AI solutions including machine learning, deep learning, and intelligent automation systems.',
      icon: Brain,
      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'academiax',
      title: 'AcademiaX',
      description: 'Educational technology solutions and learning management systems for modern academic institutions.',
      icon: GraduationCap,
      features: ['LMS Development', 'E-learning Platforms', 'Student Portals', 'Assessment Tools'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'matlab',
      title: 'MATLAB Simulations',
      description: 'Complex mathematical modeling and simulation solutions using MATLAB for engineering and research.',
      icon: Calculator,
      features: ['Mathematical Modeling', 'Simulation Design', 'Data Analysis', 'Algorithm Development'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'uiux',
      title: 'UI/UX Designing',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      icon: Palette,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'ansys',
      title: 'Ansys Solidworks',
      description: 'Engineering simulation and CAD solutions for product design and analysis.',
      icon: Settings,
      features: ['3D Modeling', 'Simulation Analysis', 'Product Design', 'Engineering Solutions'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      icon: BarChart,
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Reporting'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'management',
      title: 'Project Management',
      description: 'Comprehensive project management solutions to streamline workflows and improve productivity.',
      icon: Briefcase,
      features: ['Task Management', 'Team Collaboration', 'Resource Planning', 'Progress Tracking'],
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'bubble',
      title: 'Bubble',
      description: 'No-code application development using Bubble platform for rapid prototyping and deployment.',
      icon: Zap,
      features: ['No-code Development', 'Rapid Prototyping', 'Database Design', 'Workflow Automation'],
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-black relative overflow-hidden rounded-2xl p-6 border border-[#00b4ff]/30 hover:border-[#00b4ff] transition-all duration-300 hover:transform hover:scale-105 shadow-md"
              >
                {/* Simple matrix effect background using CSS */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
                  {/* Matrix-like dots pattern */}
                  <div className="absolute inset-0 bg-black">
                    {/* CSS grid pattern for matrix effect */}
                    <div className="absolute inset-0" 
                      style={{
                        backgroundImage: `radial-gradient(#00b4ff 1px, transparent 1px)`,
                        backgroundSize: '10px 10px',
                        opacity: 0.2
                      }}>
                    </div>

                    {/* Animated lines for added effect */}
                    <div className="absolute inset-0">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute h-px bg-[#00b4ff]/20"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 100}px`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            opacity: 0.1 + Math.random() * 0.3
                          }}
                        ></div>
                    ))}
        </div>
                  </div>
                  
                  {/* Blue gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00b4ff]/30 to-black/80"></div>
      </div>

                {/* Blue accent overlays similar to Hero component */}
                <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-[#00b4ff]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 bg-[#3b82F6]/5 rounded-full blur-3xl"></div>
                
                {/* Content container with relative positioning */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
        </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00b4ff] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#00b4ff] rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
      </div>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link to={`/services/${service.id}`} className="inline-block">
                    <button className="flex items-center space-x-2 text-[#00b4ff] hover:text-white font-medium group-hover:translate-x-1 transition-all duration-300">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
  );
          })}
        </div>  
      </div>
    </section>
  );
};

export default Services;