import React, { Component } from "react";
import { Link } from "react-router-dom";
import welcomeSvg from './assests/welcome.svg';
import { ToastContainer, toast } from 'react-toastify';

function App() {
 
    return (
      <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
   
<ToastContainer />
        <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div
      className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${welcomeSvg})` }}
    ></div>
  <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
    <div className='mt-12 flex flex-col items-center'>
      <h1 className='text-2xl xl:text-3xl font-extrabold'>
        Sign Up for Quiz
      </h1>

      <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
    </div>
  </div>
  
    
  </div>
</div>
</div>

    );
  }


export default App;
