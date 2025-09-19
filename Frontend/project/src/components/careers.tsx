import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import your images here - adjust the paths as needed
// import heroImg from '../assets/career-hero.jpg';
import teamImg1 from '../assets/teamImg1.png';
import teamImg2 from '../assets/teamImg2.png';
import teamImg3 from '../assets/teamImg3.png';
import teamImg4 from '../assets/teamImg4.png';
import teamImg5 from '../assets/teamImg5.png';
import teamImg6 from '../assets/teamImg6.png';
import teamImg7 from '../assets/teamImg7.png';
import teamImg8 from '../assets/teamImg8.png';
import teamImg9 from '../assets/teamImg9.jpg';
import teamImg10 from '../assets/teamImg10.png';


const Careers: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to track which set of images to display
  const [imageIndex, setImageIndex] = useState(0);
  const teamImages = [teamImg9, teamImg2, teamImg3, teamImg4, teamImg5, teamImg6, teamImg7, teamImg8, teamImg1, teamImg10];
  const imagesPerPage = 4; // Number of images to show at once
  
  // Calculate total number of pages
  const totalPages = Math.ceil(teamImages.length / imagesPerPage);
  
  // Handle navigation
  const handlePrev = () => {
    setImageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setImageIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  // Get current images to display
  const getCurrentImages = () => {
    const startIndex = (imageIndex * imagesPerPage) % teamImages.length;
    const endIndex = Math.min(startIndex + imagesPerPage, teamImages.length);
    return teamImages.slice(startIndex, endIndex);
  };

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900">
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        {/* <img 
          src={heroImg} 
          alt="Join our team" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        /> */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join us and be a part of the <span className="text-blue-400">Next Gen Innovation</span> <br />
            That is shaping the future
          </motion.h1>
          <motion.p 
            className="text-lg max-w-2xl mb-8 text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At CloudSphereX, we're building solutions that redefine industries. Join our team where innovation meets impact, and your ideas can change the world.
          </motion.p>
          {/* <motion.button 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            
          </motion.button> */}
        </div>
      </div>

      {/* Image Gallery Strip with Navigation Arrows */}
      <div className="w-full py-4 bg-grey-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button 
              onClick={handlePrev}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full mr-4 focus:outline-none"
              aria-label="Previous images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Images */}
            <div className="flex space-x-4 overflow-hidden">
              {getCurrentImages().map((img, index) => (
                <motion.img 
                  key={index}
                  src={img} 
                  alt={`Team ${imageIndex * imagesPerPage + index + 1}`} 
                  className="h-48 w-auto object-cover rounded"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                />
              ))}
            </div>
            
            {/* Right Arrow */}
            <button 
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full ml-4 focus:outline-none"
              aria-label="Next images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setImageIndex(idx)}
                className={`h-2 w-2 mx-1 rounded-full ${
                  idx === imageIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to image set ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Company Culture Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white justify-center text-center">
              Company Culture at CloudSphereX
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Collaborative Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We foster an environment where ideas flow freely, and collaboration drives breakthrough innovations that solve real-world challenges.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Work-Life Balance & Flexibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe in sustainable success. Our flexible work arrangements and focus on well-being help our team members thrive both professionally and personally.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Diversity & Inclusion</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our strength comes from our differences. We actively cultivate an inclusive workplace where diverse perspectives drive innovation and create better solutions.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Empowering to Lead</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Everyone at CloudSphereX is empowered to take ownership, make decisions, and lead initiatives that drive our company forward and shape their own career paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Advancement Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">
                Career Advancement<br />
                Opportunities You Get Here
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-gray-700 rounded-lg p-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-900 font-bold">01</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Learning & Ongoing Development</h3>
                  <p className="text-gray-300">
                    Access to cutting-edge training, workshops, conferences, and education allowances to keep your skills sharp and relevant.
                  </p>
                </div>
                
                <div className="border border-gray-700 rounded-lg p-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-900 font-bold">02</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Clear & Leadership Growth</h3>
                  <p className="text-gray-300">
                    Transparent career paths with opportunities to lead projects, teams, and initiatives based on your interests and strengths.
                  </p>
                </div>
                
                <div className="border border-gray-700 rounded-lg p-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-900 font-bold">03</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cross-Team Collaboration</h3>
                  <p className="text-gray-300">
                    Work across departments and disciplines to gain diverse experience and broaden your professional perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Showcase Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Passionate, Driven, United
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our team is a close-knit family of creative minds, problem solvers, and forward-thinkers, 
              united by a shared passion for turning bold ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto">
            <div className="col-span-4 bg-green-700 rounded-lg p-6 flex items-center justify-center text-white">
              <div className="text-center">
                <span className="text-4xl font-bold">100+</span>
                <p className="mt-2">Team Members</p>
              </div>
            </div>
            
            <div className="col-span-4 rounded-lg overflow-hidden">
              <img src={teamImg1} alt="Team" className="w-full h-full object-cover" />
            </div>
            
            <div className="col-span-4 rounded-lg overflow-hidden">
              <img src={teamImg2} alt="Team" className="w-full h-full object-cover" />
            </div>
            
            <div className="col-span-8 rounded-lg overflow-hidden">
              <img src={teamImg3} alt="Team" className="w-full h-full object-cover" />
            </div>
            
            <div className="col-span-4 bg-gray-900 rounded-lg p-6 flex items-center justify-center text-white">
              <div className="text-center">
                <span className="text-4xl font-bold">50+</span>
                <p className="mt-2">Projects Delivered</p>
              </div>
            </div>
            
            <div className="col-span-4 rounded-lg overflow-hidden">
              <img src={teamImg4} alt="Team" className="w-full h-full object-cover" />
            </div>
            
            <div className="col-span-4 rounded-lg overflow-hidden">
              <img src={teamImg5} alt="Team" className="w-full h-full object-cover" />
            </div>
            
            <div className="col-span-4 rounded-lg overflow-hidden">
              <img src={teamImg6} alt="Team" className="w-full h-full object-cover" />
            </div>
            
            <div className="col-span-4 bg-green-700 rounded-lg p-6 flex items-center justify-center text-white">
              <div className="text-center">
                <span className="text-4xl font-bold">35+</span>
                <p className="mt-2">Global Partners</p>
              </div>
            </div>
            
            <div className="col-span-4 rounded-lg overflow-hidden">
              <img src={teamImg7} alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Be a Part of Our Vision
            </h2>
            <p className="text-lg mb-8">
              Explore our current openings and find where your talents and passions align with our mission to transform industries through innovation.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">AWS Data Engineer</h3>
                  <p className="text-gray-300">
                    Design and implement scalable data solutions using AWS services to help our clients harness the power of their data.
                  </p>
                </div>
                <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 flex items-center">
                  Apply
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">UX/UI Designer</h3>
                  <p className="text-gray-300">
                    Create intuitive, engaging user experiences that make complex technologies accessible and delightful to use.
                  </p>
                </div>
                <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 flex items-center">
                  Apply
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
                  <p className="text-gray-300">
                    Build end-to-end solutions that power innovative applications and services for our global clients.
                  </p>
                </div>
                <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 flex items-center">
                  Apply
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Careers;