import gsap from 'gsap'
import LogoM from '../../../../assets/images/mcy-logo.png'
import './index.scss'

export default function Logo() {
  const timeline = gsap.timeline({defaults: {duration: .2}})    
      timeline
      .fromTo('.solid-logo', {rotation: 0,opacity:0,scale: 0 },{rotation: -90,opacity:1,scale: .25})
      .fromTo('.solid-logo', {rotation: -90 },{rotation: -180,scale: .35})
      .fromTo('.solid-logo', {rotation: -180},{rotation: -270,scale: .45})
      .fromTo('.solid-logo', {rotation: -270},{scale: .55, rotation: -360})
      .fromTo('.solid-logo', {rotation: 0},{rotation: -90,scale: .65})
      .fromTo('.solid-logo', {rotation: -90 },{rotation: -180,scale: .85})
      .fromTo('.solid-logo', {rotation: -180},{rotation: -270,scale: .95})
      .fromTo('.solid-logo', {rotation: -270},{scale: 1.05, rotation: -360})
      .fromTo('.solid-logo', {rotation: 0},{rotation: -90,scale: .95})
      .fromTo('.solid-logo', {rotation: -90 },{rotation: -180,scale: .85})
      .fromTo('.solid-logo', {rotation: -180},{rotation: -270,scale: .95})
      .fromTo('.solid-logo', {rotation: -270},{scale: .80, rotation: -345})
      
        return (
    <div className='logo-container'>
        <img className='solid-logo' src={LogoM} alt="M" />
    </div>
  )
}