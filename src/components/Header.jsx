import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <div>
      <span className='header'>React Context API</span>
      <ul className='nav'>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  );
}
