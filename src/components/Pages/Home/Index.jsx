import './index.scss'
import LogoTitle from '../../../assets/images/mcy-logo-m.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../AnimatedLetters/Index.jsx'
import { useEffect, useState } from 'react'
import Logo from './Logo/Index.jsx'
import LogoY from '../../../assets/images/mcy-logo-y.png'

export default function Home() {
  const[letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a','s','o','n',' '];
  const lastArray = ['a','t','e','s']
  const jobArray = ['a',' ','W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },5000)
  },[])

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _9`}>e</span>
              <span className={`${letterClass} _10`}>l</span>
              <span className={`${letterClass} _11`}>l</span>
              <span className={`${letterClass} _12`}>o</span>
            <br /> 
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <img src={LogoY} alt="Developer" className='imgsrc'/>
            <AnimatedLetters letterClass={letterClass}
            strArray={lastArray}
            idx={20} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={25} />
            </h1>
            <h2>Frontend Developer / React.Js / Node.Js/ Javascript Programmer / Youtuber</h2>
            <Link to='./contact' className='flat-button'>Contact Me</Link>
        </div>
        <Logo />
    </div>
  )
}