// ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto my-10 max-w-7xl mt-20">
      <div className="text-4xl font-bold text-gray-700 mb-8">Contact Us</div>

      <div className="text-lg text-gray-700 dark:text-gray-600">
        <p className="mb-8">
          Have questions or need assistance? Feel free to reach out to us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main Street, Cityville, Country</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your name"
                  className="mt-1 p-2 w-full border"
                  style={{ outline: 'none', border: '2px solid gray' }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="yourmail@example.com"
                  className="mt-1 p-2 w-full border"
                  style={{ outline: 'none', border: '2px solid gray' }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write message here"
                  rows="4"
                  className="mt-1 p-2 w-full border"
                  style={{ outline: 'none', border: '2px solid gray' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
