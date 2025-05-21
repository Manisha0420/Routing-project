import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

const ProductDetails = () => {
 const navigate = useNavigate() 

  return (
    <div className='p-12'>
          <h1>Product details huehue</h1>
          <h1>Product details huehue</h1>
          <h1>Product details huehue</h1>
          <h1>Product details huehue</h1>
          <button onClick={()=>navigate(-1)} className=' px-4 py-2 bg-red-500 text-white'>GO BACK</button>
    </div>
  )
}

export default ProductDetails
