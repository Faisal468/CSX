import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, GraduationCap, Calculator, Palette, Settings, BarChart, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WebApp from '../assets/Webapp.jpg';
import Mobile from '../assets/mobile1.jpg'
import AI from '../assets/AIC1.jpg';
import Analytics from '../assets/analytics1.jpg';
import UIUX from '../assets/uiux1.jpg';
import Acad from '../assets/Acad1.jpg';
import Matlab from '../assets/matlab1.png';
import Ansys from '../assets/ansys.png';
import Management from '../assets/pm1.jpg';
import board from '../assets/board.jpg';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'web-apps',
      title: 'Web Development Services',
      description: 'We engineer responsive, scalable, and performance-driven websites that combine advanced automation, powerful functionality, and analytical tools. By prioritizing seamless integration and a user-first approach, we empower businesses to deliver exceptional digital experiences.',
      icon: Code,
      features: ['React/Vue/Angular Development', 'Node.js Backend Solutions', 'Database Integration'],
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', '+3 more'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting from $5,000',
      image: WebApp
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development Services',
      description: 'We create innovative, user-centric apps that set new industry standards, combining intuitive design with unbeatable performance to drive success across all devices. By adopting advanced technologies, we help businesses stay competitive in the mobile-first world.',
      icon: Smartphone,
      features: ['Cross-platform Development', 'Native iOS Development', 'Native Android Development'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
      price: 'Starting from $8,000',
      image: Mobile
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning Services',
      description: 'Our AI solutions harness the power of machine learning to transform raw data into intelligent insights and automated processes. We build custom AI models that adapt to your business needs, enabling smarter decision-making and operational efficiency.',
      icon: Brain,
      features: ['Machine Learning Models', 'Deep Learning Solutions', 'Natural Language Processing'],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', '+2 more'],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting from $10,000',
      image: AI
    },
    {
      id: 'academiax',
      title: 'Educational Technology Services',
      description: 'Academiax provides specialized IT courses, informative seminars, and interactive webinars and workshops on emerging tech trends. In collaboration with universities, we equip students with industry-relevant skills and support research initiatives to promote academic and professional growth.',
      icon: GraduationCap,
      features: ['Learning Management Systems', 'Student Information Systems', 'Online Assessment Tools'],
      technologies: ['Zoom', 'Google meet', 'MS Teams', 'Turnitin', 'Quilbot', 'Endnote'],
      color: 'from-orange-500 to-red-500',
      price: 'Starting from $7,000',
      image: Acad
    },
    {
      id: 'matlab',
      title: 'MATLAB Simulation Services',
      description: 'Our MATLAB simulation services provide powerful computational solutions for complex engineering and scientific challenges. We develop custom simulations that model real-world systems with precision, enabling accurate analysis and optimization.',
      icon: Calculator,
      features: ['Mathematical Modeling', 'Simulation Design', 'Data Analysis & Visualization'],
      technologies: ['MATLAB', 'Simulink', 'Python', 'R', 'Octave'],
      color: 'from-indigo-500 to-purple-500',
      price: 'Starting from $3,000',
      image: Matlab
    },
    {
      id: 'uiux',
      title: 'UI/UX Design Services',
      description: 'Our design team crafts visually stunning and highly functional user interfaces that elevate digital experiences. We combine aesthetic excellence with user psychology to create designs that are not only beautiful but also intuitive and effective.',
      icon: Palette,
      features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      color: 'from-pink-500 to-rose-500',
      price: 'Starting from $2,500',
      image: UIUX
    },
    {
      id: 'ansys',
      title: 'Engineering Design and  Simulation Services',
      description: 'Our engineering simulation services provide detailed insights into product performance before physical prototyping. We use advanced CAD and simulation tools to optimize designs, reduce development costs, and accelerate time-to-market. FEA, CFD and all other types of simulations would be done',
      icon: Settings,
      features: ['3D CAD Modeling', 'Finite Element Analysis', 'Fluid Dynamics Simulation'],
      technologies: ['ANSYS', 'SolidWorks', 'AutoCAD', 'CATIA', 'Fusion 360', 'Autodesk inventor', 'Comsol'],
      color: 'from-teal-500 to-cyan-500',
      price: 'Starting from $4,000',
      image: Ansys
    },
    {
      id: 'analytics',
      title: 'Data Analytics Services',
      description: 'Our data analytics solutions transform complex information into clear, actionable insights. We build custom dashboards and reporting systems that help businesses make data-driven decisions and identify growth opportunities.',
      icon: BarChart,
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics'],
      technologies: ['Python', 'R', 'Tableau', 'Power BI', '+2 more'],
      color: 'from-yellow-500 to-orange-500',
      price: 'Starting from $6,000',
      image: Analytics
    },
    {
      id: 'management',
      title: 'Project Management Services',
      description: 'Our project management solutions streamline complex workflows and enhance team collaboration. We develop custom tools that provide real-time visibility into project status, resource allocation, and performance metrics.',
      icon: Briefcase,
      features: ['Task Management', 'Team Collaboration', 'Resource Planning'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      color: 'from-slate-500 to-gray-500',
      price: 'Starting from $5,500',
      image: Management
    }
  ];

  // Filter out any incomplete service entries
  const validServices = services.filter(service => service.title && service.description);

  // Define a type for the service prop
  type Service = {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    features: string[];
    technologies: string[];
    color: string;
    price: string;
    image: string;
  };

  // Compact service card component with alternating layout
  const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const isEven = index % 2 === 0;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div 
          ref={cardRef}
          className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-black rounded-lg overflow-hidden relative group`}
          onMouseMove={handleMouseMove}
        >
          {/* Blue glow effect that follows cursor */}
          <div 
            className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: 'radial-gradient(circle, rgba(0,180,255,0.3) 0%, rgba(0,180,255,0) 70%)',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              left: `${mousePosition.x - 75}px`,
              top: `${mousePosition.y - 75}px`,
              transform: 'translate(0, 0)',
              mixBlendMode: 'screen'
            }}
          ></div>
          
          {/* Matrix-like dots pattern overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0,180,255,0.15) 1px, transparent 1px)`,
                backgroundSize: '15px 15px',
                backgroundPosition: `${mousePosition.x / 10}px ${mousePosition.y / 10}px`
              }}
            ></div>
          </div>
          
          {/* Content Side */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center relative z-20">
            <h2 className="text-xl font-bold text-white mb-1">{service.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{service.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-cyan-400 border border-cyan-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <Link to={`/services/${service.id}`} className="mt-auto">
              <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center w-24">
                <span>Get Started</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </Link>
          </div>
          
          {/* Image Side */}
          <div className="md:w-1/2 h-48 md:h-auto relative z-20">
            <img 
              src={service.image || board} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pt-24 md:pt-32">
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
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Header - Increased visibility and spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive software solutions designed to transform your business and drive innovation in the digital age.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6">
          {validServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-sm mb-4 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <button className="bg-white text-black px-5 py-2 rounded-md font-medium text-sm hover:bg-opacity-90 transition-all duration-300">
                Start Your Project
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;