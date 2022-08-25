import React from 'react'
import '../styles.css/SecondPage.css'

const SecondPage = () => {
  return (
    <div className='SecondPage'>
        <div className='SecondPage__description'>
            <h2 className='SecondPage__description-heading'>
                However big or small your team is, our products will
                ensure that it always has a smooth and enjoyable experience when
                    <span className='SecondPage-link-div'>
                        <a href="www.jetbrains.com" className='SecondPage-link-div SecondPage-link-div--link'> 
                            building and shipping your code
                        </a>,
                        <a href="www.jetbrains.com" className='SecondPage-link-div SecondPage-link-div--link'>
                         planning your work
                        </a>, and 
                        <a href="www.jetbrains.com" className='SecondPage-link-div SecondPage-link-div--link'>
                        collaborating.</a>
                    </span>
            </h2>

            <p className='SecondPage__description-subheading'>
                Whatever platform or language you work with,
                JetBrains has a development tool for you.
            </p>
        </div>

        <div className='SecondPage-list-item'>
            <ul className='SecondPage-list-item__wrapper'>
                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>JavaScript</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>.NET</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>Java &#38; JVM</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>C++</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>macOS and iOS</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>Python &#38; Django</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>PHP</a>
                </li>

                
            </ul>

            <ul className='SecondPage-list-item__wrapper'>
                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>Ruby &#38; Rails</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>Go</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>Kotlin</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link'>SQL</a>
                </li>

                <li className='SecondPage-list-item__list'>
                    <a href="www.jetbrains.com" className='SecondPage-list-item__link SecondPage-list-item--blue'>See all tools</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SecondPage