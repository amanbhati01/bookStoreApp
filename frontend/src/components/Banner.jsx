import React from 'react'

function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-14'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-12'>
          <div className='space-y-10'>
            <h1 className='text-4xl font-bold'>
              Hi, welcome to your ultimate book haven, where every story finds its<span className='text-blue-600'> reader !!!</span></h1>
            <p className='text-xl'>“At our bookstore, every book transports you to new worlds and ignites your imagination. From thrilling mysteries to heartwarming romances and insightful non-fiction, our selection has something for everyone. Join us and discover the joy of reading. Happy reading!”</p>
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white bg-white text-black border dark:border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 dark:fill-white fill-black">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow bg-white dark:bg-slate-900 text-black dark:text-white outline-none"
                placeholder="Email" />
            </label>

          </div>
          <button className="btn mt-5 btn-primary text-white">Contact Us</button>
        </div>
        <div className=' order-1 w-full md:w-1/2'>
          <img className='mt-2' src='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?t=st=1724137931~exp=1724141531~hmac=06e91e54917f945d512b013ab3f4c99e51252f9555ded2cb5af20dd2641b96ff&w=900' alt='banner_image'>
          </img></div>
      </div>
    </>
  )
}

export default Banner
