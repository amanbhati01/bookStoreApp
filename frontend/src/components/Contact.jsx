import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 dark:bg-slate-900 dark:text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 mt-8">Contact Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We’re here to help! Whether you have questions about your order, need assistance with our website, or simply want to share your thoughts, we’d love to hear from you.
          </p>
        </div>

        {/* Customer Support Hours */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Customer Support Hours</h3>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>Monday - Friday: 9:00 AM - 6:00 PM (EST)</li>
            <li>Saturday: 10:00 AM - 4:00 PM (EST)</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Contact Methods */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">How to Reach Us</h3>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> <a href="mailto:support@yourbookstore.com" className="text-blue-600">support@yourbookstore.com</a>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            <strong>Phone:</strong> <a href="tel:123-456-7890" className="text-blue-600">(123) 456-7890</a>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            <strong>Live Chat:</strong> Click the chat icon at the bottom right of the screen to chat with a representative.
          </p>
        </div>

        {/* Physical Address */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Your Bookstore Name <br />
            123 Book Street <br />
            City, State, ZIP Code
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Stay connected and follow us on our social media for updates, new arrivals, and special offers:
          </p>
          <ul className="flex justify-center gap-6 mt-4">
            <li>
              <a href="https://www.facebook.com/yourbookstore" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourbookstore" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/yourbookstore" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Have Any Questions? Reach Out Today!</h3>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Contact Us Now
          </button>
        </div>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
}

export default Contact;
