import React, { useState, useEffect } from 'react'

// Import Icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { MdOutlineFlightTakeoff, MdOutlineFlightLand } from 'react-icons/md'

// Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
  const [selected, setSelected] = useState('Economy');

  // Use useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className = "search container section">
      <div data-aos = 'fade-up' data-aos-duration = '2500' className = "sectionContainer grid">
        <div className = "btn-s flex">
          <div className = {`singleBtn ${selected === 'Economy' ? 'selected' : ''}`} onClick = {() => setSelected('Economy')}>
            <span>Economy</span>
          </div>

          <div className = {`singleBtn ${selected === 'Business' ? 'selected' : ''}`} onClick = {() => setSelected('Business')}>
            <span>Business</span>
          </div>

          <div className = {`singleBtn ${selected === 'First Class' ? 'selected' : ''}`} onClick = {() => setSelected('First Class')}>
            <span>First Class</span>
          </div>
        </div>

        <div data-aos = 'fade-up' data-aos-duration = '2000' className = "searchInputs flex">
          {/* Single Input */}
          <div className = "singleInput flex">
            <div className = "icon-div">
              <HiOutlineLocationMarker className = "icon"/>
            </div>
            <div className = "texts">
              <h4>Location</h4>
              <input type = "text" placeholder = "Where to go?"/>
            </div>
          </div>

          <div className = "singleInput flex">
            <div className = "icon-div">
              <RiAccountPinCircleLine className = "icon"/>
            </div>
            <div className = "texts">
              <h4>Travelers</h4>
              <input type = "text" placeholder = "Add Guests..."/>
            </div>
          </div>

          <div className = "singleInput flex">
            <div className = "icon-div">
              <MdOutlineFlightLand className = "icon"/>
            </div>
            <div className = "texts">
              <h4>Check In</h4>
              <input type = "date" placeholder = "Add Date"/>
            </div>
          </div>

          <div className = "singleInput flex">
            <div className = "icon-div">
              <MdOutlineFlightTakeoff className = "icon"/>
            </div>
            <div className = "texts">
              <h4>Check Out</h4>
              <input type = "date" placeholder = "Add Date"/>
            </div>
          </div>

          <button className = "btn btnBlock flex">Search Flight</button>
        </div>
      </div>
    </div>
  )
}

export default Search