// src/pages/HowWeWork.jsx
import React from 'react';
import WorkflowStep from '../components/WorkflowStep';

const HowWeWork = () => {
  const workflowStepsData = [
    {
      stepNumber: 1,
      title: 'Initial Assessment & Planning',
      description: 'We begin by conducting a thorough analysis of your venue, event type, and historical data. Our AI models simulate various crowd scenarios to identify potential risks and optimize entry/exit points, flow paths, and emergency routes.',
      bgColorClass: 'bg-yellow-50', // This class will be defined in index.css
      isReversed: false,
      delay: 0.5
    },
    {
      stepNumber: 2,
      title: 'Technology Deployment',
      description: 'Our team deploys and integrates state-of-the-art sensors, CCTV cameras, and drone systems. These technologies feed real-time data into our central AI platform, creating a comprehensive overview of crowd dynamics.',
      bgColorClass: 'bg-blue-50', // This class will be defined in index.css
      isReversed: true,
      delay: 0.7
    },
    {
      stepNumber: 3,
      title: 'Real-Time Monitoring & Alerts',
      description: 'Our AI continuously analyzes live feeds for anomalies, density changes, and potential hazards. Automated alerts are triggered for your safety teams, providing actionable insights to prevent incidents before they escalate.',
      bgColorClass: 'bg-green-50', // This class will be defined in index.css
      isReversed: false,
      delay: 0.9
    },
    {
      stepNumber: 4,
      title: 'Coordinated Response',
      description: 'In the event of an identified risk, our system provides clear, data-driven recommendations for response. This includes directing personnel, rerouting crowd flow, and coordinating with emergency services for swift action.',
      bgColorClass: 'bg-purple-50', // This class will be defined in index.css
      isReversed: true,
      delay: 1.1
    },
    {
      stepNumber: 5,
      title: 'Post-Event Analysis & Reporting',
      description: 'After each event, we provide comprehensive reports on crowd behavior, system performance, and incident responses. This data helps in continuous improvement and future event planning, ensuring even safer gatherings.',
      bgColorClass: 'bg-orange-50', // This class will be defined in index.css
      isReversed: false,
      delay: 1.3
    },
  ];

  return (
    <main className="container main-padding"> {/* Added main-padding for consistent padding */}
      {/* Section for How We Work */}
      <section className="text-center my-12">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-up">How We Work</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Discover the seamless process behind our AI-powered crowd safety solutions.
        </p>
      </section>

      {/* Workflow Steps Section */}
      <section className="workflow-section bg-white p-8 rounded-xl shadow-2xl mb-10 animate-fade-in-up delay-400">
        <h3 className="text-3xl font-bold mb-8 text-center">Our 5-Step Safety Protocol</h3>
        <div className="workflow-steps-container">
          {/* Vertical line for workflow visualization */}
          <div className="workflow-line"></div>

          {/* Render workflow steps using the WorkflowStep component */}
          {workflowStepsData.map((step, index) => (
            <WorkflowStep
              key={index}
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

      {/* Call to Action Section - Changed <a> to <button> */}
      <section className="text-center my-12 animate-fade-in-up delay-600">
        <h3 className="text-4xl font-bold mb-6">Ready to Enhance Your Event Safety?</h3>
        <button onClick={() => console.log('Navigate to contact page')} className="cta-link">
          Contact Us Today <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </section>
    </main>
  );
};

export default HowWeWork;
