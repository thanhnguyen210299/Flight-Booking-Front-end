import React, { useEffect } from 'react'

// Import Image
import paris from "../../assets/paris.jpg"
import vietnam from "../../assets/vietnam.jpg"
import dubai from "../../assets/dubai.jpg"
import japan from "../../assets/japan.jpg"
import newyork from "../../assets/newyork.jpg"

import lynn from "../../assets/lynn.jpg"
import emma from "../../assets/emma.jpg"
import steven from "../../assets/steven.jpg"
import justin from "../../assets/justin.jpg"
import rebecca from "../../assets/rebecca.jpg"

// Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

// Use Map to display Infomarion
const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: lynn,
    travelerName: 'Lynn',
    socialLink: 'lynnNg01'
  },
  {
    id: 2,
    destinationImage: japan,
    travelerImage: steven,
    travelerName: 'Steven',
    socialLink: '@stv_pt03',
  },
  {
    id: 3,
    destinationImage: vietnam,
    travelerImage: rebecca,
    travelerName: 'Rebecca',
    socialLink: '@reyolo',
  },
  {
    id: 4,
    destinationImage: newyork,
    travelerImage: justin,
    travelerName: 'Justin',
    socialLink: '@justinB',
  },
  {
    id: 5,
    destinationImage: dubai,
    travelerImage: emma,
    travelerName: 'Emma',
    socialLink: '@emma_grobler',
  }
]

const Travelers = () => {
  // Use useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className = "travelers-bg">
      <div className = "travelers container section">
        <div className = "sectionContainer">
          <h2 data-aos = 'fade-down' data-aos-duration = '2500'>Top Travelers of This Month</h2>
          <div className = "travelersContainer grid">
            {
              travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
                return(
                  <div data-aos = 'flip-down' data-aos-duration = '2500' key = {id} className = "singleTraveler">
                    <img src = {destinationImage} className = "destinationImage"/>
                    <div className = "travelerDetails">
                      <div className = "travelerPicture">
                        <img src = {travelerImage} className = "travelerImage"/>
                      </div>
                      <div className = "travelerName">
                        <span>{travelerName}</span>
                        <p>{socialLink}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travelers