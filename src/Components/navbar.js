import { Link } from "react-router-dom";
import logo from "../assets/faneca.svg";
// import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">
            .<span>story</span>()
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/skills">
            .<span>skills</span>()
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/work">
            .<span>work</span>()
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/more">
            .<span>more</span>()
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
