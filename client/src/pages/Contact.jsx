// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import MessageDisplay from '../components/MessageDisplay';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form message display
  const [formMessage, setFormMessage] = useState({
    text: '',
    type: '', // 'success' or 'error'
    isVisible: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Display message function
  const displayMessage = (msg, type) => {
    setFormMessage({ text: msg, type: type, isVisible: true });
    setTimeout(() => {
      setFormMessage({ text: '', type: '', isVisible: false });
    }, 5000); // Message disappears after 5 seconds
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      displayMessage('Please fill in all required fields (Name, Email, Message).', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      displayMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate form submission (replace with actual API call in a real MERN app)
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', formData.subject);
    console.log('Message:', message);

    displayMessage('Thank you for your message! We will get back to you soon.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  // Effect for handling fade-in-up animations on scroll
  useEffect(() => {
    const sectionsToAnimate = document.querySelectorAll('.animate-fade-in-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation-active'); // This class triggers the CSS animation
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    sectionsToAnimate.forEach(section => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionsToAnimate.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <main className="container main-padding"> {/* Added main-padding for consistent padding */}
      {/* Section for Contact Us */}
      <section className="text-center my-12">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-up">Get In Touch</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
          We'd love to hear from you! Please fill out the form below or reach out directly.
        </p>
      </section>

      {/* Main Contact Content: Form and Contact Information */}
      <section className="contact-main-content bg-white p-8 rounded-xl shadow-2xl animate-fade-in-up delay-400">
        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
          <form id="contactForm" className="form-space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="submit-button"
            >
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
          {/* Message display area for form submission feedback */}
          <MessageDisplay message={formMessage.text} type={formMessage.type} isVisible={formMessage.isVisible} />
        </div>

        {/* Contact Information Section */}
        <div className="contact-info-container bg-red-50 p-8 rounded-xl shadow-inner flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6">Our Contact Details</h3>
          <ul className="contact-details-list">
            <li>
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <span>123 Safe Street, Crowd City, SC 12345</span>
            </li>
            <li>
              <i className="fas fa-phone-alt contact-icon"></i>
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <i className="fas fa-envelope contact-icon"></i>
              <span>info@safecrowd.com</span>
            </li>
            <li>
              <i className="fas fa-clock contact-icon"></i>
              <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
          {/* Social Media Links - Changed href="#" to valid placeholder URLs */}
          <div className="social-media-section">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="social-links-container">
              <a href="https://facebook.com/safecrowd" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <i className="fab fa-facebook-f social-icon"></i>
              </a>
              <a href="https://twitter.com/safecrowd" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <i className="fab fa-twitter social-icon"></i>
              </a>
              <a href="https://linkedin.com/company/safecrowd" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <i className="fab fa-linkedin-in social-icon"></i>
              </a>
              <a href="https://instagram.com/safecrowd" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <i className="fab fa-instagram social-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
