import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus('');

    const formData = new FormData(e.target);
    const formDetails = Object.fromEntries(formData.entries());

    const backendUrl = 'http://localhost:5000/submit-form'; 

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setMessageStatus('Message sent! 🎉');
      } else {
        setMessageStatus('Oops! Something went wrong. 😞');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessageStatus('Oops! Something went wrong. 😞');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2><center>Contact Me ✉️</center></h2>
        <p>I'd love to hear from you! Please fill out the form below to get in touch.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name.." />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="you@example.com" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required placeholder="Type your message here..."></textarea>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {messageStatus && <p className="message-status">{messageStatus}</p>}
      </div>
    </section>
  );
};

export default Contact;
