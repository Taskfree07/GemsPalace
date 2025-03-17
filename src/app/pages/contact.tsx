// pages/contact.tsx
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us using the form below:</p>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Message:</label>
        <textarea />
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactPage;