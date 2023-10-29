import './index.scss'
import AnimatedLetters from '../../AnimatedLetters/Index.jsx'
import { useState,useEffect } from 'react';

export default function About() {
  const[letterClass, setLetterClass] = useState('text-animate');

  //These are the arrays that AnimatedLetters puts on the page change these to change the words
  const about = ['A','b','o','u','t','','M','e'];
  const line1 = ['I`m','','a','','massive','','fan','','of','','web','','&','','app'
  ,'','development','.','I','am','','willing','','to','','learn','','any','','technology']
  const line2 = ['if','','it','','means','','I','','will','','be','','able','','to',''
  ,'make','','vibrant','','and','','interesting','','websites','!','I','plan','','to']
  const line3 = ['learn','','more','','about','','robotics','','as','','well','.','The',''
  ,'next','','thing','','I','plan','','to','','learn','','is','','C#','','&','','Python','.',]
  const line4 = ['If','','you','','would','','like','','to','','connect','','please',''
  ,'contact','','me','.','I','','would','','love','','to','','connect','!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },500)
  },[])

  return (
    <div className='conatiner about-page'>
      <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={about}
            idx={15}
            />
          </h1>
          <p>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line1}
              idx={40}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line2}
              idx={70}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line3}
              idx={100}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line4}
              idx={133}
            />
          </p>
      </div>
    </div>
  )
}
