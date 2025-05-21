import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=> {
        fetch('/products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
  return (
    <div className='w-2/3 bg-yellow-50 pb-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 mx-auto px-10'>
         {
        products.map((item,index)=> (
            <div className='bg-white border rounded-2xl py-2' key={index}>
                <img className='w-full p-7' src={item.image} alt="" />
                <h2 className='text-xl font-bold px-7'>{item.name}</h2>
                <p className='px-7 font-semibold'>{item.category}</p>
                <p className='px-7 text-2xl text-yellow-500 font-bold'>${item.price}</p>
            </div>
        ))
       }
      </div>
    </div>
  )
}

export default Products