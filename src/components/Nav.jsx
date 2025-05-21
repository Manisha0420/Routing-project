import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex p-5 justify-center gap-10 font-semibold  '>
          <NavLink className={(e)=>(e.isActive ? "text-blue-500 underline": "")}  to="/">Home</NavLink>
          <NavLink className={(e)=>(e.isActive ? "text-blue-500 underline": "")}  to="/about">About</NavLink>
          <NavLink className={(e)=>(e.isActive ? "text-blue-500 underline": "")}  to='/product'>Product</NavLink>
          <NavLink className={(e)=>(e.isActive ? "text-blue-500 underline": "")}  to='service'>Service</NavLink>

    </div>
  )
}

export default Nav
