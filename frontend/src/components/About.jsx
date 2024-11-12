import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import amanImage from './amn1.jpg';

function About() {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 dark:bg-slate-900 dark:text-white">
        {/* Introduction */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 mt-6">About Our Bookstore</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Welcome to <span className="text-blue-600 font-semibold">BookStore</span>, where we believe that a good book can change your life. Our goal is to create a space where every reader can find the perfect book to spark their imagination and inspire their next adventure.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            At BookStore, our mission is to promote the love of reading by providing readers with a diverse collection of literature. We aim to connect people with books that enrich their lives, inspire creativity, and spark thoughtful conversations.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We envision a world where every person has access to great books, creating a community of curious minds and lifelong learners. Whether it’s fiction, non-fiction, or something in between, we’re here to help you discover new worlds one book at a time.
          </p>
        </div>

        {/* The Story Behind the Bookstore */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our journey began in 2010 when a group of passionate book lovers decided to share their love for literature with the world. What started as a small independent store has grown into an online hub where readers from around the globe can discover, explore, and dive into thousands of carefully curated books. We’re proud of our humble beginnings and remain dedicated to supporting our community of readers, authors, and publishers.
          </p>
        </div>

        {/* Core Values */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Passion for books and literature</li>
            <li>Commitment to diversity and inclusivity in reading</li>
            <li>Providing excellent customer service</li>
            <li>Supporting local authors and independent publishers</li>
            <li>Building a community of lifelong readers</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs">
              <img src={amanImage} alt="Team Member" className="rounded-full mx-auto mb-4"/>
              <h4 className="font-bold">Aman Bhati</h4>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
            <div className="max-w-xs">
              <img src="/team/team2.jpg" alt="Team Member" className="rounded-full mx-auto mb-4"/>
              <h4 className="font-bold">John Smith</h4>
              <p className="text-sm text-gray-500">Lead Curator</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">What Our Readers Say</h3>
          <blockquote className="text-gray-600 dark:text-gray-300 italic">
            "BookStore has completely transformed the way I discover new books. Their recommendations are spot-on, and I love the diversity of their collection!"
            <br />— Sarah, Avid Reader
          </blockquote>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Join Our Reading Community!</h3>
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
}

export default About;
