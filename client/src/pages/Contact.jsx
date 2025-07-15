// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import MessageDisplay from '../components/MessageDisplay'; // Assuming this component is styled properly

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for general form message display
  const [formMessage, setFormMessage] = useState({
    text: '',
    type: '', // 'success' or 'error'
    isVisible: false,
  });

  // State for input-specific errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // Clear individual field errors when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
    // Also hide the general form message if it was an error
    if (formMessage.type === 'error' && formMessage.isVisible) {
      setFormMessage({ text: '', type: '', isVisible: false });
    }
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Display general form message function
  const displayMessage = (msg, type) => {
    setFormMessage({ text: msg, type: type, isVisible: true });
    setTimeout(() => {
      setFormMessage({ text: '', type: '', isVisible: false });
    }, 5000); // Message disappears after 5 seconds
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors and messages
    setErrors({ name: '', email: '', message: '' });
    setFormMessage({ text: '', type: '', isVisible: false });

    const { name, email, message } = formData;
    let hasError = false;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      hasError = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
      hasError = true;
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      displayMessage('Please correct the errors in the form.', 'error');
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

  // Tailwind CSS classes for inputs and error messages
  const inputClasses = "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200";
  const errorTextClasses = "text-red-500 text-sm mt-1";

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen"> {/* Unified padding and subtle background */}
      {/* Section for Contact Us */}
      <section className="text-center my-16"> {/* Increased vertical margin */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800 animate-fade-in-up">Get In Touch</h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
          We'd love to hear from you! Please fill out the form below or reach out directly.
        </p>
      </section>

      {/* Main Contact Content: Form and Contact Information */}
      
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 bg-white p-8 md:p-12 rounded-xl shadow-2xl animate-fade-in-up delay-400">
                                       
        {/* Contact Form Section */}
            <div className="max-w-xl mx-auto lg:max-w-full lg:mx-0"> {/* <--- ADDED CLASSES HERE */}
           <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
          <form id="contactForm" className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : null}
              />
              {errors.name && <p id="name-error" className={errorTextClasses}>{errors.name}</p>}
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : null}
              />
              {errors.email && <p id="email-error" className={errorTextClasses}>{errors.email}</p>}
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
                className={inputClasses}
              />
            </div>
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Your Message <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : null}
              ></textarea>
              {errors.message && <p id="message-error" className={errorTextClasses}>{errors.message}</p>}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
              disabled={formMessage.type === 'success'} // Disable after successful submission
            >
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
          {/* Message display area for form submission feedback */}
          {formMessage.isVisible && (
            <MessageDisplay
              message={formMessage.text}
              type={formMessage.type}
              isVisible={formMessage.isVisible}
            />
          )}
        </div>

        {/* Contact Information Section */}
        <div className="bg-red-50 p-8 md:p-12 rounded-xl shadow-inner flex flex-col justify-center"> {/* Increased padding and inner shadow */}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Contact Details</h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start"> {/* Use items-start for better alignment with multiline addresses */}
              <i className="fas fa-map-marker-alt text-red-500 text-xl w-8 mt-1 flex-shrink-0"></i> {/* Added mt-1 */}
              <span>123 Safe Street, Crowd City, SC 12345</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone-alt text-red-500 text-xl w-8 flex-shrink-0"></i>
              <a href="tel:+15551234567" className="hover:underline text-gray-700">+1 (555) 123-4567</a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope text-red-500 text-xl w-8 flex-shrink-0"></i>
              <a href="mailto:info@safecrowd.com" className="hover:underline text-gray-700">info@safecrowd.com</a>
            </li>
            <li className="flex items-center">
              <i className="fas fa-clock text-red-500 text-xl w-8 flex-shrink-0"></i>
              <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
          {/* Social Media Links */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h4>
            <div className="flex space-x-5"> {/* Increased social icon spacing */}
              <a href="https://facebook.com/safecrowd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors duration-300 text-3xl transform hover:scale-110" aria-label="Follow us on Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/safecrowd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors duration-300 text-3xl transform hover:scale-110" aria-label="Follow us on Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/safecrowd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors duration-300 text-3xl transform hover:scale-110" aria-label="Follow us on LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/safecrowd" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors duration-300 text-3xl transform hover:scale-110" aria-label="Follow us on Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;