import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Heart, Zap, ArrowUpRight } from 'lucide-react';
import Ahmad from '../assets/ahmad.png';
import sundus from '../assets/sundus.png';
import muaz from '../assets/muaz.png';
import Faisal from '../assets/Faisal.png';
import Shuja from '../assets/Shuja.png';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver innovative solutions.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'We are committed to delivering high-quality software that exceeds expectations and stands the test of time.'
    },    
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners to achieve shared success.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'We optimize processes and leverage automation to deliver projects faster without compromising quality.'
    }
  ];

  const team = [
    {
      name: 'Muhammad Ahmad',
      position: 'Founder',
      image: Ahmad,
      bio: '4+ years in software development and business strategy',
      link: 'https://www.linkedin.com/in/muhammad-ahmad-a160ab375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: 'Sundas Ibrar',
      position: 'Founder',
      image: sundus,
      bio: '5+ years in AI/ML and system architecture',
      link: 'https://www.linkedin.com/in/sundas-i-224510242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: 'Muaz Ahmad Siddiqui',
      position: 'Founder',
      image: muaz,
      bio: '3+ Years in Mechanical Engineering | Project Management | SOLIDWORKS & ANSYS Expert',
      link: 'https://www.linkedin.com/in/muaz9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: 'Muhammad Faisal',
      position: 'Web Developer',
      image:  Faisal,
      bio: 'Web Development Expert | 1+ Years of Experience in Building Scalable & Responsive Web Applications',
      link: 'https://www.linkedin.com/in/faisal441900?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: 'Shujah Ahmad Siddiqui',
      position: 'Graphic Designer',
      image: Shuja,
      bio: 'Graphic Designer | 2+ Years of Experience in Creating Visual Concepts & Branding',
      link: 'https://www.linkedin.com/in/shujah-ahmed-b52bb3375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pt-20">
      {/* Background with vertical lines and blue overlay */}
      <div className="absolute inset-0 z-0">
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
        
        <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-[#00b4ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 bg-[#3b82F6]/5 rounded-full blur-3xl"></div>
        
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
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
            About CloudSphereX
          </h1>
          <p className="text-xl text-black-300 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and innovators dedicated to transforming businesses through cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group bg-black relative overflow-hidden rounded-3xl p-8 border border-[#00b4ff]/30 hover:border-[#00b4ff] transition-all duration-300"
          >
            {/* Matrix effect background using CSS */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
              {/* Matrix-like dots pattern */}
              <div className="absolute inset-0 bg-[#001830]">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#001830]/90 to-[#003366]/80"></div>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
              At CloudSphereX, we exist to redefine the digital landscape by blending creativity, technology, and strategy. Our mission is to empower businesses, innovators, and educators with cutting edge solutions from AI driven platforms and next gen web & mobile apps to engineering simulations, no-code development, and data-powered insights. We don't just build technology. we craft experiences that spark growth and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group bg-black relative overflow-hidden rounded-3xl p-8 border border-[#00b4ff]/30 hover:border-[#00b4ff] transition-all duration-300"
          >
            {/* Matrix effect background using CSS */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
              {/* Matrix-like dots pattern */}
              <div className="absolute inset-0 bg-[#001830]">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#001830]/90 to-[#003366]/80"></div>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
              We envision CloudSphereX as a global hub of innovation where business, academia, and technology converge to create solutions that inspire, transform, and last. Our
              vision is simple yet bold: to make advanced technology accessible and meaningful, driving a smarter, more connected future for everyone.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-black text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-black relative overflow-hidden rounded-2xl p-6 border border-[#00b4ff]/30 hover:border-[#00b4ff] transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  {/* Matrix effect background using CSS */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
                    {/* Matrix-like dots pattern */}
                    <div className="absolute inset-0 bg-[#001830]">
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
                        {[...Array(5)].map((_, i) => (
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#001830]/90 to-[#003366]/80"></div>
                  </div>

                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">{value.title}</h3>
                  <p className="text-gray-300 relative z-10">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-black text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-black rounded-2xl overflow-hidden group cursor-pointer h-[400px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Top-left name + position */}
                <div className="absolute top-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-[#00b4ff] text-2xl font-medium">{member.name.split(' ')[0]}</span>
                  <h3 className="text-white text-3xl font-bold">{member.name.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-white mt-1">{member.position}</p>
                </div>

                {/* Bottom blue bar with Bio + LinkedIn link */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#00b4ff] h-32 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center px-6">
                  <p className="text-white bold text-sm mb-3">{member.bio}</p>
                  <div className="flex justify-start">
                    <a 
                      href={member.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group bg-black relative overflow-hidden rounded-3xl p-12 border border-[#00b4ff]/30 hover:border-[#00b4ff] transition-all duration-300 text-center"
        >
          {/* Matrix effect background using CSS */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
            {/* Matrix-like dots pattern */}
            <div className="absolute inset-0 bg-[#001830]">
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
                {[...Array(15)].map((_, i) => (
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#001830]/90 to-[#003366]/80"></div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-12 relative z-10">Our Journey in Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">4+</div>
              <div className="text-white">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-white">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-white">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">97%</div>
              <div className="text-white">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;