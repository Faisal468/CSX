import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Brain, 
  GraduationCap, 
  Calculator, 
  Palette, 
  Settings, 
  BarChart, 
  Briefcase, 
  Zap,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers', className: 'hover:text-blue-400 transition-colors duration-300' }, // Updated path and added className
    { name: 'Blogs', path: '/blog' },
  ];

  const services = [
    { name: 'Web Apps', path: '/services/web-apps', icon: Code },
    { name: 'Mobile Apps', path: '/services/mobile-apps', icon: Smartphone },
    { name: 'AI Cutting-edge', path: '/services/ai', icon: Brain },
    { name: 'Ansys Solidworks', path: '/services/ansys', icon: Settings },
    { name: 'MATLAB Simulations', path: '/services/matlab', icon: Calculator },
    { name: 'Project Management', path: '/services/management', icon: Briefcase },
    { name: 'UI/UX Designing', path: '/services/uiux', icon: Palette },
    { name: 'AcademiaX', path: '/services/academiax', icon: GraduationCap },
    { name: 'Data Analytics', path: '/services/analytics', icon: BarChart },
    { name: 'Bubble', path: '/services/bubble', icon: Zap },

  ]; 

  const socialMedia = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/share/16kybUqjj3/?mibextid=wwXIfr' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/cloud_spherex' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/cloudsphere-x' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/CloudSphereX/CloudSphere_X' },
    
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="../assets/logoo.png" 
                alt="CloudSphereX Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-white">
                CloudSphereX
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 Where Ideas Meet Technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#00c3ff] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`text-gray-400 hover:text-[#00c3ff] transition-colors duration-200 text-sm ${link.className || ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#00c3ff] mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-[#00c3ff] transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-[#00c3ff] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 text-[#00c3ff] mr-2 flex-shrink-0" />
                <span className="text-sm">+92 342 6069324</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 text-[#00c3ff] mr-2 flex-shrink-0" />
                <a 
                  href="mailto:cloudspherextech0@gmail.com" 
                  className="hover:text-[#00c3ff] transition-colors duration-200 text-sm"
                >
                  cloudspherextech0@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 text-[#00c3ff] mr-2 flex-shrink-0" />
                <a 
                  href="/contact" 
                  className="hover:text-[#00c3ff] transition-colors duration-200 text-sm"
                >
                  Book a free discovery call
                </a>
              </li>
              
              {/* Social Media Icons */}
              <li className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Follow Us</p>
                <div className="flex space-x-3">
                  {socialMedia.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#00c3ff] transition-colors duration-200"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" /> 
                    </a>
                  ))}
                </div> 
              </li>
            </ul>
          </div> 
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            CloudSphereX © {new Date().getFullYear()}. All rights reserved
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-[#00c3ff] transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-500 hover:text-[#00c3ff] transition-colors duration-200 text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;