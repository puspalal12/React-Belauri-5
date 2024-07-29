import logo from "../images/national-logo.png";
import flag from "../images/flag.png";
import "./Navbar.css";
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <>
      <div className="navbar">
        <section className="nav-intro">
          <h5>Welcome To Belauri Municipality</h5>
          <h5>Tourism City,Belauri Municipality</h5>
        </section>
        <section className="logo">
          <div className="office-name">
            <a href="">
              <img id="logo" src={logo} alt="" />
            </a>
            <h2>
              Belauri Municipality <br />
              Ward-5 Office <br />
              <p>Bhakunda,Kanchanpur</p>
            </h2>
          </div>
          <img id="flag" src={flag} alt="" />
        </section>
        <section className="nav-item">
          <ul>
            <li>
            <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
            </li>
            <li>
            <Link to='intro' smooth={true} offset={0} duration={500}>Introduction</Link>
            </li>
            <li>
            <Link to='notice-head' smooth={true} offset={0} duration={500}>Notice</Link>
            </li>
            <li>
            <Link to='con-title' smooth={true} offset={0} duration={500}>Contact</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Navbar;
