import React, { useState, } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      // position: 'CEO',
      company: 'Formula SAE Research Group',
      rating: 5,
      comment: 'The MATLAB project for the FSAE race car provided an excellent platform for simulating crash analysis, torsion rigidity tests, and static structural analysis. It helped our team optimize chassis design, improve safety measures, and validate results before manufacturing, saving us time and resources while boosting overall performance.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      // position: 'CTO',
      company: 'DataFlow Systems',
      rating: 5,
      comment: 'The web development project exceeded our expectations. The website is fast, responsive, and user-friendly. The team implemented modern UI/UX principles, optimized performance, and ensured smooth functionality across all devices, which significantly improved our online presence.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Mahnoor Fatima',
      position: 'Product Manager',
      company: 'Sillicom Solutions',
      rating: 5,
      comment: 'Using Trello for project management completely streamlined our workflow. The boards and task automation made it easy to track progress, assign responsibilities, and meet deadlines. Collaboration improved across the team, and productivity increased noticeably.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'David Thompson',
      // position: 'Founder',
      company: 'ShopEase Pvt. Ltd.',
      rating: 5,
      comment: 'The AI-powered e-commerce chatbot transformed our customer experience. It handles product inquiries, order tracking, and personalized recommendations 24/7. Our response time dropped drastically, customer satisfaction improved, and sales conversion rates increased significantly',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      // position: 'Director',
      company: 'Buyonix Store',
      rating: 5,
      comment: 'The e-commerce app development project was a complete success. The app is smooth, visually appealing, and offers seamless navigation with secure payment integration. Our customers love the user experience, and we have seen a significant boost in engagement and sales since launch.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'James Wilson',
       position: 'VP Engineering',
      company: 'DesignHub Engineering',
      rating: 5,
      comment: 'The asynchronous SolidWorks project collaboration made our design process much more efficient. Team members could work on assemblies and parts independently, merge updates seamlessly, and avoid version conflicts. This improved productivity and shortened our overall design cycle.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  // State to track cursor position for each review card
  const [cursorPositions, setCursorPositions] = useState<{[key: number]: {x: number, y: number, active: boolean}}>({});
  
  // Function to handle mouse movement on a review card
  const handleMouseMove = (e: React.MouseEvent, reviewId: number) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    setCursorPositions(prev => ({
      ...prev,
      [reviewId]: { x, y, active: true }
    }));
  };

  // Function to handle mouse leave
  const handleMouseLeave = (reviewId: number) => {
    setCursorPositions(prev => ({
      ...prev,
      [reviewId]: { ...prev[reviewId], active: false }
    }));
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client <span className="bg-gradient-to-r from-[#00c3ff] to-[#0055b3] bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-[#00b4ff]/20 hover:border-[#00b4ff]/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, review.id)}
              onMouseLeave={() => handleMouseLeave(review.id)}
            >
              {/* Cursor spotlight effect */}
              {cursorPositions[review.id]?.active && (
                <div 
                  className="absolute pointer-events-none bg-[#00b4ff]/20 w-40 h-40 rounded-full blur-3xl transition-transform duration-100 ease-out"
                  style={{ 
                    left: cursorPositions[review.id]?.x - 80, 
                    top: cursorPositions[review.id]?.y - 80,
                    opacity: 0.6,
                    transform: 'translate(0, 0)'
                  }}
                />
              )}
              
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-[#00b4ff]/30">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{review.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 relative z-10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00b4ff]/30"
                />
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {review.position} at {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div 
            className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-[#00b4ff]/20 inline-block relative overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, 999)}
            onMouseLeave={() => handleMouseLeave(999)}
          >
            {/* Cursor spotlight effect */}
            {cursorPositions[999]?.active && (
              <div 
                className="absolute pointer-events-none bg-[#00b4ff]/20 w-40 h-40 rounded-full blur-3xl transition-transform duration-100 ease-out"
                style={{ 
                  left: cursorPositions[999]?.x - 80, 
                  top: cursorPositions[999]?.y - 80,
                  opacity: 0.6,
                  transform: 'translate(0, 0)'
                }}
              />
            )}
            
            <div className="flex items-center justify-center space-x-2 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-3xl font-bold text-white mb-2 relative z-10">4.7/5.0</div>
            <div className="text-gray-400 relative z-10">Average rating from 500+ clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;