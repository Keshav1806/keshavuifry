import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import strip from '../assets/images/strip.png'
import threemobiles from '../assets/images/threemobiles.png'
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeleft">
            <div className="heading">
                <h1>Make The Best Financial Decisions</h1>
                <div className="blur"></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione deleniti possimus! Sed dolor perspiciatis voluptatem? Officiis, asperiores odit!</p>
            <div className="start">
                <button className='started'>Get Started<FontAwesomeIcon icon={faArrowRight} /></button>
                <button className='video'><FontAwesomeIcon icon={faCirclePlay} />Watch Video</button>
            </div>
            <img src={strip} alt="no img" />
        </div>
        <div className="homeright">
            <img src={threemobiles} alt="no img" />
            <div className="blur2"></div>
        </div>
      </div>
    </>
  )
}

export default Home
