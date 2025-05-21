import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-1/3 px-10 bg-yellow-50 border-r-0 h-screen'>
        <h1 className='text-2xl py-4 font-bold'>Categories</h1>
        <ul className='space-y-3'>
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
            <li>Books</li>
        </ul>
    </div>
  )
}

export default Sidebar