import React from "react"
import { Component } from "react"
import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import { Outlet } from "react-router-dom"




export class Layout extends Component {
    render() {
      return (
        <div style={{overflow:"hidden",overflowY:"hidden",overflowX:"hidden",margin:"0px",padding:"0px",position:"relative",bottom:"80px"}}>
          <>
          <div>
            
          <Header/>
          <Sidebar/>
          <Outlet/>
          </div>
          
  </>
          
        </div>
      )
    }
  }
  
  export default Layout