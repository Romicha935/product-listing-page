import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

   return (
    <div className='flex justify-between py-4 px-10 border-b-2 border-gray-200'>
        <h2 className='text-2xl font-bold'>Shop</h2>
        <ul className='flex gap-6'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar






















