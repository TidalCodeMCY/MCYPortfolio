import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/mcy-logo.png'
import LogoSubtitle from '../../assets/images/Mason-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo'  src={LogoSubtitle} alt='slobodan' />
        </Link>

        <nav>
          <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </NavLink>

          <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>

          <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mason-yates-320944298/'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/TidalCodeMCY'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCpYyAAjOnnLyEbpR3i-OXYQ'>
              <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a target='_blank' rel='noreferrer' href='https://join.skype.com/invite/guZH6WahD1jA'>
              <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a target='_blank' rel='noreferrer' href='https://discord.gg/PRvahgS8bc'>
              <FontAwesomeIcon icon={faDiscord} color='#4d4d4e' />
            </a>
          </li>
        </ul>
    </div>
  )
}
