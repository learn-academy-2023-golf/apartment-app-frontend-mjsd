import React from 'react'
import logo from '../assets/logo.png'
import Home from '../pages/Home'
import ApartmentNew from '../pages/ApartmentNew'
import ApartmentShow from '../pages/ApartmentShow'
import ApartmentIndex from '../pages/ApartmentIndex'
import { NavLink, useNavigate } from 'react-router-dom'
import { NavItem } from 'reactstrap'

const Header = ({currentUser, signout}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    signout()
    navigate("/")
  }

  return(
    <>
      <main className='Header'>
        <img className='logo'src={logo} />
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/apartmentindex">View Apartments</NavLink></NavItem>
        {!currentUser && (
        <> 
          <NavItem><NavLink to="/signin">Sign In</NavLink></NavItem>,
          <NavItem><NavLink to="/signup">Sign Up</NavLink></NavItem>
        </> 
        )}
        {currentUser && (
        <>  
          <NavItem><NavLink to="/apartmentnew">Create New Apartment</NavLink></NavItem>,
          <NavItem><NavLink onClick={handleClick}>Sign Out</NavLink></NavItem>
        </>
        )}
      </main>
    </>
  )
}
export default Header