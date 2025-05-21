import React from 'react'
import Sidebar from './Sidebar'
import Products from './Products'

const Home = () => {
  return (
    <div className='flex gap-16'>
      <Sidebar/>
      <Products/>
    </div>
  )
}

export default Home 

