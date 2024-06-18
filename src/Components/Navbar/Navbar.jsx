import React, {useState} from 'react'

// Import Icons
import { MdOutlineSupportAgent } from 'react-icons/md'
import { LiaLanguageSolid } from 'react-icons/lia'
import { SiConsul } from 'react-icons/si'
import { CgMenuGridR } from 'react-icons/cg'

// Import Images
import logo from '../../assets/flight-high-resolution-logo-transparent.png'

const Navbar = () => {
    // Add & Remove Navbar in the Small Width Screens
    const [active, setActive] = useState('navbar-menu')
    const showNavbar = () => {
        setActive('navbar-menu showNavbar')
    }
    
    const removeNavbar = () => {
        setActive('navbar-menu')
    }

    // Add Background Color to the Second Navbar 
    const [noBg, addBg] = useState('navbar-two')
    const addBgColor = () => {
        if (window.scrollY >= 10){
            addBg('navbar-two navbar-withBg')
        } else {
            addBg('navbar-two')
        }
    }
    window.addEventListener('scroll', addBgColor)

  return (
    <div className = "navbar flex">
        <div className = "navbar-one flex">
            <div>
                <SiConsul className = "icon"/>
            </div>

            <div className = "none flex">
                <li className = "flex"><MdOutlineSupportAgent className = "icon"/>Support</li>
                <li className = "flex"><LiaLanguageSolid className = "icon"/>Languages</li>
            </div>

            <div className = "atb flex">
                <span>Sign In</span>
                <span>Sign Out</span>
            </div>
        </div>

        <div className = {noBg}>
            <div className = "logo-div">
                <img src = {logo} className = "logo"/>
            </div>

            <div className ={active}>
                <ul className = "menu flex">
                    <li onClick = {removeNavbar} className = "listItems defaultItem">Home</li>
                    <li onClick = {removeNavbar} className = "listItems">About</li>
                    <li onClick = {removeNavbar} className = "listItems">Offers</li>
                    <li onClick = {removeNavbar} className = "listItems">Seats</li>
                    <li onClick = {removeNavbar} className = "listItems">Destinations</li>
                </ul>

                <button onClick = {removeNavbar} className = "btn flex btn-one">
                    Contact
                </button>
            </div>

            <button className = "btn flex btn-two">
                Contact
            </button>

            <div onClick = {showNavbar} className = "toggleIcon">
                <CgMenuGridR className = "icon"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar