import React from "react";
import { NavLink } from "react-router-dom";
import image from '../Images/default.jpg';
import image1 from '../Images/question.png';
import image2 from '../Images/Sign-in.jpg';
import image3 from '../Images/sharp.png';
import image5 from '../Images/Home.png';
import image6 from '../Images/logo1.png'
import image7 from '../Images/Calender.png'
import image8 from '../Images/Billing.png'

function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div className="w-1/5 p-4">

      
        <div className="flex items-center space-x-2 mb-3" style={{ alignItems: "center", position: "relative", bottom: "15px" }}>
          <img

            className="h-7 w-7"
            src={image6}
            alt="logo"
          />
          <h1 className="text-xl font-semibold">Rahul’s Dashboard</h1>
        </div>
        

        <div>
        <NavLink to="/dash">
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer" style={{ backgroundColor: "#FFFFFF"}}>
        
            <div className="h-8 w-8" style={{ backgroundColor: "#FFFFFF", borderRadius: "35%" }}>
              <img
                className="h-7 w-7 rounded-lg"
                style={{ borderRadius: "35%", backgroundColor: "#4FD1C5" }}
                src={image5}
                alt="icon"
              />
            </div>
          
           
            <h1 className="text-lg">Dashboard</h1>
         
          </div>
          </NavLink>

          <div>
            <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
             
              <div className="h-8 w-8" style={{ backgroundColor: " #4FD1C5", borderRadius: "35%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  className="h-7 w-7 rounded-lg"
                  style={{ borderRadius: "35%" }}
                  src={image7}
                  alt="icon"
                />
                
              </div>
              <NavLink to="/table">
              <h6 className="text-gray-400">Calender</h6>
              </NavLink>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              <div className="h-8 w-8" style={{ backgroundColor: "#FFFF", borderRadius: "35%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  className="h-7 w-7 rounded-lg"
                  style={{ borderRadius: "35%" }}
                  src={image8}
                  alt="icon"
                />
              </div>
              <h1 className="text-gray-400">Calculatoter</h1>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-2">
          <h1 className="text-xl font-semibold">Account Pages</h1>
          <div>
            <NavLink to='/prop'>
            
            <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              <img
                className="h-7 w-7 rounded-lg"
                style={{ borderRadius: "35%" }}
                src={image}
                alt="icon"
              />
              <h1 className="text-gray-400">Profile</h1>
            </div>
            </NavLink>

            <NavLink to="/signin" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              <div className="h-8 w-8" style={{ backgroundColor: "#FFFF", borderRadius: "35%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  className="h-7 w-7 rounded-lg"
                  style={{ borderRadius: "35%" }}
                  src={image2}
                  alt="icon"
                />
              </div>
              <h1 className="text-gray-400">Sign In</h1>
            </NavLink>

            <NavLink to="/signup" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
              <div className="h-8 w-8" style={{ backgroundColor: "#FFFF", borderRadius: "35%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  className="h-7 w-7 rounded-lg"
                  style={{ borderRadius: "35%" }}
                  src={image3}
                  alt="icon"
                />
              </div>
              <h1 className="text-gray-400">Sign Up</h1>
            </NavLink>
          </div>
        </div>

        <div className="mt-3 h-40 space-y-4 ml-4 rounded-xl" style={{ backgroundColor: "#4FD1C5" }}>
          <div className="flex items-center justify-center rounded-lg bg-white w-10 h-10" style={{ position: "relative", left: "15px", top: "10px", textAlign: "center" }}>
            <div style={{ height: "25px", width: "25px", borderRadius: "50%", backgroundColor: "#4FD1C5" }}>
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="items-center space-x-4">
           <h4 style={{margin:"4px",position:"relative",left:"10px"}}>Add my Expense</h4>
                  <NavLink to="/home">
            <button className="px-4 py-2 mt-4 text-black bg-white rounded-md w-56">Add Expense</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
