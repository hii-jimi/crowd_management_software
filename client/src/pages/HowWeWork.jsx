// src/pages/HowWeWork.jsx
import React from 'react';
import WorkflowStep from '../components/WorkflowStep'; // Assuming WorkflowStep is styled with Tailwind internally

const HowWeWork = ({ navigateTo }) => { // <--- new addition
  const workflowStepsData = [
    {
      stepNumber: 1,
      title: 'Initial Assessment & Planning',
      description: 'We begin by conducting a thorough analysis of your venue, event type, and historical data. Our AI models simulate various crowd scenarios to identify potential risks and optimize entry/exit points, flow paths, and emergency routes.',
      bgColorClass: 'bg-yellow-50',
      isReversed: false,
      delay: 0.5
    },
    {
      stepNumber: 2,
      title: 'Technology Deployment',
      description: 'Our team deploys and integrates state-of-the-art sensors, CCTV cameras, and drone systems. These technologies feed real-time data into our central AI platform, creating a comprehensive overview of crowd dynamics.',
      bgColorClass: 'bg-blue-50',
      isReversed: true,
      delay: 0.7
    },
    {
      stepNumber: 3,
      title: 'Real-Time Monitoring & Alerts',
      description: 'Our AI continuously analyzes live feeds for anomalies, density changes, and potential hazards. Automated alerts are triggered for your safety teams, providing actionable insights to prevent incidents before they escalate.',
      bgColorClass: 'bg-green-50',
      isReversed: false,
      delay: 0.9
    },
    {
      stepNumber: 4,
      title: 'Coordinated Response',
      description: 'In the event of an identified risk, our system provides clear, data-driven recommendations for response. This includes directing personnel, rerouting crowd flow, and coordinating with emergency services for swift action.',
      bgColorClass: 'bg-purple-50',
      isReversed: true,
      delay: 1.1
    },
    {
      stepNumber: 5,
      title: 'Post-Event Analysis & Reporting',
      description: 'After each event, we provide comprehensive reports on crowd behavior, system performance, and incident responses. This data helps in continuous improvement and future event planning, ensuring even safer gatherings.',
      bgColorClass: 'bg-orange-50',
      isReversed: false,
      delay: 1.3
    },
  ];

  // If you are using react-router-dom, uncomment and use useNavigate
  // import { useNavigate } from 'react-router-dom';
  // const navigate = useNavigate();
  // const handleContactClick = () => navigate('/contact');

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen"> {/* Unified padding and subtle background */}
      {/* Section for How We Work */}
      <section className="text-center my-16"> {/* Increased vertical margin */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800 animate-fade-in-up">How We Work</h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Discover the seamless process behind our AI-powered crowd safety solutions.
        </p>
      </section>

      {/* Workflow Steps Section */}
      <section className="bg-white p-8 md:p-12 rounded-xl shadow-2xl mb-16 animate-fade-in-up delay-400"> {/* Increased padding and shadow */}
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our 5-Step Safety Protocol</h3> {/* Increased bottom margin */}
        <div className="relative flex flex-col items-center py-8"> {/* Adjusted vertical padding for the line context */}
          {/* Vertical line for workflow visualization */}
          {/* The line now spans the full height of its relative parent, visually connecting the steps */}
          <div className="absolute h-full w-0.5 bg-gray-300 left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Render workflow steps using the WorkflowStep component */}
          {workflowStepsData.map((step) => (
            <WorkflowStep
              key={step.stepNumber} // Using stepNumber as key, assuming it's unique and stable
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              isReversed={step.isReversed}
              bgColorClass={step.bgColorClass}
              delay={step.delay}
            />
          ))}
        </div>
      </section>

      <section className="text-center my-16 animate-fade-in-up delay-600">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Ready to Enhance Your Event Safety?</h3>
        <button
          onClick={() => navigateTo('contact')
          }// Replace with actual navigation or action
          className="bg-red-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition duration-300 inline-flex items-center justify-center text-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Contact Us Today <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </section>
    </main>
  );
};

export default HowWeWork;