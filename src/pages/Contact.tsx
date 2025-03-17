import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">Feel free to reach out to us!</p>

      <form className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 font-semibold">Name:</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Your Name" />

        <label className="block mb-2 font-semibold">Email:</label>
        <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Your Email" />

        <label className="block mb-2 font-semibold">Message:</label>
        <textarea className="w-full p-2 border rounded mb-4" placeholder="Your Message"></textarea>

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
