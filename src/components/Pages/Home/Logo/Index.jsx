import gsap from 'gsap'
import LogoM from '../../../../assets/images/mcy-logo.png'
import './index.scss'
import { useEffect } from 'react'

export default function Logo() {
  const timeline = gsap.timeline({defaults: { duration: 2}})
    useEffect(()=>{
      
      timeline
      .fromTo('.solid-logo', {duration: 1,rotation: 0,opacity:0,scale: 0 },{rotation: 380,opacity:1,scale: .35})
      .fromTo('.solid-logo', {rotation: 20 },{rotation: -420,scale: .65})
      .fromTo('.solid-logo', {rotation: -40},{rotation: 440,scale: 1.15})
      .fromTo('.solid-logo', {rotation: 60},{scale: 1.05, rotation: -40})
      .fromTo('.solid-logo', {rotation: -40},{scale: .95,rotation: 40})
      .fromTo('.solid-logo', {rotation: 40},{scale: .85, rotation: -30})
      .fromTo('.solid-logo', {rotation: -30},{scale: .80, rotation: 10})
    })
    
        return (
    <div className='logo-container'>
        <img className='solid-logo' src={LogoM} alt="M" />
    </div>
  )
}
