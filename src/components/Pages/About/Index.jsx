import './index.scss'
import AnimatedLetters from '../../AnimatedLetters/Index.jsx'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  const[letterClass, setLetterClass] = useState('text-animate');

  //These are the arrays that AnimatedLetters puts on the page change these to change the words
  const about = ['A','b','o','u','t','','M','e'];
  //Paragraph One
  const line1 = ['','','','','I`m','','a','','massive','','fan','','of','','web','','&','','app'
  ,'','development','.','I','am','','willing','','to','','learn','','any']
  const line2 = ['technology','','if','','it','','means','','I','will','','be','','able','','to',''
  ,'make','','vibrant','','and','','interesting','','websites','!']
  const line3 = ['I','plan','','to','','learn','','more','','about','','robotics','','as','','well','.','The',''
  ,'next','','thing','','I','plan','','to','','learn','','is','','C#','','&',]
  const line4 = ['Python','.','If','','you','','would','','like','','to','','connect','','please',''
  ,'contact','','me','.','I','would','','love','','to','','connect','!']
//Paragraph Two
  const line5 = ['','','','','I','am','','confident','','that','','I','can','','tackle','','any'
  ,'','job','.','If','','you','','are','','looking','','to','','hire']
  const line6 = ['someone','','to','','develop','','a','','site','','for','','you','','or','','your',''
  ,'business','','please','','contact','','me','','asap','!']
  const line7 = ['I','would','','love','','to','','be','','part','','of','','a','','team','.','If',''
  ,'you','','need','','somone','','for','','web','','development','','I','am']
  const line8 = ['your','','guy','!','Dont','','forget','','you','','can','','also','','find','','me',''
  ,'on','','my','','discord','','feel','','free','','to','','join','','anytime','!']


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },2800)
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
          <p className='firstpara'>
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
          <p className='lastpara'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line4}
              idx={160}
            />
          </p>
          <br />
          <p className='firstpara'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line5}
              idx={200}
            />
          </p>
          <p>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line6}
              idx={240}
            />
          </p>
          <p>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line7}
              idx={280}
            />
          </p>
          <p className='lastparagraph'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={line8}
              idx={320}
            />
          </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faNodeJs} color='#44883e' />
          </div>
        </div>
      </div>
    </div>
  )
}
