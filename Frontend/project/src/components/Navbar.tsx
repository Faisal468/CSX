import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoo from '../assets/logoo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Smartphone, Brain, GraduationCap, Calculator, Palette, Settings, BarChart, Briefcase, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Apps', path: '/services/web-apps', icon: Code },
    { name: 'Mobile Apps', path: '/services/mobile-apps', icon: Smartphone },
    { name: 'AI Cutting-edge', path: '/services/ai', icon: Brain },
    { name: 'AcademiaX', path: '/services/academiax', icon: GraduationCap },
    { name: 'MATLAB Simulations', path: '/services/matlab', icon: Calculator },
    { name: 'UI/UX Designing', path: '/services/uiux', icon: Palette },
    { name: 'Ansys Solidworks', path: '/services/ansys', icon: Settings },
    { name: 'Data Analytics', path: '/services/analytics', icon: BarChart },
    { name: 'Project Management', path: '/services/management', icon: Briefcase },
    { name: 'Bubble', path: '/services/bubble', icon: Zap },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-46 py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-30 h-35 overflow-hidden rounded-2xl shadow-2xl">
                <img src={logoo} alt="CloudSphereX Logo" className="w-16 h-16 object-cover" />
              </div>
              <span className="text-2xl font-bold text-white">
                <span className="text-[#fffff]">CloudSphereX </span>
              </span>
            </Link> 

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-[#00b4ff]'
                      : 'text-white hover:text-[#00b4ff]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-lg bg-gray-800/50 text-white hover:text-[#00b4ff] hover:bg-gray-700/50 transition-colors duration-200"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-black shadow-2xl"
            >
              <div className="p-6">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-1">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <img src={logoo} alt="CloudSphereX Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl font-bold text-white">
                      <span className="text-[#00b4ff]">C</span>loud<span className="text-[#00b4ff]">S</span>phere<span className="text-[#00b4ff]">X</span>
                    </span>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg bg-gray-800/50 text-white hover:text-[#00b4ff] hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {/* Mobile menu content */}
                <div className="space-y-6">
                  {/* Main Navigation */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#00b4ff] uppercase tracking-wider mb-3">
                      Navigation
                    </h3>
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={toggleMenu}
                          className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            location.pathname === item.path
                              ? 'bg-[#00b4ff]/20 text-[#00b4ff]'
                              : 'text-white hover:text-[#00b4ff] hover:bg-gray-800/30'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Services */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#00b4ff] uppercase tracking-wider mb-3">
                      Services
                    </h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.name}
                            to={service.path}
                            onClick={toggleMenu}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#00b4ff] hover:bg-gray-800/30 transition-colors duration-200"
                          >
                            <Icon className="w-4 h-4" />
                            <span>{service.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;