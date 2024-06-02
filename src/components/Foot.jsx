import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Foot = () => {
    return (
        <>
            <div className="foot">
                <div className="foottop">
                    <div className="footlinks">
                        <img src={logo} alt="no img" />
                        <p><FontAwesomeIcon style={{color:"red", marginRight:"0.5rem"}} icon={faEnvelope} />Help@Frybix.com</p>
                        <p><FontAwesomeIcon style={{color:"red", marginRight:"0.5rem"}} icon={faPhone} />+1234 456 789</p>
                    </div>
                    <div className="footlinks">
                        <h2>Links</h2>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Bookings</p>
                        <p>Blog</p>
                    </div>
                    <div className="footlinks">
                        <h2>Legal</h2>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className="footlinks">
                        <h2>Product</h2>
                        <p>Take Tour</p>
                        <p>Live Chat</p>
                        <p>Reviews</p>
                    </div>
                    <div className="footlinks">
                        <h2>Newsletter</h2>
                        <p>Stay Up To Date</p>
                        <div className="news">
                            <input type="text" placeholder='Your Email' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footbot">
                    <p>Copyright 2024 Uifry.com All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Foot
