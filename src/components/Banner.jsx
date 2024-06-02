import React from 'react'
import banner from '../assets/images/banner.png'
const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="no img" />
        <div className="blur7"></div>
      </div>
    </>
  )
}

export default Banner
