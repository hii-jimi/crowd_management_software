// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import Modal from '../components/Modal';


const Home = ({ navigateTo }) => { // navigateTo prop is preserved here
  // State to manage modal visibility and content
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  // Data for feature cards
  const features = [
    {
      icon: '📀',
      title: 'Smart Planning',
      description: 'AI analyzes venues to optimize crowd flows before events begin',
      modalTitle: 'Smart Planning Details',
      modalDescription: `
        <p class="text-gray-700 leading-relaxed mb-4">Our AI-powered Smart Planning system analyzes venue layouts, historical crowd data, and event specifics to create optimal crowd flow strategies. This includes identifying potential bottlenecks, designing efficient entry/exit points, and planning emergency evacuation routes to ensure maximum safety before the event even begins.</p>
        <p class="text-gray-700 leading-relaxed">We leverage advanced simulation techniques to predict crowd behavior under various scenarios, allowing for proactive adjustments and a robust safety plan.</p>
      `,
    },
    {
      icon: '📡',
      title: 'Real-Time Monitoring',
      description: 'Live tracking via CCTV, drones and ground teams',
      modalTitle: 'Real-Time Monitoring Details',
      modalDescription: `
        <p class="text-gray-700 leading-relaxed mb-4">Our Real-Time Monitoring solution integrates data from CCTV cameras, drones, and ground teams to provide a live, comprehensive view of crowd dynamics. Our AI continuously processes this data to detect unusual patterns, overcrowding, and potential hazards as they emerge.</p>
        <p class="text-gray-700 leading-relaxed">This immediate insight enables rapid decision-making and intervention, significantly reducing response times and preventing incidents from escalating.</p>
      `,
    },
    {
      icon: '🚨',
      title: 'Emergency Response',
      description: 'Instant alerts and resource allocation when needed most',
      modalTitle: 'Emergency Response Details',
      modalDescription: `
        <p class="text-gray-700 leading-relaxed mb-4">The Emergency Response system is designed for swift and coordinated action. Upon detection of a critical situation by our AI, instant alerts are sent to relevant safety personnel, along with precise location data and recommended protocols.</p>
        <p class="text-gray-700 leading-relaxed">This ensures that resources are allocated efficiently and emergency services are deployed effectively, minimizing harm and ensuring the fastest possible resolution to any incident.</p>
      `,
    },
  ];

  // Function to open the modal with specific content
  const openModal = (index) => {
    setModalContent({
      title: features[index].modalTitle,
      content: features[index].modalDescription,
    });
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalContent({ title: '', content: '' }); // Clear content when closed
  };

  // Effect for handling step animations on scroll
  useEffect(() => {
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= (window.innerHeight - 100) && rect.bottom >= 100;
    };

    const handleStepAnimation = () => {
      document.querySelectorAll('.step').forEach(step => {
        if (isInViewport(step)) {
          step.classList.add('in-view'); // Add class for animation
        }
      });
    };

    // Attach event listeners
    window.addEventListener('scroll', handleStepAnimation);
    // Run once on mount to check initial visibility
    handleStepAnimation();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleStepAnimation);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      {/* Introduction Section */}
      <section className="intro">
        <div className="intro-content">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade">AI-Powered Crowd Safety</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16 animate-slide-up">Predict. Monitor. Prevent - Our system reduces stampede risks by 85%</p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => openModal(index)}
              />
            ))}
          </div>

            {/* NEW: Button to navigate to the Dashboard */}
            {/* This button is added after the features grid, before the workflow section */}
            <div className="mt-12 text-center"> {/* Added a div for spacing and centering */}
                <button
                    onClick={() => navigateTo('dashboard')}
                    className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Go to Dashboard
                </button>
            </div>

        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow">
        <div className="workflow-container">
          <div className="workflow-header">
            <h2 className="workflow-title">A Smarter Way To Manage Crowd</h2>
            <p className="workflow-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rem saepe dignissimos doloribus at, voluptatem temporibus sit quod odio quam suscipit vel sequi perferendis maxime, pariatur corporis rerum minima!</p>
            <div className="cta-container">
              <button className="cta-button"onClick={() => navigateTo('contact')}> Get Started Today</button>
            </div>
          </div>

          <div className="workflow-steps">
            {/* Step 1 */}
            <div className="step-wrapper">
              <div className="step">
                <div className="step-icon step-icon-blue">📝</div>
                <div className="step-content">
                  <h3 className="text-xl font-bold mb-1">Sign Up</h3>
                  <p className="text-gray-700">Create your account in minutes.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-wrapper align-end">
              <div className="step step-even">
                <div className="step-icon step-icon-purple">🔗</div>
                <div className="step-content">
                  <h3 className="text-xl font-bold mb-1">Title 2</h3>
                  <p className="text-gray-700">Create your account in minutes.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-wrapper">
              <div className="step">
                <div className="step-icon step-icon-green">📊</div>
                <div className="step-content">
                  <h3 className="text-xl font-bold mb-1">Title 3</h3>
                  <p className="text-gray-700">Create your account in minutes.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="step-wrapper align-end">
              <div className="step step-even">
                <div className="step-icon step-icon-orange">💵</div>
                <div className="step-content">
                  <h3 className="text-xl font-bold mb-1">Title 4</h3>
                  <p className="text-gray-700">Create your account in minutes.</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="step-wrapper">
              <div className="step">
                <div className="step-icon step-icon-red">⚡</div>
                <div className="step-content">
                  <h3 className="text-xl font-bold mb-1">Title 5</h3>
                  <p className="text-gray-700">Create your account in minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal component, conditionally rendered */}
      {showModal && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Home;
