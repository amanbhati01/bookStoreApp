import React from 'react';

function Cards({ item }) {
  return (
    <div className="mt-6 my-3 p-3">
      <div className="card bg-base-100 w-full md:w-80 shadow-xl flex flex-col transition-transform transform hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
        {/* Figure for uniform image sizing with 'contain' to prevent cropping */}
        <figure className="w-full h-48 overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt="Books"
            className="w-full h-full object-cover"  // Ensures entire image fits without cropping
          />
        </figure>

        <div className="card-body flex-grow p-4">
          <h2 className="card-title flex justify-between items-center">
            {item.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-gray-600 mt-2">{item.author}</p>
          <h3 className="mt-2 text-gray-500">{item.year}</h3>

          <div className="card-actions flex justify-between items-center mt-4">
            <div className="badge badge-outline">{item.category}</div>
            <div className="cursor-pointer px-4 py-1 rounded-full border-2 border-blue-700 hover:bg-blue-700 hover:text-white duration-200">
              BUY NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
