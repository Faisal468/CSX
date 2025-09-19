import React from 'react';
import { Code } from 'lucide-react';
import ServiceDetail from '../../components/ServiceDetail';

const WebAppsService: React.FC = () => {
  return (
    <ServiceDetail
      id="web-apps"
      title="Web Applications"
      description="Custom web applications built with modern frameworks and technologies for optimal performance and user experience."
      icon={Code}
      color="from-blue-500 to-cyan-500"
      features={[
        'React/Vue/Angular Development',
        'Node.js Backend Solutions',
        'Database Integration',
        'RESTful API Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Real-time Applications',
        'Admin Dashboards & Portals',
        'Content Management Systems',
        'Payment Gateway Integration'
      ]}
      technologies={[
        'React', 
        'Vue.js', 
        'Angular', 
        'Node.js', 
        'Express', 
        'MongoDB', 
        'PostgreSQL', 
        'Firebase',
        'GraphQL',
        'Next.js',
        'TypeScript',
        'Redux',
        'AWS',
        'Docker'
      ]}
       price=""
      detailedDescription={`At CloudSphereX, we specialize in creating custom web applications that are tailored to your specific business needs. Our web applications are built with the latest technologies and best practices to ensure optimal performance, security, and user experience.

      We take a full-stack approach to web application development, handling everything from frontend user interfaces to backend systems and database architecture. Our team of experienced developers works closely with you throughout the development process to ensure that your web application meets your requirements and exceeds your expectations.

      Our web applications are designed to be scalable, maintainable, and secure. We use modern frameworks and libraries like React, Vue.js, and Angular for frontend development, and Node.js, Express, and various database technologies for backend development. This allows us to create web applications that are fast, responsive, and capable of handling high traffic loads.

      Whether you need a simple web application or a complex enterprise system, we have the expertise and experience to deliver a solution that drives your business forward.`}
      process={[
        {
          title: 'Discovery & Planning',
          description: 'We start by understanding your business needs, target audience, and project requirements. This phase includes market research, competitor analysis, and defining the scope and objectives of your web application.'
        },
        {
          title: 'UI/UX Design',
          description: 'Our designers create wireframes and prototypes to visualize the user interface and experience. We focus on creating intuitive, user-friendly designs that align with your brand identity and meet user expectations.'
        },
        {
          title: 'Frontend Development',
          description: 'We build the client-side of your web application using modern frameworks like React, Vue.js, or Angular. This includes implementing responsive designs, interactive elements, and ensuring cross-browser compatibility.'
        },
        {
          title: 'Backend Development',
          description: 'Our backend developers create robust server-side architecture using Node.js, Express, and other technologies. We implement business logic, API endpoints, database schemas, and ensure proper data handling and security.'
        },
        {
          title: 'Database Integration',
          description: 'We integrate and optimize databases (SQL or NoSQL) based on your project requirements, ensuring efficient data storage, retrieval, and management.'
        },
        {
          title: 'Testing & Quality Assurance',
          description: 'We conduct thorough testing including unit tests, integration tests, and UI tests to ensure your web application functions correctly across different devices and browsers.'
        },
        {
          title: 'Deployment & Launch',
          description: 'We deploy your web application to production servers, configure hosting environments, and ensure everything is properly set up for launch.'
        },
        {
          title: 'Maintenance & Support',
          description: 'We provide ongoing maintenance and support services to keep your web application running smoothly, implement updates, and address any issues that may arise.'
        }
      ]}
      casestudy={{
        title: 'E-commerce Platform for Fashion Retailer',
        description: 'We developed a custom e-commerce platform for a fashion retailer that needed to showcase their products online and provide a seamless shopping experience for their customers. The platform included features such as product catalog, shopping cart, secure checkout, user accounts, and integration with payment gateways.',
        results: [
          'Increased online sales by 150% within the first six months',
          'Reduced cart abandonment rate by 35%',
          'Improved page load times by 60% compared to their previous website',
          'Enhanced user engagement with an average session duration increase of 45%',
          'Seamless integration with inventory management system for real-time stock updates'
        ]
      }}
      faq={[
        {
          question: 'How long does it take to develop a web application?',
          answer: 'The development timeline varies depending on the complexity of the project. A simple web application can take 2-3 months, while more complex applications may take 4-6 months or longer. We provide a detailed timeline during the planning phase.'
        },
        {
          question: 'Do you provide hosting services for web applications?',
          answer: 'Yes, we can help you set up hosting for your web application on reliable cloud platforms like AWS, Google Cloud, or Microsoft Azure. We also offer managed hosting services for ongoing maintenance and support.'
        },
        {
          question: 'Can you redesign or upgrade my existing web application?',
          answer: 'Absolutely! We specialize in both building new web applications and upgrading existing ones. We can assess your current application, identify areas for improvement, and implement changes to enhance functionality, performance, and user experience.'
        },
        {
          question: 'How do you ensure the security of web applications?',
          answer: 'Security is a top priority in our development process. We implement best practices such as secure authentication, data encryption, input validation, protection against common vulnerabilities (XSS, CSRF, SQL injection), and regular security audits to ensure your web application is protected.'
        },
        {
          question: 'Do you provide training for using the web application?',
          answer: 'Yes, we provide comprehensive training for your team to ensure they can effectively use and manage the web application. We also create documentation and user guides for future reference.'
        }
      ]}
    />
  );
};

export default WebAppsService;