import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

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

//   useEffect(() => {
//     getPortfolio()
//   }, [])

//   const getPortfolio = () => {
//     setPortfolio({
//       portfolio: [
//         {
//           image: '/src/assets/images/logo4.png',
//           name: 'src/assets/images/logo4.png',
//           title: 'TO DO',
//           description: 'React, JSX, Tailwind, Jest',
//           url: 'https://alsatarysamah.github.io/todo-app/',
//         },
//       ],
//     })
//     console.log(portfolio)
//   }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        <div className="image-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
            className="portfolio-image"
            alt="portfolio"
          />

          <div className="content">
            <p className="title">To Do</p>
            <h4 className="description">API app</h4>

            <button className="btn" onClick={() => window.open("https://alsatarysamah.github.io/todo-app/")}>
              View
            </button>
          </div>
        </div>
        <div className="image-box">
          <img
            src="./src/assets/images/logopreload.png"
            className="portfolio-image"
            alt="portfolio"
          />

          <div className="content">
            <p className="title">To Do</p>
            <h4 className="description">API app</h4>

            <button className="btn" onClick={() => window.open(portfolio.url)}>
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
