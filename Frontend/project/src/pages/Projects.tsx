import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import P1 from '../assets/p1.jpg';
import P2 from '../assets/p2.jpeg';
import P3 from '../assets/p3.jpg';
import P4 from '../assets/p4.png';
import P5 from '../assets/image.png';
import P6 from '../assets/p6.jpg';
import P7 from '../assets/p7.jpg';
import P8 from  '../assets/p8.jpg';
import P9 from '../assets/p9.jpeg';
import P10 from '../assets/p10.jpeg';
import P11 from '../assets/p11.png';
// Import the PDF for project 9
import VehicleDynamicsPDF from '../assets/vehicle_dynamics.pdf';
import F1 from '../assets/F1 Car Chasis.pdf';
import Solar from '../assets/PM Solar.pdf';
import LED from '../assets/PM Led.pdf';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML', 'UI/UX', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'Medediai AI Healthcare Website',
      description: 'Medediai is a modern web platform designed to bridge the gap between healthcare providers and patients. The website offers an intuitive interface where users can easily access healthcare-related services, manage appointments, and explore AI-powered tools for better medical decision-making.',
      image: P1,
      category: 'Web Apps',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://medediai.com',
      githubUrl: 'https://github.com/Faisal468/medediai-website.git'
    },
    {
      id: 2,
      title: 'Ecommerce Mobile App',
      description: 'A modern, user-friendly ecommerce mobile app that enables customers to discover, search, and purchase products with a secure, seamless checkout flow.',
      image: P2,
      category: 'Mobile Apps',
      technologies: ['React Native', 'Firebase', 'Typescript', 'Expo'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Faisal468/Ecommerce-app.git'
    },
    {
      id: 3,
      title: 'Evaluation on Videos using Computer Vision',
      description: 'A computer vision project that analyzes video content to extract meaningful insights, track objects, and evaluate performance metrics using advanced machine learning algorithms.',
      image: P3,
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Numpy', 'Scikit-learn'],
       liveUrl: '#',
       githubUrl: 'https://github.com/Faisal468/Evaluation-on-Videos-using-Computer-Vision'
    },
    {
      id: 4,
      title: 'LSTM-Based Time Series Prediction Project',
      description: 'A machine learning project that utilizes Long Short-Term Memory (LSTM) networks to predict future values in time series data, demonstrating the application of deep learning techniques for forecasting.',
      image: P4,
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'LSTM Neural Networks', 'Time Series Analysis'],
       liveUrl: '#',
       githubUrl: 'https://github.com/Faisal468/LSTM-Based-Time-Series-Prediction-Project'
    },
    {
      id: 5,
      title: 'Speech Recognition Prototype using LSTM Neural Network',
      description: 'A speech recognition system that employs LSTM neural networks to accurately transcribe spoken language into text, showcasing the capabilities of deep learning in natural language processing.',
      image: P5,
      category: 'AI/ML',
      technologies: ['Dropout Regularization', 'Python','Numpy', 'TensorFlow', 'Scikit-learn'],
       liveUrl: '#',
       githubUrl: 'https://github.com/Faisal468/Speech-Recognition-Prototype-with-LSTM-Neural-Network'
    },
    {
      id: 6,
      title: 'Image Classification using Deep Learning',
      description: 'This project implements an image classification model capable of accurately categorizing images into multiple classes. It leverages convolutional neural networks (CNNs) for feature extraction and classification, trained on a labeled dataset to achieve high accuracy.',
      image: P6,
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
       liveUrl: '#',
       githubUrl: 'https://github.com/Faisal468/Image-Classification-using-Deep-Learning'
    },
    {
      id: 7,
      title: 'Real-Time Chat Application',
      description: 'A real-time chat application with features like group chats, file sharing, and message encryption.',
      image: P7,
      category: 'Web Apps',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
       liveUrl: '#',
       githubUrl: '#'
    },
    {
      id: 8,
      title: 'Static Structural Analysis of an F1 Car Chassis Using SOLIDWORKS Simulation',
      description: 'This project involved the comprehensive static structural analysis of a Formula 1 (F1) car chassis using SOLIDWORKS Simulation. The primary objective was to evaluate gravitational forces and applied external loads, to assess stress distribution, displacement, strain, and factor of safety. ',
      image: P8,
      category: 'Matlab/Ansys',
      technologies: ['CAD', 'CAE', 'SOLIDWORKS Simulation Solver'],
       liveUrl: F1,
       githubUrl: '#',
       isPdf: true
    },
    {
      id: 9,
      title: 'Exploration of Vehicle Dynamics and Control Systems Using MATLAB',
      description: 'This project involved a comprehensive exploration and analysis of hybrid electric vehicle (HEV) dynamics and control systems using MATLAB and Simulink. Application to simulate vehicle translational motion, drivetrain behavior, powertrain controllers, and environmental factors. ',
      image: P9,
      category: 'Matlab/Simulink',
      technologies: ['Hybrid Electric Vehicle Input Power-Split Reference Application', 'D/3D plotting', ],
      liveUrl: VehicleDynamicsPDF, // Using the imported PDF file
      githubUrl: '#',
      isPdf: true // Add a flag to identify this as a PDF link
    },
    {
      id: 10,
      title: 'Project Management for the Development of a Self-Balancing Electric Scooter',
      description: 'This comprehensive project management plan outlines the end-to-end process for developing an innovative, self-balancing electric scooter prototype. The plan details the project initiation, including clear objectives focused on safety, battery optimization, and lightweight design, and defines the in-scope and out-of-scope activities. ',
      image: P10,
      category: 'Project Management',
      technologies: ['WBS', 'RBS', 'Gantt Chart Scheduling', 'RACI Matrix'],
       liveUrl: Solar,
       githubUrl: '#',
       isPdf: true
    },
    {
      id: 11,
      title: 'Project Management Plan for a Solar-Powered LED Street Lighting System in Bahrain',
      description: 'This project management plan outlines the development and implementation of a solar-powered LED street lighting system in Bahrain. The plan includes project objectives, scope, deliverables, and a detailed work breakdown structure (WBS) to ensure efficient execution and successful completion.',
      image: P11,
      category: 'Project Management',
      technologies: ['WBS', 'Gantt Chart Scheduling', 'RACI Matrix', 'Risk Management'],
       liveUrl: LED,
       githubUrl: '#',
        isPdf: true
    },
    
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Function to handle project link clicks
  interface Project {
    isPdf?: boolean;
    liveUrl: string;
  }
  
  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    // If it's a PDF (project 9), prevent default behavior and open PDF
    if (project.isPdf) {
      e.preventDefault();
      window.open(project.liveUrl, '_blank');
    }
    // For other projects, let the default link behavior work
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to delivering exceptional software solutions.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-gray-300 mb-4">
            <Filter className="w-5 h-5" />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    onClick={(e) => handleProjectClick(e, project)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. We're excited to work on innovative projects that make a difference.
          </p>
          <Link to="/contact">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;