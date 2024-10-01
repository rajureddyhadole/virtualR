import React from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';

const Navbar = () => {
  return (
    <nav className='sticky top-0 border-b backdrop-blur-lg border-neutral-700/80'>
      <div className='container relative px-4 mx-auto text-sm'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center flex-shrink-0'>
            <img className='w-10 h-10 mr-2' src={logo} alt="logo" />
            <span className='text-xl tracking-tight'>VirtualR</span>
          </div>
          <ul className='hidden space-x-12 lg:flex ml-14'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='items-center justify-center hidden space-x-12 lg:flex'>
            <a href="#" className='px-3 py-2 border rounded-md'>
              Sign In
            </a>
            <a href="#" className='px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
              Create an account
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar