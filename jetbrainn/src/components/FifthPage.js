import React from 'react'
import '../styles.css/FifthPage.css'
import '../styles.css/media-query.css'
import Googleimage from '../Thumbnails/google-img.png'
import Nasalogo from '../Thumbnails/NASA_logo.svg.png'
import Valvelogo from '../Thumbnails/Valve_logo.png'
import Teslalogo from '../Thumbnails/tesla.jpeg'
import Ubisoftlogo from '../Thumbnails/Ubisoft_logo.webp'
import Twitterlogo from '../Thumbnails/Twitter-logo.svg.png'

const FifthPage = () => {
  return (
    <div className='FifthPage'>
      <p className='FifthPage__title'>
      Our tools are used all over the world in some of the best-known companies.
      </p>

      <div className='FifthPage-Company-image-wrapper'>
        <div className='Fifth-Company-image-wrapper__image-google-box'>
          <img className='Fifth-Company-image-wrapper__image' src={Googleimage}></img>
        </div>

        <div className='Fifth-Company-image-wrapper__image-nasa-box'>
          <img className='Fifth-Company-image-wrapper__image' src={Nasalogo}></img>
        </div>

        <div className='Fifth-Company-image-wrapper__image-valve-box'>
          <img className='Fifth-Company-image-wrapper__image' src={Valvelogo}></img>
        </div>

        <div className='Fifth-Company-image-wrapper__image-valve-box'>
          <img className='Fifth-Company-image-wrapper__image' src={Teslalogo}></img>
        </div>

        <div className='Fifth-Company-image-wrapper__image-ubisoft-box'>
          <img className='Fifth-Company-image-wrapper__image' src={Ubisoftlogo}></img>
        </div>

        <div className='Fifth-Company-image-wrapper__image-twitter-box'>
          <img className='Fifth-Company-image-wrapper__image' src={Twitterlogo}></img>
        </div>

      </div>


      <div className='Customer-section'>
        <h2 className='Customer-section-title'>Customer Stories</h2>
        <p className='Customer-section-subtitle'>
        See how the world's leading companies use JetBrains products
        </p>

        <div className='Customer-wrapper-box'>
          <div className='Customer'>
            <h3 className='Customer__name'>OpenStack</h3>
            <p className='Customer__description'>
            PyCharm has tons of advantages when compared to text editors in terms of 
            supported functionality. With respect to Python development, PyCharm definitely stands out with features like remote debugging, code quality checks,
             and integrations with third-party software like Docker and Kubernetes.
            </p>
            <p className='Customer__subdescription'>
            Swapnil Kulkarni, Active Technology Contributor, OpenStack
            </p>
            <div className='Customer__read-link-box'>
              <a className='Customer__read-link' href="https://www.jetbrains.com/company/customers/experience/instil/">
                Read case study
              </a>
            </div> 
          </div>


          <div className='Customer'>
            <h3 className='Customer__name'>Instill</h3>
            <p className='Customer__description Customer__description--2'>
            When the social distancing restrictions were introduced in March 2020,
            we needed a tool that would let us collaborate online with students as 
            part of virtual deliveries, and Space was the obvious choice.
            </p>
            <p className='Customer__subdescription'>
            Garth Gilmour, Instil
            </p>
            <div className='Customer__read-link-box Customer__read-link-box--2'>
              <a className='Customer__read-link' href="https://www.jetbrains.com/company/customers/experience/instil/">
                Read case study
              </a>
            </div> 
          </div>


          <div className='Customer'>
            <h3 className='Customer__name'>VMware</h3>
            <p className='Customer__description'>
            As our team carefully weighed the benefits and shortcomings of 
            building our strategy upon each of the frameworks, 
            Kotlin Multiplatform Mobile ultimately emerged as the framework of 
            choice.
            </p>
            <p className='Customer__subdescription'>
            Kris Wong, Software Engineer/Architect, VMware
            </p>
            <div className='Customer__read-link-box Customer__read-link-box--3'>
              <a className='Customer__read-link' href="https://www.jetbrains.com/company/customers/experience/instil/">
                Read case study
              </a>
            </div> 
          </div>

        </div>

        {/* Footer Section */}
        <div className='Customer-section__footer'>
            <a className='Customer-section__footer-button' href="www.jwtbrains.com">
              More case studies
            </a>
          </div>
      </div>
   
    </div>
  )
}

export default FifthPage