import  { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = ({handleLogin}) => {
  // console.log(handleLogin);
  
  const [showPassword, setShowPassword] = useState(true)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    // Assuming there's a function to handle the login logic
    // This is a placeholder for the actual login logic
    console.log("Login form submitted");
    // Example of how to access form data
    console.log(`Email: ${email}, Password: ${password}`);
    handleLogin(email,password)
    setEmail("")
    setPassword("")

  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
        <form onSubmit={submitHandler} className="w-2/4">
          <div className="mb-4 text-xl">
            <label htmlFor="email" className="block font-medium text-white">Email</label>
            <input type="email" name="email" id="email" className="mt-1 block h-10 w-full rounded-md text-black border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-xl font-medium text-white">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} name="password" id="password" className="mt-1 text-black block w-full rounded-md h-10 border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
            <label htmlFor="remember-me" className="ml-2 block text-2xl text-white">Remember me
            </label>
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-3xl font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Log in</button>
        </form>
      </div>
    </>
  )
}

export default Login