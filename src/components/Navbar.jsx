import {React, useRef} from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const menuref = useRef();
    const menuhandler = () => {
        menuref.current.classList.toggle("active");
    }
    return (
        <>
            <div className="nav">
                <div className="navlinks">
                    <img src={logo} alt="no img" />
                    <ul className='links' ref={menuref}>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>AboutUs</li></a>
                        <a href="#"><li>Riviews</li></a>
                        <a href="#"><li>FAQ</li></a>
                    </ul>
                </div>
                <div className="icons">
                    <button>Download</button>
                    <FontAwesomeIcon className='downicon' icon={faDownload} />
                    <FontAwesomeIcon className='downicon' icon={faBars} onClick={menuhandler}/>
                </div>
            </div>
        </>
    )
}

export default Navbar
