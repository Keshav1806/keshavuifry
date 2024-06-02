import React from 'react'
import premium from '../assets/images/premium.png'
import custom from '../assets/images/custom.png'
import choose from '../assets/images/choose.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faCubes, faStar, faBell} from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <>
      <div className="about" id='about1'>
        <div className="aboutleft">
            <img src={premium} alt="no img" />
            <div className="blur3"></div>
        </div>
        <div className="aboutright">
            <div className="blur4"></div>
            <p className='supertxt'>FEATURES</p>
            <h1>Uifry Premium</h1>
            <div className="feature">
                <h3><FontAwesomeIcon icon={faStar} style={{ color: 'red' }} />Budgetting Intervals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita soluta aliquam temporibus molestiae aperiam, eaque ex!</p>
            </div>
            <div className="feature">
                <h3><FontAwesomeIcon icon={faCube} style={{ color: 'red' }} />Budgetting Intervals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita soluta aliquam temporibus molestiae aperiam, eaque ex!</p>
            </div>
            <div className="feature">
                <h3><FontAwesomeIcon icon={faCubes} style={{ color: 'red' }} />Budgetting Intervals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita soluta aliquam temporibus molestiae aperiam, eaque ex!</p>
            </div>
        </div>
      </div>
      <div className="about opp">
        <div className="aboutright">
        <div className="blur5"></div>
            <p className='supertxt'>ADVANTAGES</p>
            <h1>Why Choose Uifry?</h1>
            <div className="feature">
            <h3 style={{fontSize:'1.5rem'}}><FontAwesomeIcon icon={faBell}  style={{ color: 'red', fontSize:'1.5rem' }} />Clever Notifications</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur perspiciatis veritatis inventore, reprehenderit aperiam aut quis deleniti at asperiores beatae qui excepturi! Deleniti sapiente vel ipsum, ipsam quis quibusdam odit error omnis sint, nihil non.</p>
            </div>
        </div>
        <div className="aboutleft" style={{textAlign:"center"}}>
            <img src={choose} alt="no img"  />
            <div className="blur3"></div>
        </div>
      </div>
      <div className="about">
        <div className="aboutleft">
            <img src={custom} alt="no img" />
            <div className="blur3"></div>
        </div>
        <div className="aboutright">
        <div className="blur4"></div>
            <div className="feature">
                <h3 style={{fontSize:'1.5rem'}}><FontAwesomeIcon icon={faStar} style={{ color: 'red', fontSize:'1.5rem' }} />Fully Customizable</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione mollitia, enim magni est voluptatem porro provident neque animi, nihil consequuntur ipsum nisi ipsam quas ipsa ex dolorem fuga earum sed. Possimus eum maiores, ad enim odit perspiciatis officia modi dicta omnis dolorum laboriosam aliquid porro vitae a laborum nostrum tenetur architecto ratione consequuntur deleniti dolorem similique. Quae, eveniet eum.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
