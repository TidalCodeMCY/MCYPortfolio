import gsap from 'gsap'
import LogoM from '../../../../assets/images/mcy-logo.png'
import './index.scss'

export default function Logo() {
  const timeline = gsap.timeline({defaults: {duration: 1}})    
      timeline
      .fromTo('.solid-logo', {duration: 1,rotation: 0,opacity:0,scale: 0 },{rotation: -380,opacity:1,scale: .35})
      .fromTo('.solid-logo', {rotation: -20 },{rotation: 420,scale: .55})
      .fromTo('.solid-logo', {rotation: 40},{rotation: -440,scale: 1.15})
      .fromTo('.solid-logo', {rotation: -60},{scale: .70, rotation: 375})

        return (
    <div className='logo-container'>
        <img className='solid-logo' src={LogoM} alt="M" />
    </div>
  )
}