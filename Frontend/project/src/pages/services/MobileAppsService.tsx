import React from 'react';
import { Smartphone } from 'lucide-react';
import ServiceDetail from '../../components/ServiceDetail';

const MobileAppsService: React.FC = () => {
  return (
    <ServiceDetail
      id="mobile-apps"
      title="Mobile Applications"
      description="Native and cross-platform mobile applications for iOS and Android with seamless user interfaces."
      icon={Smartphone}
      color="from-green-500 to-emerald-500"
      features={[
        'Cross-platform Development',
        'Native iOS Development',
        'Native Android Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Location-based Services',
        'Social Media Integration',
        'In-app Purchases',
        'Analytics Integration'
      ]}
      technologies={[
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase',
        'Redux',
        'GraphQL',
        'REST APIs',
        'SQLite',
        'Realm',
        'AWS Amplify',
        'Google Maps API'
      ]}
      price=""
      detailedDescription={`CloudSphereX delivers cutting-edge mobile applications that help businesses connect with their customers and provide value through innovative functionality and seamless user experiences. Our mobile development team specializes in creating both native applications (iOS and Android) and cross-platform solutions that work flawlessly across multiple devices.

      We understand that mobile apps are often the primary touchpoint between businesses and their customers. That's why we focus on creating intuitive, engaging, and high-performing mobile experiences that align with your brand identity and business goals.

      Our mobile applications are built with scalability, performance, and security in mind. We use the latest technologies and frameworks like React Native, Flutter, Swift, and Kotlin to ensure your app runs smoothly and provides a native-like experience regardless of the platform.

      From concept to deployment on the App Store and Google Play, we handle every aspect of the mobile app development process. Our team works closely with you to understand your requirements, design an intuitive user interface, develop robust functionality, and ensure your app meets all platform guidelines for successful submission and approval.`}
      process={[
        {
          title: 'Research & Strategy',
          description: 'We begin by understanding your business objectives, target audience, and market landscape. This helps us develop a comprehensive mobile app strategy that aligns with your goals and user expectations.'
        },
        {
          title: 'UI/UX Design',
          description: 'Our designers create wireframes and interactive prototypes that visualize the user interface and experience. We focus on intuitive navigation, engaging visuals, and platform-specific design guidelines to ensure a seamless user experience.'
        },
        {
          title: 'App Architecture',
          description: 'We design a robust architecture for your mobile app, determining the appropriate technology stack, data models, API integrations, and third-party services to support your app s functionality.'
        },
        {
          title: 'Development',
          description: 'Our developers build your mobile app using either native technologies (Swift/Kotlin) or cross-platform frameworks (React Native/Flutter) based on your project requirements. We implement all features, integrate APIs, and ensure proper data handling.'
        },
        {
          title: 'Testing & QA',
          description: 'We conduct rigorous testing across multiple devices and OS versions to ensure your app functions correctly, performs well, and provides a consistent experience. This includes functional testing, performance testing, usability testing, and security testing.'
        },
        {
          title: 'Deployment',
          description: 'We prepare your app for submission to the App Store and Google Play, ensuring it meets all guidelines and requirements. We handle the submission process and work to resolve any issues that may arise during review.'
        },
        {
          title: 'Post-Launch Support',
          description: 'After launch, we provide ongoing maintenance and support to address any issues, implement updates, and add new features as needed. We also help you monitor app performance and user feedback to continuously improve the experience.'
        }
      ]}
      casestudy={{
        title: 'Fitness Tracking App',
        description: 'We developed a comprehensive fitness tracking application for a health and wellness company. The app allows users to track workouts, set goals, monitor progress, and connect with friends for motivation. It includes features such as GPS tracking for runs, custom workout plans, nutrition logging, and integration with wearable devices.',
        results: [
          'Over 100,000 downloads within the first three months of launch',
          'Average user rating of 4.8/5 on both App Store and Google Play',
          '75% user retention rate after 30 days',
          'Featured in the "Health & Fitness" category on the App Store',
          'Successful integration with major fitness wearables, increasing user engagement by 40%'
        ]
      }}
      faq={[
        {
          question: 'Should I build a native app or a cross-platform app?',
          answer: 'The choice between native and cross-platform development depends on your specific requirements. Native apps (built specifically for iOS or Android) offer the best performance and access to platform-specific features. Cross-platform apps (built with React Native or Flutter) allow you to maintain a single codebase for both platforms, reducing development time and cost. We can help you determine the best approach based on your project needs, budget, and timeline.'
        },
        {
          question: 'How long does it take to develop a mobile app?',
          answer: 'The development timeline varies depending on the complexity of the app. A simple app with basic functionality can take 3-4 months, while more complex apps may take 6-8 months or longer. We provide a detailed timeline during the planning phase based on your specific requirements.'
        },
        {
          question: 'How much does it cost to maintain a mobile app after launch?',
          answer: 'Ongoing maintenance typically costs about 15-20% of the initial development cost per year. This includes bug fixes, OS updates, performance improvements, and minor feature enhancements. The exact cost depends on the complexity of your app and the level of support required.'
        },
        {
          question: 'Can you help with app store optimization (ASO)?',
          answer: 'Yes, we provide comprehensive app store optimization services to improve your app s visibility and increase downloads. This includes keyword research, title and description optimization, screenshot and preview video creation, and strategies to improve ratings and reviews.'
        },
        {
          question: 'Do you sign NDAs before discussing app ideas?',
          answer: 'Absolutely. We understand the importance of confidentiality when developing new app concepts. Were happy to sign a non-disclosure agreement (NDA) before discussing your app idea in detail to protect your intellectual property.'
        }
      ]}
    />
  );
};

export default MobileAppsService;