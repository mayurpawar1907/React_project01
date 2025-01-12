import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setformlogindata } from '../Redux/Slice';

function Sign_In() {
  const [loginData,setloginData]=useState({
    email:'',
    password:''
  });
const dispatch=useDispatch();
const handel=(e)=>{
  setloginData({
    ...loginData,
    [e.target.name]:e.target.value
  })

}
const submit = (e) => {
  e.preventDefault(); 
  dispatch(setformlogindata(loginData));
  setloginData({
    email:'',
    password:''
  })
};




  return (
    <div style={{position:"relative",bottom:"520px", width:"1199px",left:"318px",backgroundColor:"#FFFF",height:"518px", borderRadius:"7.66px", display:"flex",justifyContent:"center",alignItems:"center"}}>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm" style={{height:"397px",border:"1px solid #4FD1C5"}}>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handel}
             
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none"
             
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none"
              value={loginData.password}
              onChange={handel}
           
             
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style={{ backgroundColor: '#4FD1C5' }}
              onClick={submit}
            
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-semibold" style={{ color: '#4FD1C5' }}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      </div>
  
  );
}

export default Sign_In;


