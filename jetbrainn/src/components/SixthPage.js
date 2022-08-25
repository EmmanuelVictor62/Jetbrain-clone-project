import React from 'react'
import '../styles.css/SixthPage.css';
import Playicon from '../Thumbnails/Eyeicon.svg';
import Highlighticon from '../Thumbnails/highlights-icon.svg';
import Circleicon from '../Thumbnails/circle-icon.svg'

const SixthPage = () => {
  return (
    <div className='SixthPage'>
        <h2 className='SixthPage__title'>Discover more</h2>
        <div className='SixthPage__content-wrapper'>
            <div className='SixthPage-content-box'>
                <div className='SixthPage-content__image-box'>
                 <img src={Playicon} className="SixthPage-content__image"></img>
                </div>
                
                <h2 className='SixthPage-content-box__title'>
                Software development <br></br>the JetBrains way: dogfooding
                </h2>

                <p className='SixthPage-content-box__description'>
                Giving you the scoop on how your <br></br>favorite products are created
                </p>

                <div className='SixthPage-content-box__link-box'>
                    <a href="www.jetbrains.com" className='SixthPage-content-box__link'>
                        Watch Now
                    </a>
                </div>
            </div>

            <div className='SixthPage-content-box'>
                <div className='SixthPage-content__image-box'>
                 <img src={Highlighticon} className="SixthPage-content__image SixthPage-content__image--highlight-icon"></img>
                </div>
                
                <h2 className='SixthPage-content-box__title'>
                JetBrains Annual Highlights 2022
                </h2>

                <p className='SixthPage-content-box__description'>
                Find out why more than 12.8 million developers use and trust our tools
                </p>

                <div className='SixthPage-content-box__link-box'>
                    <a href="www.jetbrains.com" className='SixthPage-content-box__link'>
                     Read Now
                    </a>
                </div>
            </div>



            <div className='SixthPage-content-box'>
                <div className='SixthPage-content__image-box'>
                 <img src={Circleicon} className="SixthPage-content__image SixthPage-content__image--circle-icon"></img>
                </div>
                
                <h2 className='SixthPage-content-box__title'>
                The State of Developer Ecosystem 2021
                </h2>

                <p className='SixthPage-content-box__description'>
                Developer community trends in <br></br> JetBrains' fifth annual survey 
                results
                </p>

                <div className='SixthPage-content-box__link-box'>
                    <a href="www.jetbrains.com" className='SixthPage-content-box__link'>
                        Learn more
                    </a>
                </div>
            </div>


        </div>
    </div>
  )
}

export default SixthPage