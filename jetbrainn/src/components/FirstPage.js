import '../styles.css/FirstPage.css'
import '../styles.css/media-query.css'
import Firstlogo from '../Thumbnails/jetbrains-space-image.png'
import Riderlogo from '../Thumbnails/rider-flow-logo.png'
import Jetbrainslogo from '../Thumbnails/jetbrains.png'

const FirstPage = () => {
  return (
    <section className='FirstPage'>
        <div className='FirstPage__Container'>
          <div className='FirstPage__title-box'>
            <h1 className='FirstPage__heading'>
              Essential tools for software developers and teams
              </h1>
              <p className='FirstPage__subheading'>
              We build our software so you can enjoy building yours
              </p>
          </div>

          {/* Tool Box */}

          <div className='Tool-box'>
            <div className='Tool-box__wrapper'>
              <div className='Tool-box-inner'>
                <div className='Tool-box-inner__Heading'>
                  <i className="bi bi-ui-checks-grid"></i>
                  <h3 className='Tool-box-inner-Title'>Developer Tools</h3>
                </div>
                <p className='Tool-box-inner__Description'>
                  The complete
                  developer toolkit
                </p>
                <a href="www.jetbrains.com" className='Tool-box-inner__link'>Choose your tool</a>
              </div>
            </div>

            {/* Second box */}
            <div className='Tool-box__2'>
            <div className='Tool-box-inner'>
                <div className='Tool-box-inner__Heading'>
                 <i className="bi bi-people"></i>
                  <h3 className='Tool-box-inner-Title'>Team Tools</h3>
                </div>
                <p className='Tool-box-inner__Description Tool-box-inner__Description--2'>
                A wide range of tools and integrations for any team
                </p>
                <a href="www.jetbrains.com" className='Tool-box-inner__link'>See all tools</a>
              </div>
            </div>

            {/* Third box */}
            <div className='Tool-box__3'>
              <div className='Tool-box-inner'>
                  <div className='Tool-box-inner__Heading'>
                  <i className="bi bi-image-alt"></i>
                    <h3 className='Tool-box-inner-Title'>Learning Tools</h3>
                  </div>
                  <p className='Tool-box-inner__Description Tool-box-inner__Description--2'>
                  Solutions and opportunities for teachers and students
                  </p>
                  <a href="www.jetbrains.com" className='Tool-box-inner__link'>Find your solution</a>
                </div>
            </div>


            {/* Fourth box */}
            <div className='Tool-box__4'>
              <div className='Tool-box-inner'>
                  <div className='Tool-box-inner__Heading'>
                  <i className="bi bi-bookmark-fill"></i>
                      <h3 className='Tool-box-inner-Title'>Learning Tools</h3>
                    </div>
                    <p className='Tool-box-inner__Description Tool-box-inner__Description--2 last'>
                    A modern multiplatform programming language
                    </p>
                    <a href="www.jetbrains.com" className='Tool-box-inner__link'>Discover Kotlin</a>
                 </div>
              </div>
            </div>



            {/* Banner Tiles */}
            <div className='First-Page__Banner-Wrapper'>
              {/* First Banner */}
                <div className='Banner-1'>
                  <a href="www.jetbrains.com" className='Banner-1__Wrapper-link'>

                    <div className='Banner-1__inner-div'>

                      {/* Logo-Image */}
                      <div className='Banner-1__image-box'>
                        <img src={Firstlogo} className="Firstlogo"></img>
                      </div>

                      {/* Title */}
                      <div className='Banner-1__Title-box'>
                        <h1 className='Banner-1__Title'>
                          <div className='Banner-1__Title-inner-div'>
                            Space On-Premises <span className='Banner-1 Banner-1--BETA'>
                            BETA</span>
                          </div> is here!</h1>
                          
                      </div>

                      {/* Description */}
                      <div className='Banner-1__description-box'>
                        <h2 className='Banner-1__description'>
                          Have full control over your data in a secure 
                          environment
                        </h2>
                      </div>
                    </div>


                    {/* Button */}
                    <button className='Banner__button'>
                      Download for free
                    </button>
                  </a>
                </div>

                {/* Second Banner */}
                <div className='Banner__2-Wrapper'>
                  <div className='First-Tile'>

                    {/* Image */}
                    <div className='First-Tile__image-box'>
                        <img src={Riderlogo} className='First-Tile__image'></img>
                    </div>

                    {/* Title */}
                    <div className='First-Tile__Description-Wrapper'>
                        <h3 className='First-Tile__Title'>
                          RiderFlow for Unity
                        </h3>

                        <p className='First-Tile__subtitle'>
                          A free scenery tool for building and managing your 
                          3D space in Unity
                        </p>

                        <p className='First-Tile__description'>
                          For level designers,game designer, artists and coders
                        </p>
                      </div>
                    
                    <button className='First-Tile__button'>Learn more</button>
                  </div> 

                  {/* Second Tile */}
                  <div className='Banner__2-Second-Tile'>
                    <div className='Second-Tile__image-box'>
                        <img src={Jetbrainslogo} className='Second-Tile__image'></img>
                    </div>
                    <div className='Second-Tile__Description-Wrapper'>
                        <h3 className='Second-Tile__Title'>
                          JetBrains Academy for Organisations
                        </h3>

                        <p className='First-Tile__subtitle'>
                          Hands-on programming education in the hands of your
                          institution
                        </p>
                      </div>
                    
                    <button className='First-Tile__button'>Learn more</button>

                  </div>
                </div>
            </div>

        </div>
    </section> 
  )
}

export default FirstPage