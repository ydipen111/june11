import React from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import AboutPage from './Pages/AboutPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Pages/Contact.jsx'
import Sample from './Pages/Sample.jsx'
import Sample2 from './Pages/Sample2'
import RootLayout from './Pages/RootLayout.jsx'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'AboutPage',
          element: <AboutPage />,
        },
        {
          path: 'Contact',
          element: <Contact />
        },
        {
          path: 'Sample',
          element: <Sample />
        },
        {
          path: 'Sample2',
          element: <Sample2 />
        }
      ]
    }

  ])

  return <RouterProvider router={router} />
}


export default App
