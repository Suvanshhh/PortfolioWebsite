import React, { useState } from 'react';
import styles from './Terminal.module.css';

function Terminal({ description }) {
  const tabs = ['Problems', 'Output', 'Debug Console', 'Terminal', 'Contact'];
  const [activeTab, setActiveTab] = useState('Terminal');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('Preparing email...');

    // Create a mailto link with form data
    const mailtoLink = `mailto:choudharysuvansh05@gmail.com?subject=Contact%20Form%20Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open the user's default mail client with the drafted email
    window.location.href = mailtoLink;

    setFormStatus('Email client opened. Please send the email manually.');
  };

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={styles.terminalContent}>
        {activeTab === 'Contact' ? (
          <form onSubmit={sendEmail} className={styles.contactForm}>
            <div>
              <label htmlFor="name">Name:</label><br />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label><br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label><br />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Send</button>
            <p>{formStatus}</p>
          </form>
        ) : (
          <pre>{description}</pre>
        )}
      </div>
    </div>
  );
}

export default Terminal;
