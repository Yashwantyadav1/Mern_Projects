import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Enquiry submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to submit enquiry.');
      }
    } catch (err) {
      alert('Error submitting enquiry. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enquiry Form</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnquiryForm;
