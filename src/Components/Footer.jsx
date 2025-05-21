import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-gray-400 text-white pt-10 pb-6 px-4'>
     <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4'>
        <div>
            <h2>Shop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iste?</p>
        </div>
        <div>
            <h3>Quck links</h3>
            <ul className='text-gray-300 space-y-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/products">products</a></li>
            </ul>
        </div>
        <div>
            <h3>Support</h3>
            <ul className='text-gray-300 space-y-3'>
                <li><a href="/">FAQS</a></li>
                <li><a href="#">privecy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Help Center</a></li>
            </ul>
        </div>
        <div>
            <h3>Social links</h3>
            <ul className='text-gray-300 space-y-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/products">products</a></li>
            </ul>
        </div>
        
    </div>
   </footer>
  )
}

export default Footer