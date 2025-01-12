import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; 
import setsignupdata from '../Redux/Slice'

function Signup() {
  const [signup,setsignup]=useState({
    username:'',
    email:'',
    password:'',
    confirmpass:''



  });
 const dispatch = useDispatch();
 const handeledata=(e)=>{
  setsignup({
    ...signup,
    [e.target.name]:e.target.value
  })

 }
 const submit=(e)=>{
  e.preventDefault(); 
  dispatch(setsignupdata(signup));
  setsignup({
    username:'',
    email:'',
    password:'',
    confirmpass:''


  })


 }


  return (
    
    <div>
        <>

  <div style={{position:"relative",bottom:"520px", width:"1199px",left:"318px",backgroundColor:"#FFFF",height:"518px", borderRadius:"7.66px", display:"flex",justifyContent:"center",alignItems:"center"}}>
  <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md " style={{height:"500px",border:"1px solid #4FD1C5"}}>
    <h2 className="text-2xl font-semibold text-center mb-2 text-gray-700">
      Create an Account
    </h2>
    <form action="/submit-signup" method="POST">
      <div className="mb-3">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
          required=""
          value={signup.username}
          onChange={handeledata}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
          required=""
          value={signup.email}
          onChange={handeledata}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
          required=""
          value={signup.password}
          onChange={handeledata}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirmpass"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          required=""
          value={signup.confirmpass}
          onChange={handeledata}
        />
      </div>
      <button
      onClick={submit}
        type="submit"
        className="w-full p-3  text-white rounded-md hover:bg-blue-600 focus:outline-none" style={{backgroundColor:" #4FD1C5"}}
      >
        Sign Up
      </button>
    </form>
    <p className="mt-2 text-center text-sm text-gray-600">
      Already have an account?{" "}
      <a href="login.html" className=" hover:underline" style={{color:" #4FD1C5"}}>
        Login here
      </a>
    </p>
  </div>
  </div>
</>

      
    </div>
  )
}

export default Signup
