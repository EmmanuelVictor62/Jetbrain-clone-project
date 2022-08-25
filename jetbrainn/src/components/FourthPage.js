import React from 'react'
import '../styles.css/FourthPage.css'

const FourthPage = () => {
  return (
    <div className='FourthPage'>
        <h2 className='FourthPage__Title'>
            Trusted
        </h2>
        <div className='Fourth-Page-Layer'>
            <div className='Fourth-Page-Layer__Description-Box'>
                <p className='Fourth-Page-Layer__Description'>
                    Many of the world's most dynamic companies and 
                    individuals find JetBrains tools make them more creative and effective.
                </p>
            </div>
            <div className='Fourth-Page-Layer__Count-Box'>
                <div className='Fourth-Page-Layer__FirstCount'>
                    <p className='Fourth-Page-Layer__Count'>12.8M</p>
                    <p className='Fourth-Page-Layer__Count-description'>users trust our tools</p>
                </div>
                <div className='Fourth-Page-Layer__SecondCount'>
                    <p className='Fourth-Page-Layer__Count'>164K</p>
                    <p className='Fourth-Page-Layer__Count-description'>join every month</p>
                </div>
            </div>
        </div>


        {/* Testimonial Carousel */}

        <div className='Testimonial'>
            <div className='Testimonial-wrapper'>
                <div className='Testimonial-wrapper__image-box'>
                    <img className='Testimonnial__image' src="https://www.jetbrains.com/img/home-page/testimonials/Mary-Grygleski@2x.png"></img>
                </div>

                <div className='Testimonial-wrapper__row-2'>
                    <div className='Testimonial-wrapper__description-box'>
                        <p className='Testimonial-wrapper__testimony'>
                            IntelliJ IDEA is undoubtedly the top-choice IDE for software
                            developers.
                        </p>
                        <div className='Testimonial-description-wrapper'>
                            <p className='Testimonial-wrapper__person'>Mary Grygleski</p>
                            <p className='Testimonial-wrapper__company'>IBM</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>

            <div className='Testimonial-footer'>
                <a className='Testimonial-footer__button' href="https://www.jetbrains.com/company/customers/testimonials.html">
                    More testimonials
                </a>

                <div className='Testimonial-footer__icon'>
                    <i className="fa-solid fa-left-long"></i>
                    <p className='Testimonial-footer__slider-number'>1/3</p>
                    <i className="fa-solid fa-right-long" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthPage