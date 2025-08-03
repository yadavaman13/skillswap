
import React, { useEffect, useState } from 'react'
import '../App.css'

const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your registration logic here
  };

  return (
    <div /* This div-container is used to center the login form */
        className='min-h-screen flex items-center justify-center'
        >
          <div style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }} 
          /* This div-container contains the login form */
            className="shadow-lg rounded-xl p-10 flex items-center justify-center gap-10 flex-col"
          >
            <h1 className='text-3xl font-bold'>Login</h1>
            <form
              className=" flex items-center flex-col gap-5"
              action="" onSubmit={handleForm}>
              <div /* Input wrapper for input fields and icons */
                className='border-2 border-black-300 rounded-lg p-2.5 flex items-center gap-2'
              >
                <i className="ri-user-line input-icon"></i>
                <input className="input-container border-none outline-0" placeholder="Username" type="text" name="" id="" value={username} onChange={(e) => {
                  setUserName(e.target.value)
                }}
                />
              </div>
              <div /* Input wrapper for input fields and icons */
                className='border-2 border-black-300 rounded-lg p-2.5 flex gap-2 items-center'
              >
                <i className="ri-lock-line input-icon"></i>
                <input className="input-container border-none outline-0" placeholder="Password" type="text" name="" id="" value={password} onChange={(e) => {
                  setPassword(e.target.value)
                }}
                />
              </div>
    
              <input
                className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mt-4'
                type="submit"
                value="Submit"
              />
            </form>
            
          </div>
        </div>
    
  )
}

export default Register
