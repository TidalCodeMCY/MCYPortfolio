import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

export default function Cube() {
  return (
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
  )
}
