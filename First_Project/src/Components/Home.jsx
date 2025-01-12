import React from 'react'
import Images from '../Images/User-logo.jpg'
import Images1 from '../Images/Mail-logo.jpg';
import image2 from '../Images/Vector.jpg'
import image3 from '../Images/Vector (1).jpg'
import { useState } from 'react';
import Table from './Table';
import { data } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { setdata } from '../Redux/Slice';
import { setformuserdata } from '../Redux/Slice';


function Home() 
{const [user, setUser] = useState({
   
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (event) => {
   

    
    // dispatch(setdata({description:user.description,amount:user.amount,expense_by:user.expense_by,payment_type:user.payment_type, date:user.date,fixed:user.fixed}))
   
    dispatch(setformuserdata(user))
  
  };


        
 
 return (
    <div>
  <fieldset>
        <div
          id="outfield"
          style={{
            position: 'relative',
            left: '319px',
            bottom: '530px',
            width: '1202px',
            height: '529px',
            backgroundColor: '#FFFF',
          }}
        >
          <div
            id="container"
            style={{
              height: '501px',
              width: '575px',
              textAlign: 'center',
              position: 'relative',
              left: '319px',
              top: '8px',
            }}
          >
            <h1
              style={{
                fontSize: '27px',
                fontWeight: '900',
                color: '#5D5FEF',
                fontFamily: 'sans-serif',
              }}
            >
              FORM
            </h1>
           
            <div id="input1" style={{ height: '40px', width: '574px', marginTop: '17px', border:"1px solid black", display:"flex",justifyContent:"space-evenly",alignItems:"center",borderRadius: '7.66px',outline: "none"}} >
              <img src={Images} alt=""  style={{width:"28px", height:"24px"}}/>
              <input
                style={{
                  height: '38px',
                  width: '500px',
                  outline:"none",
                color: '#5D5FEF',
                
                  
                 
                  borderRadius: '7.66px',
                }}
                type="text"
                placeholder='Item Description'
                value={user.description}
                id='input1'
                name='description'
                onChange={handleChange}
              />
            </div>
            <div id="input2" style={{ height: '40px', width: '574px', marginTop: '25px', border:"1px solid black", display:"flex",justifyContent:"space-evenly",alignItems:"center",borderRadius: '7.66px',outline: "none"}} >
              <img src={Images1} alt=""  style={{width:"28px", height:"24px"}}/>
              <input
                style={{
                  height: '38px',
                  width: '500px',
                  outline:"none",
                  color: '#5D5FEF',
                 
                  borderRadius: '7.66px',
                }}
                type="text"
                placeholder='Amount'
                name='amount'
                value={user.amount}
                onChange={handleChange}
        
              />
            </div>
            <div id="input3" style={{ height: '40px', width: '574px', marginTop: '25px', border:"1px solid black", display:"flex",justifyContent:"space-evenly",alignItems:"center",borderRadius: '7.66px',outline: "none",color: '#5D5FEF',}} >
              <img src={image2} alt=""  style={{width:"28px", height:"24px"}}/>
              <input
                style={{
                  height: '38px',
                  width: '500px',
                  outline:"none",
                  color: '#5D5FEF',
                 
                  borderRadius: '7.66px',
                }}
                type="text"
              placeholder='Expense BY'
              name='expense_by'
              value={user.expense_by}
              onChange={handleChange}
              
              />
            </div>
            <div id="input4" style={{ height: '40px', width: '574px', marginTop: '25px', border:"1px solid black", display:"flex",justifyContent:"space-evenly",alignItems:"center",borderRadius: '7.66px',outline: "none"}} >
              <img src={image2} alt=""  style={{width:"28px", height:"24px"}}/>
              <input
                style={{
                  height: '38px',
                  width: '500px',
                  outline:"none",
                  color: '#5D5FEF',
                 
                  borderRadius: '7.66px',
                }}
                type="text"
                placeholder='Payment Type'
                name='payment_type'
                value={user.payment_type}
                onChange={handleChange}
            
              />
            </div>
            <div id="input5" style={{ height: '40px', width: '574px', marginTop: '25px', border:"1px solid black", display:"flex",justifyContent:"space-evenly",alignItems:"center",borderRadius: '7.66px'}} >
              <img src={image3} alt=""  style={{width:"28px", height:"24px"}}/>
              <input
                style={{
                  height: '38px',
                  width: '500px',
                  outline:"none",
                  color: '#5D5FEF',
                 
                  borderRadius: '7.66px',
                }}
                type="text"
                placeholder='Date'
                name='date'
                value={user.date}
                onChange={handleChange}
                
              />
            </div>
            <div id="input6" style={{ height: '76px', width: '574px', marginTop: '20px', borderRadius: '7.66px' }}>
              <h4
                style={{
                  fontSize: '23px',
                  fontWeight: '600',
                  fontFamily: 'sans-serif',
                  color: '#5D5FEF',
                  position: 'relative',
                  right: '195px',
                  bottom:"4px",
                  
                }}
              >
                
               
                Expense Priority
              </h4>
              <div id="inputs" className="flex justify-between" style={{position:"relative",right:"px",width:"574px",borderRadius:"7.66px"}}>
                <div id="one" className="border-2 h-12 w-36">
                  <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input
                      id="default-checkbox"
                       type="radio"
                      defaultValue=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 "
                      style={{
                        height: '27px',
                        width: '44px',
                        position: 'relative',
                        top: '10px',
                        borderRadius: '50%',
                      }}
                      name='fixed'
                      value={user.fixed}
                      onChange={handleChange}
                      
                      
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-lg rounded-lg"
                      style={{
                        fontSize: '20px',
                        position: 'relative',
                        top: '10px',
                        fontFamily: 'sans-serif',
                        color: '#5D5FEF',
                      }}
                    >
                      Fixed
                    </label>
                  </div>
                </div>
                <div id="two" className="border-2 h-12 w-40">
                  <div
                    className="flex justify-center items-center mb-4"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <input
                      id="default-checkbox"
                      type="radio"
                      defaultValue=""
                      className="w-4 h-4 rounded-xl text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 "
                      style={{ height: '27px', width: '44px', position: 'relative', top: '10px' }}
                      name='required'
                      value={user.required}
                      onChange={handleChange}
                    />

                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-lg"
                      style={{
                        fontSize: '20px',
                        position: 'relative',
                        top: '10px',
                        fontFamily: 'sans-serif',
                        color: '#5D5FEF',
                      }}
                    >
                      Required
                    </label>
                  </div>
                </div>
                <div id="three" className="border-2 h-12 w-56">
                  <div className="flex justify-center items-center mb-4 ">
                    <input
                      id="default-checkbox"
                      type="radio"
                      defaultValue=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 "
                      style={{ height: '27px', width: '44px', position: 'relative', top: '10px' }}
                      name="not_required"
                      value={user.not_required}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-lg "
                      style={{
                        fontSize: '20px',
                        position: 'relative',
                        top: '10px',
                        fontFamily: 'sans-serif',
                        color: '#5D5FEF',
                      }}
                    >
                      Not Required
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div id="input7" style={{ height: '40px', width: '574px', marginTop: '20px' }}>
              <button
              onClick={submitForm}
              
                style={{
                  height: '40px',
                  width: '574px',
                  backgroundColor: '#5D5FEF',
                  color: '#FFFF',
                  borderRadius: '7.66px',
                  fontWeight: '700',
                  border:"1px solid "
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <p>{data}</p>
       
      </fieldset>
      
        </div>
      
    
  )
}

export default Home
