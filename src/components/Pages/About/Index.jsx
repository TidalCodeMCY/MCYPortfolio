import './index.scss'
import AnimatedLetters from '../../AnimatedLetters/Index.jsx'
import { useState,useEffect } from 'react';

export default function About() {
  const[letterClass, setLetterClass] = useState('text-animate');

  //These are the arrays that AnimatedLetters puts on the page change these to change the words
  const about = ['A','b','o','u','t','','M','e'];
  const line1 = ['','','','','I`m','','a','','massive','','fan','','of','','web','','&','','app'
  ,'','development','.','I','am','','willing','','to','','learn','','any']
  const line2 = ['technology','','if','','it','','means','','I','','will','','be','','able','','to',''
  ,'make','','vibrant','','and','','interesting','','websites','!']
  const line3 = ['I','plan','','to','','learn','','more','','about','','robotics','','as','','well','.','The',''
  ,'next','','thing','','I','plan','','to','','learn','','is','','C#','','&',]
  const line4 = ['Python','.','If','','you','','would','','like','','to','','connect','','please',''
  ,'contact','','me','.','I','','would','','love','','to','','connect','!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },2500)
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
  )
}
