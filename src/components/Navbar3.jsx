import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar3() {
  return (
    <div className="navbar text-gray-900 flex flex-col md:flex-row space-x-3  items-center h-[10vh] bg-white mb-12 md:mb-4 " >
      <NavLink to="/" className="logo pl-[1em] text-[1.4rem] font-medium leading-loose mr-auto">

      <div >
        RateMyProf
      </div>
      </NavLink>

      <div className="logins flex space-x-1 md:space-x-2 w-full md:w-auto p-4" style={{marginRight:"2rem", marginLeft:"2rem"}}>
        <div className="signup text-gray-900 text-[16px] font-semibold leading-normal bg-neutral-100 w-36 h-12 flex items-center justify-center rounded-[38px] mr-auto" >
            <NavLink to="/signup" className="">

          <button  className="">Sign Up</button>
            </NavLink>
        </div>
        <div className="signin text-white text-[16px] font-semibold leading-normal w-36 h-12 flex items-center justify-center bg-gray-900  rounded-[38px] ml-auto">
            <NavLink to="/login" className="">
          <button className="">Sign In</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
