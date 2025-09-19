import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import images - this is the proper way to import images in React
// You'll need to add these image files to your assets folder
import webAppImg from '../assets/Webapp.jpg';
import mobileImg from '../assets/mobile.jpg';
import aiImg from '../assets/ai.jpg';
import acadImg from '../assets/acad.jpg';
import matlabImg from '../assets/matlab.jpg';
import uiuxImg from '../assets/uiux.jpg';
import ansysImg from '../assets/ansys.png';
import analyticsImg from '../assets/analytics .jpg'; // Note: fixed the space in filename
import pmImg from '../assets/pm.jpg';
import bubbleImg from '../assets/bubble.jpg';

// Define blog post and article interfaces
interface Post {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  tag: string;
}

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'articles'>('blogs');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample blog posts data - now using imported images
  const posts: Post[] = [
    {
      id: '1',
      category: 'Web Apps',
      title: 'How to Build Scalable Web Applications with CloudSphereX',
      description: 'Learn the best practices for developing scalable web applications using modern frameworks and CloudSphereX integration techniques.',
      image: webAppImg,
      date: 'August 15, 2025',
      author: 'CloudSphereX Team',
      tag: 'Web Development'
    },
    {
      id: '2',
      category: 'Mobile Apps',
      title: 'Top 10 Mobile App Development Trends for 2025',
      description: 'Discover the latest trends in mobile app development that are shaping the industry and how CloudSphereX is implementing them.',
      image: mobileImg,
      date: 'August 10, 2025',
      author: 'CloudSphereX Team',
      tag: 'Mobile Development'
    },
    {
      id: '3',
      category: 'AI cutting-edge',
      title: 'Implementing AI-Driven Solutions for Business Growth',
      description: 'Explore how cutting-edge AI technologies can transform your business operations and drive significant growth.',
      image: aiImg,
      date: 'August 5, 2025',
      author: 'CloudSphereX AI Team',
      tag: 'Artificial Intelligence'
    },
    {
      id: '4',
      category: 'AcademiaX',
      title: 'Bridging the Gap Between Academic Research and Industry Applications',
      description: 'How CloudSphereX AcademiaX is transforming theoretical research into practical industry solutions.',
      image: acadImg,
      date: 'July 28, 2025',
      author: 'AcademiaX Research Team',
      tag: 'Research & Development'
    },
    {
      id: '5',
      category: 'MATLAB Simulations',
      title: 'Advanced MATLAB Simulations for Engineering Projects',
      description: 'Learn how to leverage MATLAB simulations to solve complex engineering problems and optimize designs.',
      image: matlabImg,
      date: 'July 20, 2025',
      author: 'Engineering Team',
      tag: 'Engineering'
    },
    {
      id: '6',
      category: 'UI/UX Designing',
      title: 'Creating User-Centered Designs That Drive Engagement',
      description: 'Discover the principles of effective UI/UX design and how CloudSphereX implements them to create engaging user experiences.',
      image: uiuxImg,
      date: 'July 15, 2025',
      author: 'Design Team',
      tag: 'Design'
    }
  ];

  // Sample articles data - now using imported images
  const articles: Post[] = [
    {
      id: '7',
      category: 'Ansys Solidworks',
      title: 'Optimizing Product Design with Ansys and Solidworks',
      description: 'Technical insights into using Ansys and Solidworks for efficient product design and simulation.',
      image: ansysImg,
      date: 'August 18, 2025',
      author: 'Engineering Team',
      tag: 'Engineering'
    },
    {
      id: '8',
      category: 'Data Analytics',
      title: 'Leveraging Big Data for Strategic Business Decisions',
      description: 'An in-depth look at how data analytics can inform strategic business decisions and drive growth.',
      image: analyticsImg,
      date: 'August 12, 2025',
      author: 'Analytics Team',
      tag: 'Data Science'
    },
    {
      id: '9',
      category: 'Project Management',
      title: 'Agile Project Management for Technology Implementations',
      description: 'Best practices for managing technology projects using agile methodologies.',
      image: pmImg,
      date: 'August 8, 2025',
      author: 'Project Management Team',
      tag: 'Management'
    },
    {
      id: '10',
      category: 'Bubble',
      title: 'Building No-Code Applications with Bubble',
      description: 'How to leverage Bubble\'s no-code platform to rapidly develop and deploy web applications.',
      image: bubbleImg,
      date: 'August 1, 2025',
      author: 'Development Team',
      tag: 'No-Code Development'
    }
  ];

  // Function to handle tab change
  const handleTabChange = (tab: 'blogs' | 'articles') => {
    setActiveTab(tab);
    window.scrollTo(0, 0); // Scroll to top when changing tabs
  };

  // Filter posts based on search query
  const filteredPosts = activeTab === 'blogs'
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="w-full bg-white dark:bg-gray-900">
      {/* Adding a spacer div to create distance between navbar and content */}
      <div className="h-24"></div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Explore Our Blogs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your destination for knowledge and inspiration. Browse through our collection of insightful blogs, covering 
            a range of topics to keep you informed and empowered.
          </p>
        </div>

        {/* Tabs and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="tabs mb-4 md:mb-0">
            <button 
              className={`px-6 py-2 mr-2 rounded-md font-medium ${
                activeTab === 'blogs' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
              }`}
              onClick={() => handleTabChange('blogs')}
            >
              BLOGS
            </button>
            <button 
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'articles' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
              }`}
              onClick={() => handleTabChange('articles')}
            >
              ARTICLES
            </button>
          </div>
          <div className="search-box w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Content Header */}
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
          {activeTab === 'blogs' ? 'All Blogs' : 'All Articles'}
        </h2>

        {/* Blog/Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <button 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    onClick={() => window.scrollTo(0, 0)} // Scroll to top when clicking "Read more"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="py-2 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-l-md hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
            >
              Previous
            </a>
            <a
              href="#"
              className="py-2 px-4 bg-blue-600 text-white font-medium border border-blue-600"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
            >
              1
            </a>
            <a
              href="#"
              className="py-2 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
            >
              2
            </a>
            <a
              href="#"
              className="py-2 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
            >
              3
            </a>
            <a
              href="#"
              className="py-2 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-r-md hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
            >
              Next
            </a>
          </nav>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Never Miss What We Post
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay updated with exciting insights, trends, innovations, and expert knowledge
            </p>
            <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 w-full border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;