// src/components/Modal.jsx
import React, { useEffect, useRef, useCallback } from 'react';

const Modal = ({ title, content, onClose }) => {
  const modalRef = useRef(null);

  // Function to handle closing the modal with animation, memoized with useCallback
  const handleClose = useCallback(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    modalElement.classList.remove('opacity-100');
    modalElement.querySelector('.modal-box').classList.remove('scale-100');
    modalElement.querySelector('.modal-box').classList.add('scale-95');

    // Remove modal from DOM after transition ends
    modalElement.addEventListener('transitionend', () => {
      onClose(); // Call the onClose prop to remove the modal from parent state
    }, { once: true });
  }, [onClose]); // Dependency array includes onClose

  // Effect to handle modal open/close animations and click outside to close
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    // Add opacity and scale classes for animation
    setTimeout(() => {
      modalElement.classList.add('opacity-100');
      modalElement.querySelector('.modal-box').classList.remove('scale-95');
      modalElement.querySelector('.modal-box').classList.add('scale-100');
    }, 10);

    // Handle click outside the modal box to close
    const handleClickOutside = (event) => {
      if (modalElement && modalElement === event.target) {
        // Only close if the click is directly on the overlay, not the modal box itself
        handleClose();
      }
    };

    modalElement.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      modalElement.removeEventListener('click', handleClickOutside);
    };
  }, [handleClose]); // Dependency array includes handleClose

  return (
    <div ref={modalRef} className="modal-overlay">
      <div className="modal-box">
        {/* Close button */}
        <span className="modal-close" onClick={handleClose}>
          &times;
        </span>
        {/* Modal title */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        {/* Modal content, rendered using dangerouslySetInnerHTML as it comes from HTML snippets */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Modal;
