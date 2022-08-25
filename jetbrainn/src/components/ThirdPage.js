import React from 'react'
import '../styles.css/ThirdPage.css'
import '../styles.css/media-query.css'

const ThirdPage = () => {
  return (
    <div className='ThirdPage'>
        <div className='ThirdPage__Heading-box'>
            <h2 className='ThirdPage__Heading'>
            News &#38; events
            </h2>
        </div>
        <div className='ThirdPage-Content-box'>
            <div className='ThirdPage-Content-box__Wrapper-Box'>
                <p className='ThirdPage-Content-box__Date'>Aug 18, 2022</p>
                <h2 className='ThirdPage-Content-box__Title'>
                    CLion Roadmap for 2022.3
                </h2>
                <p className='ThirdPage-Content-box__Description'>
                    Now it’s time to share what the team 
                    will be focusing on over the coming months and is aiming to 
                    deliver in 2022.3.
                </p>
                <a href="www.jetbrains.com" className='ThirdPage-Content-box__link'>
                    Learn more
                </a>
            </div>

            <div className='ThirdPage-Content-box__Wrapper-Box'>
                <p className='ThirdPage-Content-box__Date'>Aug 17, 2022</p>
                <h2 className='ThirdPage-Content-box__Title'>
                    Frontend Tracks on JetBrains Academy: Learn HTML, CSS, and JavaScript
                </h2>
                <p className='ThirdPage-Content-box__Description'>
                Dive into the intricacies of 
                frontend development by building web applications step by step!
                </p>
                <a href="www.jetbrains.com" className='ThirdPage-Content-box__link'>
                    Learn more
                </a>
            </div>

            <div className='ThirdPage-Content-box__Wrapper-Box'>
                <p className='ThirdPage-Content-box__Date'>Aug 9, 2022</p>
                <h2 className='ThirdPage-Content-box__Title'>
                 Do You Speak Math? So Does YouTrack!
                </h2>
                <p className='ThirdPage-Content-box__Description'>
                    Welcome back to school, tech students and faculty members!
                    Did you know that YouTrack lets you work with math formulas with ease? 
                    Learn more about YouTrack’s LaTeX support and free...
                </p>
                <a href="www.jetbrains.com" className='ThirdPage-Content-box__link'>
                    Learn more
                </a>
            </div>
        </div>
    </div>
  )
}

export default ThirdPage