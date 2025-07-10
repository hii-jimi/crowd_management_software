// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <main className="container main-padding"> {/* Added main-padding for consistent padding */}
      {/* Section for About Us */}
      <section className="text-center my-12">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-up">About Safe Crowd</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Our mission is to revolutionize crowd safety through innovative AI-powered solutions.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="bg-white p-8 rounded-xl shadow-2xl mb-10 animate-fade-in-up delay-400">
        <div className="grid grid-cols-1 md-grid-cols-2 gap-10 items-center">
          <div className="order-2 md-order-1">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Safe Crowd was founded in 2020 with a vision to prevent tragic crowd incidents through advanced technology. Witnessing the challenges faced by event organizers and public safety officials, our team of AI researchers, engineers, and safety experts came together to build a proactive system that predicts, monitors, and prevents stampede risks.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From our humble beginnings, we've grown into a leading innovator in crowd management, continuously refining our algorithms and expanding our reach to make public gatherings safer for everyone. Our commitment to safety drives every line of code and every strategic partnership.
            </p>
          </div>
          <div className="order-1 md-order-2">
            {/* Alt attribute fixed: removed "Image" */}
            <img src="https://placehold.co/600x400/FFD700/333333?text=Our+Story" alt="Our Story" className="rounded-lg shadow-lg full-width-image object-cover" />
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="bg-red-50 p-8 rounded-xl shadow-2xl mb-10 animate-fade-in-up delay-600">
        <div className="grid grid-cols-1 md-grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a world where large gatherings are synonymous with safety and enjoyment, free from the fear of crowd-related incidents. We envision a future where our AI-powered insights empower organizers to manage events with unprecedented precision and confidence.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To develop and deploy cutting-edge AI solutions that provide real-time crowd analytics, predictive risk assessment, and intelligent response mechanisms, significantly reducing the likelihood and impact of stampedes and other crowd safety hazards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="text-center my-12 animate-fade-in-up delay-800">
        <h3 className="text-4xl font-bold mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="team-member-card">
            <img src="https://placehold.co/150x150/FF6F61/FFFFFF?text=Team+Member+1" alt="Team Member 1" className="team-member-img" />
            <h4 className="text-xl font-semibold team-member-name">Placeholder Name 1</h4>
            <p className="text-red-600 font-medium team-member-role">CEO & Founder</p>
            <p className="text-gray-600 text-sm team-member-description">Visionary leader with a passion for public safety and AI innovation.</p>
            <div className="social-links">
              {/* Changed href="#" to valid placeholder URLs */}
              <a href="https://linkedin.com/in/placeholder1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-600"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://twitter.com/placeholder1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-400"><i className="fab fa-twitter text-xl"></i></a>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="team-member-card">
            <img src="https://placehold.co/150x150/FF6F61/FFFFFF?text=Team+Member+2" alt="Team Member 2" className="team-member-img" />
            <h4 className="text-xl font-semibold team-member-name">Placeholder Name 2</h4>
            <p className="text-red-600 font-medium team-member-role">Lead AI Engineer</p>
            <p className="text-gray-600 text-sm team-member-description">Expert in machine learning and real-time data processing for crowd analytics.</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/placeholder2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-600"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://twitter.com/placeholder2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-400"><i className="fab fa-twitter text-xl"></i></a>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="team-member-card">
            <img src="https://placehold.co/150x150/FF6F61/FFFFFF?text=Team+Member+3" alt="Team Member 3" className="team-member-img" />
            <h4 className="text-xl font-semibold team-member-name">Placeholder Name 3</h4>
            <p className="text-red-600 font-medium team-member-role">Chief Safety Officer</p>
            <p className="text-gray-600 text-sm team-member-description">Decades of experience in public safety and event management.</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/placeholder3" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-600"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://twitter.com/placeholder3" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-400"><i className="fab fa-twitter text-xl"></i></a>
            </div>
          </div>
          {/* Team Member 4 - NEW */}
          <div className="team-member-card">
            <img src="https://placehold.co/150x150/FF6F61/FFFFFF?text=Team+Member+4" alt="Team Member 4" className="team-member-img" />
            <h4 className="text-xl font-semibold team-member-name">Placeholder Name 4</h4>
            <p className="text-red-600 font-medium team-member-role">Head of Operations</p>
            <p className="text-gray-600 text-sm team-member-description">Ensuring smooth deployment and continuous improvement of our solutions.</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/placeholder4" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-600"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://twitter.com/placeholder4" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover-text-blue-400"><i className="fab fa-twitter text-xl"></i></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
