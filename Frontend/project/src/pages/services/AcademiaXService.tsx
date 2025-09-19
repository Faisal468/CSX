import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, CheckCircle, Code, Smartphone, Brain, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import web1 from '../../assets/web1.png';
import web2 from '../../assets/web2.png';
import web3 from '../../assets/web3.png';
import web4 from '../../assets/web4.png';

const AcademiaXService: React.FC = () => {
  const id = "academiax";
  const title = "AcademiaX";
  const description = "Delivers comprehensive academic solutions including seminars, webinars, research writing, thesis     development, publication support, and specialized course offerings.";
  const Icon = GraduationCap;
  const color = "from-orange-500 to-red-500";
  const features = [
    'Academic Seminars & Webinars',
    'Research Writing Services',
    'Thesis Development',
    'Publication Support',
    'Specialized Academic Courses',
    'Tailored Academic Solutions',
    'Virtual Accessibility',
   
  ];
  const technologies = [
    'Zoom',
    'MS Teams',
    'Google meet',
    'Canvas',
    'Turnitin',
    'Quilbot',
    'Tableau',
    'MS Visio',
    'MS Suite Office',
    'EndNote',
    
  ];
  const price = "";
  const detailedDescription = `Cloudspherex, through its dedicated platform AcademiaX, offers a comprehensive suite of academic services tailored to support students, researchers, and professionals. Our offerings include expert-led seminars and webinars on academic and research-oriented topics, high-quality research writing and thesis development services, end-to-end support for research publication in reputed journals, and a range of specialized academic courses designed to enhance scholarly and professional growth. With a focus on academic excellence and integrity, AcademiaX empowers learners and researchers at every stage of their academic journey.`;
  
  const process = [
    {
      title: 'Educational Needs Assessment',
      description: 'We begin by understanding your institutions specific educational and administrative needs, including current challenges, workflows, and goals for digital transformation.'
    },
    {
      title: 'User Research',
      description: 'We conduct research with administrators, educators, students, and parents to understand their needs, pain points, and preferences for educational technology solutions.'
    },
    {
      title: 'Solution Architecture',
      description: 'We design a comprehensive architecture for your educational platform, including data models, integration points with existing systems, and security measures to protect sensitive student information.'
    },
    {
      title: 'UI/UX Design',
      description: 'Our designers create intuitive interfaces tailored to different user roles (administrators, teachers, students, parents), ensuring ease of use and accessibility for all users.'
    },
    {
      title: 'Development',
      description: 'We build your educational platform using modern technologies and frameworks, implementing features such as course management, assessment tools, communication systems, and reporting capabilities.'
    },
    {
      title: 'Integration',
      description: 'We integrate your platform with existing school systems and third-party educational tools, ensuring seamless data flow and consistent user experiences across your digital ecosystem.'
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'We conduct thorough testing with real users from your institution to ensure the platform meets educational requirements, functions correctly, and provides a positive user experience.'
    },
    {
      title: 'Training & Implementation',
      description: 'We provide comprehensive training for administrators, teachers, students, and parents, along with documentation and support materials to ensure successful adoption of the new system.'
    }
  ];
  
  const casestudy = {
    title: 'Comprehensive LMS for a Private University',
    description: 'We developed a custom learning management system for a private university with 5,000+ students. The university needed a modern, integrated platform to replace several disconnected systems they were using for course management, student assessments, and communication. Our solution provided a unified platform that streamlined administrative processes and enhanced the learning experience.',
    results: [
      'Reduced administrative workload by 40% through automation of routine tasks',
      'Increased student engagement by 35% as measured by platform activity metrics',
      'Improved course completion rates by 25% through better progress tracking and intervention tools',
      'Saved the university $120,000 annually by replacing multiple licensed software systems',
      '92% satisfaction rate among faculty after the first semester of implementation'
    ]
  };
  
  const faq = [
    {
      question: 'Can your educational platforms integrate with our existing school management systems?',
      answer: 'Yes, our AcademiaX solutions are designed to integrate with most common school management systems, student information systems, and other educational tools. We can develop custom integrations with your existing infrastructure to ensure seamless data flow and consistent user experiences.'
    },
    {
      question: 'How do you ensure data privacy and security for student information?',
      answer: 'We implement robust security measures including data encryption, secure authentication, role-based access controls, and regular security audits. Our solutions comply with educational data privacy regulations such as FERPA and COPPA in the US, and GDPR in Europe. We work closely with your IT team to ensure all security requirements are met.'
    },
    {
      question: 'Do your educational platforms work on mobile devices?',
      answer: 'Absolutely. Our AcademiaX solutions are built with responsive design principles, ensuring they work well on desktops, laptops, tablets, and smartphones. We also offer dedicated mobile apps for key functions, allowing students and teachers to access essential features even when they are on the go.'
    },
    {
      question: 'What kind of training and support do you provide for implementation?',
      answer: 'We provide comprehensive training programs tailored to different user groups (administrators, teachers, students, parents). This includes live training sessions, video tutorials, user guides, and knowledge bases. We also offer ongoing technical support through various channels to ensure your team can resolve issues quickly.'
    },
    {
      question: 'Can the system be customized to match our institutions branding and specific workflows?',
      answer: 'Yes, our AcademiaX solutions are highly customizable. We can adapt the user interface to match your institutions branding, modify workflows to align with your existing processes, and add custom features to address your specific requirements. The goal is to provide a solution that feels like it was built specifically for your institution.'
    }
  ];

  // Define related services that we want to show
  const relatedServices = [
    { id: 'web-apps', title: 'Web Applications', icon: Code },
    { id: 'mobile-apps', title: 'Mobile Applications', icon: Smartphone },
    { id: 'ai', title: 'AI & Machine Learning', icon: Brain },
    { id: 'uiux', title: 'UI/UX Design', icon: Palette }
  ].filter(service => service.id !== id); // Filter out the current service

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
          {price && (
            <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-500/20">
              <p className="text-cyan-400 font-semibold">{price}</p>
            </div>
          )}
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

            {/* Our Latest Webinar Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Our Latest Webinar</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img src={web1} alt="Webinar 1" className="w-full h-auto hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src={web2} alt="Webinar 2" className="w-full h-auto hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src={web3} alt="Webinar 3" className="w-full h-auto hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src={web4} alt="Webinar 4" className="w-full h-auto hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Case Study */}
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
                <button className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent flex items-center justify-center">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>

            {/* Related Services */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Related Services</h2>
              <ul className="space-y-4">
                {relatedServices.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      <service.icon className="w-5 h-5 mr-2" />
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
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
              <button className="bg-[#00b4ff] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent flex items-center justify-center">
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

export default AcademiaXService;