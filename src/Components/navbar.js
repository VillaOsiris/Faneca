import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <p>LOGO</p>
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
          <Link to="/contact">
            .<span>get</span>()
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
