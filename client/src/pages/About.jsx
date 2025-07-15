// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen"> {/* Unified padding and subtle background */}
      {/* Section for About Us */}
      <section className="text-center my-16"> {/* Increased vertical margin */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800 animate-fade-in-up">Jan Suraksha</h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Our mission is to revolutionize crowd safety through innovative AI-powered solutions.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="bg-white p-8 md:p-12 rounded-xl shadow-2xl mb-16 animate-fade-in-up delay-400"> {/* Increased padding and shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Jan Suraksha is an AI-powered crowd management solution designed to enhance public safety at large-scale gatherings by providing real-time monitoring, predictive analytics, and dynamic crowd control capabilities.

              In densely populated countries like India, events often draw crowds in the range of thousands to lakhs, posing serious safety risks—especially in the absence of efficient, technology-driven systems. Jan Suraksha addresses this challenge by integrating sensor networks, surveillance analytics, and intelligent alert mechanisms to detect and mitigate congestion before it escalates into critical situations such as stampedes.

              
            </p>
           <p className="text-lg text-gray-700 leading-relaxed">
             The system enables authorities to visualize crowd density through heatmaps, receive early warnings of high-risk zones, and implement proactive crowd flow strategies. With a centralized command dashboard and multilingual support, Jan Suraksha ensures scalable, adaptable, and responsive crowd management tailored to India’s unique demographic and infrastructural landscape.

             This project represents a shift from reactive to preventive safety infrastructure, aiming to protect lives through real-time intelligence and automation.
            </p>
          </div>
         
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="bg-red-50 p-8 md:p-12 rounded-xl shadow-2xl mb-16 animate-fade-in-up delay-600"> {/* Increased padding and shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a world where large gatherings are synonymous with safety and enjoyment, free from the fear of crowd-related incidents. We envision a future where our AI-powered insights empower organizers to manage events with unprecedented precision and confidence.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To develop and deploy cutting-edge AI solutions that provide real-time crowd analytics, predictive risk assessment, and intelligent response mechanisms, significantly reducing the likelihood and impact of stampedes and other crowd safety hazards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="text-center my-16 animate-fade-in-up delay-800">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">Meet Our Team</h3> {/* Increased bottom margin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 justify-items-center"> {/* Increased gap */}
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center max-w-sm w-full transform transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl">
            <img
              src="https://placehold.co/180x180/FF6F61/FFFFFF?text=Jahnawi+Mani" // Larger placeholder, more specific text
              alt="Portrait of JAHNAWI MANI"
              className="w-40 h-40 rounded-full object-cover mb-6 ring-4 ring-red-400 border-4 border-white" // Larger image, stronger ring, white border
            />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Jahnawi Mani</h4>
            <p className="text-red-600 font-medium mb-3">Team Leader</p>
            <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">Visionary leader with a passion for public safety and cutting-edge AI innovation.</p>
            <div className="flex space-x-5 mt-2"> {/* Increased social icon spacing */}
              <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200" aria-label="LinkedIn profile of Jane Doe">
                <i className="fab fa-linkedin text-2xl"></i> {/* Larger icons */}
              </a>
              <a href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors duration-200" aria-label="Twitter profile of Jane Doe">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center max-w-sm w-full transform transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl">
            <img
              src="https://placehold.co/180x180/FF6F61/FFFFFF?text=Arya+Jha"
              alt="Portrait of ARYA JHA"
              className="w-40 h-40 rounded-full object-cover mb-6 ring-4 ring-red-400 border-4 border-white"
            />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Arya Jha</h4>
            <p className="text-red-600 font-medium mb-3">Team Member</p>
            <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">Architecting intelligent algorithms for real-time crowd dynamics and predictive analytics.</p>
            <div className="flex space-x-5 mt-2">
              <a href="https://linkedin.com/in/johnsmith" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200" aria-label="LinkedIn profile of John Smith">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://twitter.com/johnsmith" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors duration-200" aria-label="Twitter profile of John Smith">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center max-w-sm w-full transform transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl">
            <img
              src="https://placehold.co/180x180/FF6F61/FFFFFF?text=Ankita+Pathak"
              alt="Portrait of Ankita Pathak"
              className="w-40 h-40 rounded-full object-cover mb-6 ring-4 ring-red-400 border-4 border-white"
            />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Ankita Pathak</h4>
            <p className="text-red-600 font-medium mb-3">Team Member</p>
            <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">Leveraging decades of experience to set industry-leading standards in event safety protocols.</p>
            <div className="flex space-x-5 mt-2">
              <a href="https://linkedin.com/in/emilychen" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200" aria-label="LinkedIn profile of Emily Chen">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://twitter.com/emilychen" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors duration-200" aria-label="Twitter profile of Emily Chen">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center max-w-sm w-full transform transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl">
            <img
              src="https://placehold.co/180x180/FF6F61/FFFFFF?text=Rai+Sarkar"
              alt="Portrait of Rai Sarkar"
              className="w-40 h-40 rounded-full object-cover mb-6 ring-4 ring-red-400 border-4 border-white"
            />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Rai Sarkar</h4>
            <p className="text-red-600 font-medium mb-3">Team Member</p>
            <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">Ensuring seamless deployment and continuous improvement of our robust safety solutions globally.</p>
            <div className="flex space-x-5 mt-2">
              <a href="https://linkedin.com/in/davidlee" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200" aria-label="LinkedIn profile of David Lee">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://twitter.com/davidlee" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors duration-200" aria-label="Twitter profile of David Lee">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;