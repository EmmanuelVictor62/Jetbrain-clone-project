import React from 'react';
import './styles.css/App.css'
import Header from './components/Header';
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import SixthPage from './components/SixthPage';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='body'>
      <Header />      
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <Footer />
    </div>
  )
}

export default App
