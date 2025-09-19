import React from 'react';
import { Settings } from 'lucide-react';
import ServiceDetail from '../../components/ServiceDetail';

const AnsysService: React.FC = () => {
  return (
    <ServiceDetail
      id="ansys"
      title="Engineering Simulation"
      description="Engineering simulation and CAD solutions using Ansys and SolidWorks for product design and analysis."
      icon={Settings}
      color="from-teal-500 to-cyan-500"
      features={[
        '3D CAD Modeling',
        'Finite Element Analysis',
        'Fluid Dynamics Simulation',
        'Structural Analysis',
        'Thermal Analysis',
        'Product Optimization',
        'Multiphysics Simulation',
        'Design Validation',
        'Fatigue Analysis',
        'Vibration Analysis'
      ]}
      technologies={[
        'ANSYS',
        'SolidWorks',
        'AutoCAD',
        'CATIA',
        'Fusion 360',
        'ANSYS Mechanical',
        'ANSYS Fluent',
        'ANSYS Maxwell',
        'SolidWorks Simulation',
        'SolidWorks Flow Simulation'
      ]}
      price=""
      detailedDescription={`CloudSphereX provides advanced engineering simulation services using industry-leading tools like Ansys and SolidWorks. Our team of experienced mechanical, electrical, and simulation engineers helps organizations design, validate, and optimize products with powerful computational tools that reduce development time and improve product quality.

      Engineering simulation allows you to virtually test and validate product designs before physical prototyping, saving time and resources while improving design quality. Our simulation services cover a wide range of physics including structural mechanics, fluid dynamics, heat transfer, electromagnetics, and multiphysics interactions.

      We work with clients across various industries including automotive, aerospace, consumer products, medical devices, and industrial equipment to solve complex engineering challenges and drive innovation. Whether you need to analyze the structural integrity of a component, optimize fluid flow in a system, or validate thermal management in an electronic device, our team has the expertise to deliver accurate and insightful simulation results.

      Our engineering simulation services include 3D CAD modeling, finite element analysis (FEA), computational fluid dynamics (CFD), thermal analysis, electromagnetic simulation, and design optimization. We also provide training and knowledge transfer to help your team leverage these powerful tools effectively.`}
      process={[
        {
          title: 'Requirements Definition',
          description: 'We begin by understanding your engineering challenges, design requirements, and the specific questions you need to answer through simulation. This helps us define the appropriate simulation approach and level of detail.'
        },
        {
          title: 'CAD Modeling & Preparation',
          description: 'We create or optimize 3D CAD models for simulation, including geometry simplification, cleanup, and preparation to ensure efficient and accurate analysis.'
        },
        {
          title: 'Physics Setup',
          description: 'We define the physical phenomena to be simulated, including material properties, boundary conditions, loads, constraints, and interactions between components or physics domains.'
        },
        {
          title: 'Mesh Generation',
          description: 'We create appropriate computational meshes that balance accuracy and computational efficiency, with refinement in areas of interest and validation of mesh quality.'
        },
        {
          title: 'Solver Configuration',
          description: 'We configure the simulation solvers with appropriate settings for your specific problem, including solution methods, convergence criteria, and time-stepping parameters for transient analyses.'
        },
        {
          title: 'Results Analysis',
          description: 'We analyze simulation results to extract meaningful insights, identify potential issues, and validate designs against requirements. This includes post-processing, visualization, and interpretation of complex data.'
        },
        {
          title: 'Design Optimization',
          description: 'Based on simulation results, we recommend design improvements and can perform parametric studies or formal optimization to enhance product performance, reliability, or efficiency.'
        },
        {
          title: 'Documentation & Reporting',
          description: 'We provide comprehensive documentation of the simulation methodology, assumptions, results, and recommendations in a format suitable for engineering decision-making or regulatory submissions.'
        }
      ]}
      casestudy={{
        title: 'Structural Optimization of Aerospace Component',
        description: 'We performed structural analysis and optimization for an aerospace client developing a critical structural component with strict weight and performance requirements. Using Ansys for finite element analysis and SolidWorks for parametric modeling, we created a comprehensive simulation workflow to evaluate and optimize the design.',
        results: [
          'Reduced component weight by 22% while maintaining all structural performance requirements',
          'Identified and eliminated stress concentrations that could have led to premature failure',
          'Decreased development time by 60% compared to traditional build-and-test approaches',
          'Saved an estimated $75,000 in prototyping and testing costs',
          'Provided comprehensive simulation documentation that supported certification requirements'
        ]
      }}
      faq={[
        {
          question: 'How accurate are engineering simulations compared to physical testing?',
          answer: 'Modern engineering simulations can achieve high accuracy when properly set up and validated. For structural analyses, we typically achieve results within 5-10% of physical test data. For more complex physics like fluid dynamics or multiphysics interactions, accuracy may vary but is generally within 10-15% of experimental results. We always clearly communicate the assumptions, limitations, and expected accuracy of our simulations, and can help design validation tests to confirm critical results.'
        },
        {
          question: 'Do we need to provide CAD models, or can you create them?',
          answer: 'We can work either way. If you have existing CAD models, we can use those as a starting point, optimizing them as needed for simulation. If you dont have CAD models, or only have 2D drawings or concepts, our team can create the 3D models required for simulation. We work with various CAD formats and can deliver final models in the format that best suits your workflow.'
        },
        {
          question: 'How long does a typical engineering simulation project take?',
          answer: 'Project timelines vary based on complexity. Simple structural analyses might take 1-2 weeks, while complex multiphysics simulations could take 4-8 weeks. Factors affecting timeline include model complexity, physics involved, number of design iterations, and reporting requirements. We provide detailed timelines during project scoping based on your specific requirements.'
        },
        {
          question: 'Can you help with design optimization based on simulation results?',
          answer: 'Absolutely. Design optimization is a key benefit of simulation. We can perform parametric studies to evaluate how design changes affect performance, use formal optimization algorithms to find optimal designs based on your criteria, and provide specific recommendations for design improvements. Our goal is not just to analyze current designs but to help you create better products.'
        },
        {
          question: 'Do you provide training on simulation tools and methodologies?',
          answer: 'Yes, we offer training services to help your team build simulation capabilities. This includes software-specific training for tools like Ansys and SolidWorks, as well as methodology training covering simulation best practices, results interpretation, and validation techniques. Training can be customized to your teams experience level and specific application areas.'
        }
      ]}
    />
  );
};

export default AnsysService;