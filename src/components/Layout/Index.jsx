import './index.scss';
import Navbar from '../Navbar/Index.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  
  return (
    <>
      <Navbar />
      <div className='page'>
        <span className='tags top-tags'>
          &lt;html&gt;
          <br />
          <span className='script-tag-html'>
            &lt;/link&gt;
            <br />
            <span className='tag-html-link'>&lt;/body&gt;</span>
            </span>
          </span>

        <Outlet />

        <span className='tags bottom-tags'>
          &lt;/script&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </>
  )
}