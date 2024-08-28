import './Navbar.css';
import mainLogo from '../images/main-logo.png';

export default function Navbar() {
  return (
    <nav id="nav-container">
      <img src={mainLogo}/>
      <div id="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  )
}
