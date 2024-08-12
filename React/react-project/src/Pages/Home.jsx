import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Display from './Home/Display'


function Home() {
  return (
    <div>
      <Display />

      <Outlet />

    </div>
  )
}

export default Home
