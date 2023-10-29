import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters/Index.jsx'
import { useState,useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Contact() {
  const[letterClass, setLetterClass] = useState('text-animate');

  const refForm = useRef();

  const contact = ['C','o','n','t','a','c','t','','M','e',];
  const line1 = ['I','am','','interested','','in','','freelance,','','start-up,','','or','','any','','other','','work','','involving','','web,','','application,']
  const line2 = ['or','','robotics','','development','.','I','would','','love','','to','','be','','part','','of','','some','','larger','','projects','','if','','needed','.']
  const line3 = ['If','','you','','may','','have','','more','','requests','','or','','questions','','please','','do','','not','','hesitate','','to','','let','','me','','know']
  const line4 = ['using','','the','','form','','below','.','Have','','a','','wonderful','','day','!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover done')
    },2800)
  },[])

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_Gmail',
        'template_37kldqs',
        refForm.current,
        'KB10OfKYmqYYKqJpx'
      )
      .then(
        () => {
          alert('Message Sent Successfully!')
        },
        () => {
          alert('Message Not Sent, Please Try Again!')
        }
      )
  }

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
          <p className='beginningpara'>
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
          <p className='finishedpara'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={line4}
                idx={160}
              />
          </p>
          <div className='contact-form'> 
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li>
                  <input type="text" name="from_name" placeholder='Name' required/>
                </li>
                <li>
                  <input type="email" name="email" placeholder='Email' required/>
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required/>
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='Send'></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Mason Yates,
          <br />
          Texarkanna,Texas
          <br />
          <span>Tidalabysstv@gmail.com</span>
        </div>
        <div className='map-wrap'> 
          <MapContainer center={[33.441792,-94.037689]} zoom={13}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[33.441792,-94.037689]}>
              <Popup>Mason Lives Here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
