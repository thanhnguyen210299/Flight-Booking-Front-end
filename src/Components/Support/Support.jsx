import React, { useEffect }  from 'react'

// Import Image
import supportImage from "../../assets/support_image.png"

// Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css' 

const Support = () => {
  // Use useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className = "support-bg">
      <div className = "support container section">
        <div className = "sectionContainer">
          <div className = "title-div">
            <small>Travel Support</small>
            <h2>Plan Your Travel with <span>Confidence</span></h2>
            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
          </div>

          <div className = "info-div grid">
            <div className = "text-div grid">
              <div data-aos = 'fade-down' data-aos-duration = '2500' className = "singleInfo">
                <span className = "number">01</span>
                <h4>Travel Requirements for Dubai</h4>
                <p>
                  Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!
                </p>
              </div>

              <div data-aos = 'fade-down' data-aos-duration = '3500' className = "singleInfo">
                <span className = "number color-one">02</span>
                <h4>Chauffeur Services at Your Arrival</h4>
                <p>
                  Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!
                </p>
              </div>

              <div data-aos = 'fade-down' data-aos-duration = '4500' className = "singleInfo">
                <span className = "number color-two">03</span>
                <h4>Multi-risk Travel Insurance</h4>
                <p>
                  Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!
                </p>
              </div>
            </div>

            <div data-aos = 'fade-left' data-aos-duration = '2500' className = "img-div">
              <img src = {supportImage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support