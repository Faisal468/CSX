import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Smartphone, Brain, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  technologies: string[];
  price: string; 
  detailedDescription: string;
  process: { title: string; description: string }[];
  casestudy?: { title: string; description: string; results: string[] };
  faq: { question: string; answer: string }[]; 
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  description,
  icon: Icon,
  color,
  features,
  technologies,
  price,
  detailedDescription,
  process,
  casestudy,
  faq
}) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Background with vertical lines and blue overlay */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          >
          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
              </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            {title} <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
              </p>
          <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-500/20">
            <p className="text-cyan-400 font-semibold">{price}</p>
            </div>
          </motion.div>
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Column - Detailed Description */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2 space-y-10"
        >
            {/* Overview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="text-gray-300 space-y-4">
                {detailedDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Development Process */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Our Development Process</h2>
              <div className="space-y-8">
                {process.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold">{idx + 1}</span>
          </div>
      </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study (if available) */}
            {casestudy && (
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Case Study: {casestudy.title}</h2>
                <p className="text-gray-300 mb-6">{casestudy.description}</p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Results:</h3>
                <ul className="space-y-2">
                  {casestudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faq.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.question}</h3>
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features, Technologies, CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-400 border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">
                Contact us today to discuss your {title.toLowerCase()} project and get a free consultation.
              </p>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent flex items-center justify-center">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>

            {/* Related Services */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Related Services</h2>
              <ul className="space-y-4">
                {id !== 'web-apps' && (
                  <li>
                    <Link to="/services/web-apps" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      <Code className="w-5 h-5 mr-2" />
                      <span>Web Applications</span>
                    </Link>
                  </li>
                )}
                {id !== 'mobile-apps' && (
                  <li>
                    <Link to="/services/mobile-apps" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      <Smartphone className="w-5 h-5 mr-2" />
                      <span>Mobile Applications</span>
                    </Link>
                  </li>
                )}
                {id !== 'ai' && (
                  <li>
                    <Link to="/services/ai" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      <Brain className="w-5 h-5 mr-2" />
                      <span>AI & Machine Learning</span>
                    </Link>
                  </li>
                )}
                {id !== 'uiux' && (
                  <li>
                    <Link to="/services/uiux" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      <Palette className="w-5 h-5 mr-2" />
                      <span>UI/UX Design</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Let's Build Your Next {title} Project Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you turn your vision into reality. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-[00b4ff] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent flex items-center justify-center">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </Link>
            <Link to="/services">
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Explore Other Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;