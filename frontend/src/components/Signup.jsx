import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div id="signup_modal" className="">
      <div className="modal-box w-[90vw] h-[100vh] p-8 shadow-lg rounded-lg dark:bg-slate-900 dark:text-white">


          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
          <h3 className="font-bold text-lg text-indigo-600">Signup</h3>

          {/* Name input */}
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 text-black dark:text-white"
              {...register("name", { required: true })}
            />
             <br/>
             {errors.name && <span className="text-sm text-red-500">name is required</span>}
          </div>

          {/* Email input */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 text-black dark:text-white"
              {...register("email", { required: true })}
            />
            <br/>
            {errors.email && <span className='text-sm text-red-500'>email is required</span>}
          </div>

          {/* Password input */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input 
              type="password" 
              placeholder="Enter your Password" 
              className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 text-black dark:text-white"
              {...register("password", { required: true })}
            />
            <br/>
            {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
          </div>

          {/* Confirm Password input */}
          <div className='mt-4 space-y-2'>
            <span>Confirm Password</span>
            <br />
            <input 
              type="password" 
              placeholder="Confirm your Password" 
              className="w-full px-3 py-2 border rounded-md dark:bg-slate-900 text-black dark:text-white"
              {...register("name", { required: true })}
            />
            <br />
            {errors.password && <span className='text-sm text-red-500'>confirm password is required</span>}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-7">
            <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700 duration-300">
              Signup
            </button>
            <p>
              Already registered?{' '}
              <button className='underline  text-blue-500 cursor-pointer' onClick={()=>
                document.getElementById("my_modal_3").showModal()
              }>
              
                Login
                </button>{""}
              
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
