import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='bg-black py-4 flex flex-row justify-around'>

        <h1 className='text-white'>
          <NavLink to='/'>Header</NavLink></h1>
        <ul className='text-white flex space-x-5'>
          <li><NavLink to='/AboutPage'>About us</NavLink></li>
          <li><NavLink to='/Contact'>Contact us</NavLink></li>
          <li><NavLink to='/Sample'>Sign in</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
