import React from 'react';
import list from "../../public/list.json";
import Cards from './Cards';
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 min-h-screen">
        <div className='pt-20 text-center'> {/* Changed mt-20 to pt-20 */}
          <h1 className='text-2xl md:text-4xl font-bold'>
            Explore Our <span className='text-blue-600'> Knowledge </span> Hub: Enriching Courses for Book Lovers
          </h1>
          <p className='mt-6 text-gray-600 dark:text-gray-300'>
            Learning is a lifelong journey, and our courses are designed to foster continuous growth. Dive into thought-provoking discussions, engage with fellow bookworms, and discover fresh perspectives on timeless themes. No matter where you are on your literary journey—whether you’re a novice seeking foundational knowledge or a seasoned connoisseur hungry for deeper insights—our courses cater to all levels. Explore the nuances of storytelling, explore literary theory, and gain practical skills that enhance your reading experience.
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-300'>
              Back to Home
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
