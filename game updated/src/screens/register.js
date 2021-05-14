import React, { useState } from 'react';
import authSvg from '../assests/auth.svg';
import { ToastContainer } from 'react-toastify';


import { Link, Redirect } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const handleSubmit = (event) => {
    console.log("triggerd")
    //event.preventDefault()
    if (!name || !email || !password1 || !password2) {
      alert("Please enter the details");
      return
    }
    if (password1 !== password2) {
      alert("Password don't match")
      return
    }
    var users = []
    users = JSON.parse(localStorage.getItem('users')) == null ? [] : JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {

        alert("User already exist");
        return
      }
    }
    const obj = { 'name': name, 'email': email, 'password1': password1, 'password2': password2, answers: [] }
    users.push(obj);
    localStorage.removeItem('users');
    users.sort((a, b) => a.email.localeCompare(b.email));
    localStorage.setItem('users', JSON.stringify(users));

  }


  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>

      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Sign Up for Congar
          </h1>

            <form onSubmit={handleSubmit}
              className='w-full flex-1 mt-8 text-indigo-500'

            >
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Name'
                  onChange={(e) => {
                    setName(e.target.value)

                  }}
                  value={name} />



                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword1(e.target.value)}
                  value={password1}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                />
                <Link
                  to="/"
                  type='submit'
                  onClick={() => handleSubmit()}
                  className='lg-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  Register
              </Link>


              </div>


            </form>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
    ;
    </div>
  )
}

export default Register
