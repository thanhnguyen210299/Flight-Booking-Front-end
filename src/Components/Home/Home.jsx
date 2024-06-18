import React, { useEffect } from 'react'

// Import Image & Video
import video from '../../assets/flight-video.mp4'
import takeOffPlane from '../../assets/take-off-02.png'

// Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // Use useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className = "home-bg">
      <div className = "home flex container">
        <div className = "glassmorphism">
          <div className = "mainText">
            <h1 data-aos = 'fade-up' data-aos-duration = '2500'>Create Ever-lasting Memories with Us</h1>
          </div>
        </div>

        <div data-aos = 'fade-down' data-aos-duration = '2500' className = "homeImages flex">
          <div className = "video-div">
            <video src = {video} autoPlay muted loop className = "video"></video>
          </div>

          <img src = {takeOffPlane} className = "plane"/>
        </div>
      </div>
    </div>
  )
}

export default Home