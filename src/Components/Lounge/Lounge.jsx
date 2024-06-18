import React, { useEffect } from 'react'

// Import Icon
import { GiStaryu } from "react-icons/gi";

// Import Image
import loungeImage from "../../assets/loungeImage.png"

// Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  // Use useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className = "lounge container section">
      <div className = "sectionContainer grid">
        <div data-aos = 'fade-left' data-aos-duration = '2500' className = "img-div">
          <img src = {loungeImage}/>
        </div>

        <div className = "text-div">
          <h2 data-aos = 'fade-down' data-aos-duration = '2500'><span>Unaccompanied </span>  Minor Lounge</h2>
          <div className = "grids grid">
            <div data-aos = 'fade-down' data-aos-duration = '2500' className = "singleGrid">
              <span className = "gridTitle"><GiStaryu className = "icon"/>Help Through the Airport</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
            </div>

            <div data-aos = 'fade-down' data-aos-duration = '2500' className = "singleGrid">
              <span className = "gridTitle"><GiStaryu className = "icon"/>Priority Boarding</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
            </div>

            <div data-aos = 'fade-down' data-aos-duration = '2500' className = "singleGrid">
              <span className = "gridTitle"><GiStaryu className = "icon"/>Care on the Flight</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
            </div>

            <div data-aos = 'fade-down' data-aos-duration = '2500' className = "singleGrid">
              <span className = "gridTitle"><GiStaryu className = "icon"/>Chauffer-drive service</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge