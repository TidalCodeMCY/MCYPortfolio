import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters/Index.jsx'
import { useState,useEffect } from 'react';

export default function Contact() {
  const[letterClass, setLetterClass] = useState('text-animate');

  const contact = ['C','o','n','t','a','c','t','','M','e',];
  const line1 = ['I','am','','interested','','in','','freelance,','','start-up,','','or','','any','','other','','work','','involving','','web,','','application,']
  const line2 = ['or','','robotics','development','.','I','would','','love','','to','','be','','part','','of','','some','','larger','','projects','','if','','needed','.']
  const line3 = ['If','','you','','may','','have','','more','','requests','','or','','questions','','please','','do','','not','','hesitate','','to','','let']
  const line4 = ['me','','know','','using','','the','','form','','below','.','Have','','a','','wonderful','','day','!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover done')
    },2800)
  },[])

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={contact}
                idx={15}
              />
          </h1>
          <p>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={line1}
                idx={40}
              />
          </p>
          <p>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={line2}
                idx={80}
              />
          </p>
          <p>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={line3}
                idx={120}
              />
          </p>
          <p>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={line4}
                idx={160}
              />
          </p>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
