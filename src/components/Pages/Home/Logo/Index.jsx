import gsap from 'gsap'
import LogoM from '../../../../assets/images/mcy-logo.png'
import './index.scss'

export default function Logo() {
    const timeline = gsap.timeline({defaults: { duration: 1}})
    timeline
        .fromTo('.solid-logo', {duration:1,rotation: 0,opacity:0,scale: 0 },{ duration: 1,rotation: 75,opacity:1,scale: 1})
        .fromTo('.solid-logo', {duration:2,rotation: 75},{ rotation: -75})
        .fromTo('.solid-logo', {duration:1,rotation: -75},{ rotation: 20})

  return (
    <div className='logo-container'>
        <img className='solid-logo' src={LogoM} alt="M" />
    </div>
  )
}
