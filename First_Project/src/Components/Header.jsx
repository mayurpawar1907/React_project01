import React from "react";

import image2 from '../Images/Cart.png'
import image1 from '../Images/one.png'
import image3 from '../Images/text.png'
import image4 from '../Images/month.png'

function Header() {
  return (
    <div>
      <nav>
        <fieldset>
       
      
      
            <div
            id="container"
            style={{
              position: "relative",
              left: "318px",
              top: "155px",
              display: "flex",
            }}
          >
            
            
          
            <div
              id="boxes"
              className="flex"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "79%",position:"relative",bottom:"25px"
              }}
            >
              <div
                id="one"
                className="w-260 h-30 rounded-xl"
                style={{
                  height: "80px",
                  width: "280px",
                  backgroundColor: "#FFFF",display:"flex",alignItems:"center"
                }}
              >
                <div id="text" style={{width:"70%",height:"70px"}}> <p style={{color:'grey',fontFamily:"sans-serif",fontSize:"18px",position:"relative",left:"16px"}}>Today’s Expense</p>
                <h1 style={{fontSize:"22px",fontWeight:"700",position:"relative",left:"16px"}}> Rs. 3000</h1></div>
                <div id="logo" className="rounded-xl" style={{width:"30%",height:"60px",position:"relative",right:"10px",backgroundColor:"#4FD1C5",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <img className="w-12 h-12" src={image1} alt="" />
                </div>
              </div>
              <div
                id="two"
                className="w-260 h-30  rounded-xl"
                style={{
                  height: "80px",
                  width: "280px",
                  backgroundColor: "#FFFF",display:"flex",alignItems:"center"
                }}
              >
                <div id="text" style={{width:"70%",height:"70px"}}> <p style={{color:'grey',fontFamily:"sans-serif",fontSize:"18px",position:"relative",left:"16px"}}>Monthly Expense</p>  <h1 style={{fontSize:"22px",fontWeight:"700",position:"relative",left:"16px"}}>Rs. 25300</h1> </div>
                <div id="logo" className="rounded-xl" style={{width:"30%",height:"60px",position:"relative",right:"10px",backgroundColor:"#4FD1C5",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <img  style={{width:"50px",height:"50px"}} src={image4} alt="" />
                </div>
              </div>
              <div
                id="three"
                className="w-260 h-30 rounded-xl"
                style={{
                  height: "80px",
                  width: "280px",
                  backgroundColor: "#FFFF",display:"flex",alignItems:"center"
                }}
              >
                <div id="text" style={{width:"70%",height:"70px"}}> <p style={{color:'grey',fontFamily:"sans-serif",fontSize:"18px",position:"relative",left:"16px"}}>Monthly Salary</p> <h1 style={{fontSize:"22px",fontWeight:"700",position:"relative",left:"16px"}}>Rs. 50000</h1> </div>
                <div id="logo" className="rounded-xl" style={{width:"30%",height:"60px",position:"relative",right:"10px",backgroundColor:"#4FD1C5",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <img src={image3} alt="" />
                </div>
              </div>
              <div
                id="four"
                className="w-260 h-30  rounded-xl"
                style={{
                  height: "80px",
                  width: "280px",
                  backgroundColor: "#FFFF",display:"flex",alignItems:"center"
                }}
              >
                <div id="text" style={{width:"70%",height:"70px"}}> <p style={{color:'grey',fontFamily:"sans-serif",fontSize:"18px",position:"relative",left:"16px"}}>Remaining Balance</p>  <h1 style={{fontSize:"22px",fontWeight:"700",position:"relative",left:"16px"}}>$173,000</h1> </div>
                <div id="logo" className="rounded-xl"  style={{width:"30%",height:"60px",position:"relative",right:"10px",backgroundColor:"#4FD1C5", display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <img src={image2} alt=""  className="h-12 w-12"/>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </nav>
      
    </div>
  );
}

export default Header;
