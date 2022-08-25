import React from 'react'
import Logo from '../Thumbnails/Jetbrain-logo.png'
import '../styles.css/Header.css'
import '../styles.css/media-query.css'

const Header = () => {
  return (
    <header className='Header'>
        <div className='Header__logo-box'>
            <img className='Header__Logo' src={Logo} alt='Jetbrain-logo-image'></img>
        </div>
        <div className='Header-nav'>
            {/* Links */}
            <div className='Header-nav Header-nav--1'>
                <a href="www.jetbrains.com" className='Header-nav--link'>
                    Developer Tools
                </a>
            </div>
            <div className='Header-nav Header-nav--1'>
                <a href="www.youtube.com" className='Header-nav--link'>
                    Team Tools
                </a>
            </div>
            <div className='Header-nav Header-nav--1'>
                <a href="www.jetbrains.com" className='Header-nav--link'>
                    Learning Tools
                </a>
            </div>
            <div className='Header-nav Header-nav--1'>
                <a href="www.jetbrains.com" className='Header-nav--link'>
                    Solutions 
                </a>
            </div>
            <div className='Header-nav Header-nav--1'>
                <a href="www.jetbrains.com" className='Header-nav--link'>
                    Support
                </a>
            </div>
            <div className='Header-nav Header-nav--1'>
                <a href="www.jetbrains.com" className='Header-nav--link'>
                    Store
                </a>
            </div>

            {/* Icons  */}
            <div className='Header-nav Header--icon-1 Bi-search'>
                <span className='Header-icon__span'>
                    <a href="www.jetbrains.com" className='Header-icon-link'>
                    <i className="bi bi-search fa-icon--nav"></i>
                    </a>
                </span>
            </div>

            <div className='Header-nav Header--icon-1'>
                <span className='Header-icon__span'>
                    <a href="www.jetbrains.com" className='Header-icon-link'>
                    <i className="fa-solid fa-user fa-icon--nav"></i>
                    </a>
                </span>
                
            </div>

            <div className='Header-nav Header--icon-1'>
                <span className='Header-icon__span'>
                    <a href="www.jetbrains.com" className='Header-icon-link'>
                    <i className="fa-solid fa-cart-shopping fa-icon--nav"></i>
                    </a>
                </span>
            </div>

            <div className='Header-nav Header--icon-1'>
                <span className='Header-icon__span'>
                    <a href="www.jetbrains.com" className='Header-icon-link'>
                    <i className="bi bi-translate fa-icon--nav"></i>
                    </a>
                </span>
            </div>

            <div className='Header-nav Header--icon-1 NavBar'>
                <span className='Header-icon__span'>
                    <a href="www.jetbrains.com" className='Header-icon-link'>
                    <i className="fa-solid fa-bars"></i>
                    </a>
                </span>
            </div>
            
        </div>
    </header>
  )
}

export default Header