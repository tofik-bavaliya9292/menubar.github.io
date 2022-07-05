import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Main } from './Main'


export const Menu = () => {
  return (
    <>
    <BrowserRouter>
      <div className='link'>
                  <p> <NavLink exact to='/home' className='er'>home</NavLink></p>
                  <p> <NavLink exact to='/about' className='er'>about </NavLink></p>
                    <p><NavLink to='/contact' className='er'>contact</NavLink> </p>
                    <p><NavLink exact to='/search' className='er'>search</NavLink> </p>
          
              </div>
      <Main />
          </BrowserRouter>

      </>
  )
}
