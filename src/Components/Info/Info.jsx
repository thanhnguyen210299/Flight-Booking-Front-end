import React, { useEffect } from 'react'

// Import Icon
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'
import { BsBookmarkCheck } from 'react-icons/bs'

// Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
  // Use useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className = "info section">
      <div className = "infoContainer container">
        <div className = "title-div flex">
          <h2 data-aos = 'fade-right' data-aos-duration = '2500'>Travel to Make <span>Memories</span> All Around the World</h2>
          <button data-aos = 'fade-left' data-aos-duration = '2500' className = "btn">
            View All
          </button>
        </div>

        <div className = "cards-div grid">
          <div data-aos = 'zoom-out' data-aos-duration = '2500' className = "singleCard grid">
            <div className = "icon-div flex">
              <FaRegCalendarAlt className = "icon"/>
            </div>
            <span className = "cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket.</p>
          </div>
       

          <div data-aos = 'zoom-out' data-aos-duration = '3500' className = "singleCard grid">
            <div className = "icon-div flex color-one">
              <GoChecklist className = "icon"/>
            </div>
            <span className = "cardTitle">Smart Checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket.</p>
          </div>

          <div data-aos = 'zoom-out' data-aos-duration = '4500' className = "singleCard grid">
            <div className = "icon-div flex color-two">
              <BsBookmarkCheck className = "icon"/>
            </div>
            <span className = "cardTitle">Save More</span>
            <p>You can also call airlines from your phone and book a flight ticket.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info