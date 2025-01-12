import React from 'react';
import { useSelector } from 'react-redux';
import image1 from '../Images/Date.png'
import image2 from '../Images/Expense.png'
import image3 from '../Images/items.png'
import image4 from '../Images/price.png'
import image5 from '../Images/Priority.png'
import image6 from '../Images/Delete.png'
import image7 from '../Images/upadate.png'

function Table() {

  const datas = useSelector((state) => state.auth.user);

  return (
    <div>
      <div
        style={{
          position: 'relative',
          bottom: '520px',
          width: '1199px',
          left: '318px',
          backgroundColor: '#FFFF',
          height: '518px',
          borderRadius: '7.66px',
        }}
      >
        <div>
          <h2>Submitted Data</h2>
          <table border="1" className=" w-full">
            <thead>
              
              <tr> <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          ID
        </th>
        <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          <img src={image1} alt="Date Icon" className="w-4 inline mr-2" />
          Date
        </th>
        <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          <img src={image3} alt="Items Icon" className="w-4 inline mr-2" />
          Items
        </th>
        <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          <img src={image4} alt="Price Icon" className="w-4 inline mr-2" />
          Price
        </th>
        <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          <img src={image3} alt="Payment Type Icon" className="w-4 inline mr-2" />
          Payment Type
        </th>
        <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          <img src={image2} alt="Expense By Icon" className="w-4 inline mr-2" />
          Expense By
        </th>
        <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          <img src={image5} alt="Expense Priority Icon" className="w-4 inline mr-2" />
          Expense Priority
        </th>
        <th className="border-2 border-gray-300 bg-gray-100 p-3 text-center text-sm font-semibold">
          <img src={image5} alt="Actions Icon" className="w-4 inline mr-2" />
          Actions
        </th>
              </tr>
            </thead>
            <tbody>
             
              {Array.isArray(datas) && datas.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center px-4 py-2">
                    No data submitted yet
                  </td>
                </tr>
              ) : (
               
                Array.isArray(datas) &&
                datas.map((entry, index) => (
                  <tr key={index}>
                           <td    className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
                            
          {index}
        </td>
               <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
          {entry.description}
        </td>
        <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
          {entry.amount}
        </td>
        <td className="border-2 border-gray-300  p-3 text-center text-sm font-semibold">
          {entry.expense_by}
        </td>
        <td className="border-2 border-gray-300 p-3 text-center text-sm font-semibold">
          {entry.payment_type}
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
      </div>
    </div>
  );
}

export default Table;
