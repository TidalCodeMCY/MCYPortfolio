import './index.scss';
import Navbar from '../Navbar/Index.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='page'>
        <span className='tags top-tags'>
          &lt;body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
          </span>

        <Outlet />

        <span className='tags bottom-tags'>
          &lt;/link&gt;
          <br />
          <span className='script-tag-html'>&lt;/script&gt;</span>
        </span>
      </div>
    </>
  )
}
