import React, { useState, useEffect } from 'react';
import './PopupForm.css';
import { IoMdClose } from "react-icons/io";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

const PopupForm = ({ isOpen, onClose, triggerButtonText = "Book a Call" }) => {
  const [name, setName] = useState('');
  const [showTriggerButton, setShowTriggerButton] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  // Show trigger button after component mounts and auto-open popup after 7 seconds (only once per session)
  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('popupShown');

    // Show the trigger button after 1 second
    const buttonTimer = setTimeout(() => {
      setShowTriggerButton(true);
    }, 1000);

    // Auto-open the popup after 7 seconds if not shown yet in this session
    if (!popupShown) {
      const popupTimer = setTimeout(() => {
        onClose();
        sessionStorage.setItem('popupShown', 'true');
      }, 7000);

      return () => {
        clearTimeout(buttonTimer);
        clearTimeout(popupTimer);
      };
    }

    return () => clearTimeout(buttonTimer);
  }, [onClose]);

  // Reset form state when popup closes
  useEffect(() => {
    if (!isOpen) {
      // Wait for closing animation to complete before resetting
      const timer = setTimeout(() => {
        setName('');
        setFormErrors({});
        setSubmitStatus(null);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Validate name field
  const validateField = (name, value) => {
    let error = '';

    if (name === 'name') {
      if (!value.trim()) {
        error = 'Name is required';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters';
      }
    }

    return error;
  };

  // Handle input changes with real-time validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Only handle name input
    if (name === 'name') {
      setName(value);

      // Validate field and update errors
      const error = validateField(name, value);
      setFormErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Validate the form
  const validateForm = () => {
    const nameError = validateField('name', name);

    const errors = {
      name: nameError
    };

    setFormErrors(errors);

    // Form is valid if there are no error messages
    return !nameError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Open Calendly in a new tab
      window.open('https://calendly.com/rayansh-gosocialsect/30min?month=2025-05', '_blank');

      // Show success message
      setSubmitStatus('success');

      // Close popup after a delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Create a function to handle manual popup trigger
  const handleTriggerButtonClick = () => {
    // Reset form state before opening
    setName('');
    setFormErrors({});
    setSubmitStatus(null);

    // Toggle the popup state to open it
    onClose(); // This will toggle the isOpen state in the parent component
  };

  return (
    <>
      {showTriggerButton && !isOpen && (
        <button
          onClick={handleTriggerButtonClick}
          className="trigger-button"
          aria-label="Open booking form"
        >
          {triggerButtonText}
        </button>
      )}

      {isOpen && (
        <div className="popup-overlay show" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <span className="close" onClick={onClose} aria-label="Close form">
              <IoMdClose />
            </span>

            <h3>Book Your Free Strategy Call Right Now</h3>
            <p>Enter your name to get started</p>

            {submitStatus === 'success' ? (
              <div className="success-message">
                <FaCheck className="success-icon" />
                <p>Thank you! Redirecting you to our calendar...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="popup-form" noValidate>
                {submitStatus === 'error' && (
                  <div className="error-banner">
                    <FaExclamationTriangle />
                    <p>Something went wrong. Please try again.</p>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Your Name*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`form-input ${formErrors.name ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                    autoComplete="name"
                    autoFocus
                  />
                  {formErrors.name && (
                    <div className="error-message" id="name-error">{formErrors.name}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="popup-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Continue'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;