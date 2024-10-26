import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true)
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
        <div className="w-3/4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} name="password" id="password" className="mt-1 text-black block w-full rounded-md h-10 border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your password" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute z-10 top-0 right-0">
                
                {showPassword ? (
                  <FaRegEye className='absolute z-10 h-10 w-10 text-black pl-2' />
                ) : (
                    <FaRegEyeSlash  className='absolute z-10 h-10 w-10 text-black pl-2' />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-white">Remember me
            </label>
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
        </div>
      </div>
    </>
  )
}

export default Login