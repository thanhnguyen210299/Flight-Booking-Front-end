import React, { useEffect } from 'react'

// Import Icon
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaPinterestSquare } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io"

// Import Image
import logo from "../../assets/flight-high-resolution-logo-transparent.png"

// Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // Use useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className = "footer">
      <div className = "sectionContainer container grid">
        <div data-aos = 'fade-up' data-aos-duration = '2500' className = "grid-one">
          <div className = "logo-div">
            <img src = {logo} className = "logo"/>
          </div>
          <p>Your mind should be stronger than your feelings, FLY!</p>
          <div className = "socialIcon flex">
            <FaFacebookSquare className = "icon"/>
            <FaTwitterSquare className = "icon"/>
            <FaYoutube className = "icon"/>
            <FaPinterestSquare className = "icon"/>
          </div>
        </div>

        <div data-aos = 'fade-up' data-aos-duration = '2500' className = "footerLinks">
          <span className = "linkTitle">Information</span>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Home</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Explpore</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Flight Status</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Travel</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Check-In</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Manage Your Booking</a>
          </li>
        </div>

        <div data-aos = 'fade-up' data-aos-duration = '2500' className = "footerLinks">
          <span className = "linkTitle">Quick Guide</span>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>FAQ</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>How to</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Baggage</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Features</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Route Map</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Our Communities</a>
          </li>
        </div>

        <div data-aos = 'fade-up' data-aos-duration = '2500' className = "footerLinks">
          <span className = "linkTitle">Information</span>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Chauffuer</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Our Partners</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Destination</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Careers</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Transportation</a>
          </li>
          <li>
            <a href = ""><IoIosArrowForward className = "icon"/>Programme Rules</a>
          </li>
        </div>
      </div>

      <div className = "copyRight-div flex">
        <p>Created by <span>Thanh Nguyen</span></p>
      </div>
    </div>
  )
}

export default Footer