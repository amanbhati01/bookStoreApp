import React from 'react';
import { Link } from 'react-router-dom'; 
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal dark:bg-white dark:text-white">
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border white">
          {/* Form without method="dialog" to avoid closing behavior */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg text-indigo-600">Login</h3>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-80 px-3 py-1 border rounded-md dark:bg-slate-900 text-black dark:text-white" 
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-500">email is required</span>}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input 
                type="password" 
                placeholder="Enter your Password" 
                className="w-80 px-3 py-1 border rounded-md dark:bg-slate-900 text-black dark:text-white" 
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">password is required</span>}
            </div>

            {/* Login Button and Signup Link */}
            <div className="flex justify-around mt-7">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                Login
              </button>
              <p>
                Not registered? 
                <Link to="/signup" className="underline text-blue-600 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
