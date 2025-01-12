import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Profile() {
  const one = useSelector((state) => state.auth.signup);
  // const two=useSelector((state)=>state.auth.signup)
 


  return (
     <div>
              <h2>Submitted Data</h2>
              <table border="1" className=" w-full">
                <thead>
                  
                  <tr> <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              ID
            </th>
            <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              <img src="" alt="Date Icon" className="w-4 inline mr-2" />
              Date
            </th>
            <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              <img src="" alt="Items Icon" className="w-4 inline mr-2" />
              Items
            </th>
            <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              <img src="" alt="Price Icon" className="w-4 inline mr-2" />
              Price
            </th>
            <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              <img src="" alt="Payment Type Icon" className="w-4 inline mr-2" />
              Payment Type
            </th>
            <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              <img src="" alt="Expense By Icon" className="w-4 inline mr-2" />
              Expense By
            </th>
            <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              <img src="" alt="Expense Priority Icon" className="w-4 inline mr-2" />
              Expense Priority
            </th>
            <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
              <img src="" alt="Actions Icon" className="w-4 inline mr-2" />
              Actions
            </th>
                  </tr>
                </thead>
                <tbody>
                 
                  {Array.isArray(one) && one.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="text-center px-4 py-2">
                        No data submitted yet
                      </td>
                    </tr>
                  ) : (
                   
                    Array.isArray(one) &&
                    one.map((entry, index) => (
                      <tr key={index}>
                               <td    className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
                                
              {index}
            </td>
                   <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
              {entry.username}
            </td>
            <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
              {entry.email}
            </td>
            <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
              {entry.password}
            </td>
            <td className="border-2 border-gray-300 p-3 text-center text-sm font-semibold">
              {entry.confirmpass}
            </td>
            <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
              {entry.date}
            </td>
            <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
              {entry.fixed}
            </td> 
            <td className="border-2 border-gray-300 p-3" style={{textAlign:"center"}}>
      <button><img style={{height: "24px", width: "25px"}} src={image6} alt="" /></button>
      <button><img style={{height: "27px", width: "28px"}} src={image7} alt="" /></button>
    </td>
    
            
                       
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
        

    
  )
}


export default Profile;
