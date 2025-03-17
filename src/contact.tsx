import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-8">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, please use the form below to get in touch.
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="your@email.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
          />
        </div>
        <button
          className="bg-[#c4a484] hover:bg-[#b39474] text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;