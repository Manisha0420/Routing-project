import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Product = () => {
 
  const navigate = useNavigate();
  const navigateHandler = () =>{
    navigate("/details")
  }

  return (
    <div className='p-4'>
      <h1>PRODUCT DETAILS</h1>
      <button onClick={navigateHandler} className='px-4 py-2 bg-red-500 text-white'>See Details</button>
      <Outlet/>

    </div>
  )
}

export default Product
