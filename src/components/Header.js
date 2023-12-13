import React from 'react'
import logo from '../assets/logo.png'
import Home from '../pages/Home'
import ApartmentNew from '../pages/ApartmentNew'
import ApartmentShow from '../pages/ApartmentShow'
import ApartmentIndex from '../pages/ApartmentIndex'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return(
    <>
        <main className='Header'>
                <img className='logo'src={logo} />
                <NavLink to="/">Apartment App</NavLink>
                <NavLink to="/apartmentindex">View Apartments</NavLink>
                <NavLink to="/apartmentnew">Create New Apartment</NavLink>
        </main>
    </>
  )
}
export default Header