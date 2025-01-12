import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  user: [],
  login:[],
  signup:[]
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setformuserdata(state,action){
      const newUser = { description: action.payload.description, amount: action.payload.amount,expense_by:action.payload.expense_by,payment_type:action.payload.payment_type,date:action.payload.date,fixed:action.payload.fixed  }
      state.user.push(newUser); 
     
    },
    

     setformlogindata(state,action){ 
     const newlogin={email:action.payload.email,password:action.payload.password};
     state.login.push(newlogin)
     },
     
      setsignupdata(state,action)
      {

        const newsignup={username:action.payload.username,email:action.payload.email,password:action.payload.password,confirmpass:action.payload.confirmpass,};
        state.signup.push(newsignup);
      }
     

  
 
  
  }
});

export const {setformlogindata,setformuserdata,setsignupdata} = authSlice.actions;
export default authSlice.reducer;
