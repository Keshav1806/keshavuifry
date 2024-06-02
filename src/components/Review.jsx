import React, {useState} from 'react'
import person1 from '../assets/images/person1.jpeg'
import person2 from '../assets/images/person2.jpeg'
import person3 from '../assets/images/person3.jpeg'
import person4 from '../assets/images/person4.jpeg'
import person5 from '../assets/images/person5.jpeg'
import people from '../assets/images/people.png'
const Review = () => {

    const texts=[
        {
            heading:"Transform Your Budgeting with Ease!",
            desc:"The finance app transformed my budgeting! Intuitive design, real-time updates, and powerful analytics. Tracking expenses and savings has never been easier. It’s incredibly user-friendly, making financial management a breeze. Highly recommend for anyone looking to take control of their finances effortlessly.",
            name1:"Alice Johnson"
        },
        {
            heading:"A Must-Have for Financial Planning!",
            desc:"Amazing finance app! Simplifies expense tracking and budgeting with a user-friendly interface. Real-time updates are a game-changer. Perfect for anyone serious about financial planning and staying on top of their financial goals. It’s reliable, efficient, and essential for managing personal finances.",
            name1:"Bob Smith"
        },
        {
            heading:"Effortless Budgeting and Expense Tracking!",
            desc:"This app makes budgeting effortless. Clear, intuitive interface with helpful features. Real-time expense tracking keeps me on top of my finances. Highly recommend to anyone wanting to manage their money more effectively and efficiently. It’s a powerful tool for achieving financial stability and growth.",
            name1:"Charlie Brown"
        },
        {
            heading:"Top-Notch Personal Finance Management!",
            desc:"Fantastic finance app! User-friendly design, great for tracking spending and saving. The insights and analytics are top-notch, providing valuable information to help me stay on track with my financial goals. It’s indispensable for personal finance management, offering unparalleled ease and precision.",
            name1:"David Williams"
        },
        {
            heading:"A Game-Changer for Managing Money!",
            desc:"Love this finance app! Easy to navigate, excellent for budgeting and tracking expenses. Real-time updates are incredibly helpful, ensuring I never miss a transaction. It’s truly a game-changer for managing my money effectively and efficiently, making financial oversight simple and stress-free.",
            name1:"Eve Thompson"
        }
    ];
    const [selectedButton, setSelectedButton] = useState(0);
    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
      };
    const imageSources = [person1, person2, person3, person4, person5];
    return (
        <>
            <div className="review">
                <div className="reviewtop">
                    <p>TESTIMONIAL</p>
                    <h1>What Our Users</h1>
                    <h1>Say About Us?</h1>
                </div>
                <div className="reviewbot">
                    <div className="reviewleft">
                        <img src={people} alt="no img" />
                        <div className="blur6"></div>
                    </div>
                    <div className="reviewright">
                        <div className="review1">
                            <h2>{texts[selectedButton].heading}</h2>
                            <p>{texts[selectedButton].desc}
                            </p>
                        </div>
                        <div className="people">
                            {[0,1,2,3,4].map((index) => (
                                <img key={index} src={imageSources[index]} alt="no img" onClick={()=> handleButtonClick(index)}
                                style={{
                                    transform: selectedButton === index ? 'scale(1.4)' : 'scale(1)',
                                    opacity:selectedButton === index ? '100%' : '50%'
                                  }}/>
                            ))}
                        </div>
                        <h4 className='name'>{texts[selectedButton].name1}</h4>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Review
