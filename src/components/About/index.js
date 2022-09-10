import { useEffect, useState } from 'react'
import {
  faAngular,
  faBootstrap,
  faCss3,
  faGit,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import 'animate.css'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a person with a positive attitude, strong work ethic, and a keen
            desire for learning and development..
          </p>
          <p align="LEFT">Education:</p>
          <p align="LEFT">
            <td class="animate__flipOutX">2022</td> ASAC/LUMINUS, NodeJS/React
            internship, Jordan.
          </p>
          <p align="LEFT">
            <td class="animate__flipOutX">2005-2010 </td> Jordan University Of
            Science And Technology, Bachelor in Computer Engineering, Jordan.
            GPA:Very Good
          </p>
          <p align="LEFT">
            <td class="animate__flipOutX">2005</td> High School degree(Twjihi),
            Jordan. GPA:90%
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGit} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
