import { Link } from "react-router-dom";
import logo from "../assets/faneca.svg";

const NavBar = () => {
  return (
    <div className="nav">
      <Link className="nav__logo" to="/">
        <img src={logo} alt="faneca logo" />
      </Link>
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
