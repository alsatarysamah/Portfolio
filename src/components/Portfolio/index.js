import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        <div className="image-box">
          <img
            src="https://assets-global.website-files.com/619cef5c40cb8925cd33ece3/621e3d842f5305af9170e4eb_619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png"
            className="portfolio-image"
            alt="portfolio"
          />

          <div className="content">
            <p className="title">To Do</p>
            <h4 className="description">
              A Web Application for securely managing a To Do List
            </h4>

            <button
              className="btn"
              onClick={() =>
                window.open('https://alsatarysamah.github.io/todo-app/')
              }
            >
              View
            </button>
          </div>
        </div>
        <div className="image-box">
          <img
            src="https://github.com/WISTA02/talabat-clone/blob/main/assest/mr.del1111.png?raw=true"    className="portfolio-image"
            alt="portfolio"
          />

          <div className="content">
            <p className="title">Mr.Delivery</p>
            <h4 className="description">
              A Web Application for food delivery
            </h4>

            <button
              className="btn"
              onClick={() =>
                window.open('https://github.com/WISTA02/talabat-clone')
              }
            >
              View
            </button>
          </div>
        </div>
        <div className="image-box">
          <img
            src="https://www.testgrid.io/blog/wp-content/uploads/2021/06/19_Api_testing.jpg"
            className="portfolio-image"
            alt="portfolio"
          />

          <div className="content">
            <p className="title">Resty</p>
            <h4 className="description">API testing</h4>
            <button
              className="btn"
              onClick={() =>
                window.open('https://alsatarysamah.github.io/resty/')
              }
            >
              View
            </button>
            
          </div>
          
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
