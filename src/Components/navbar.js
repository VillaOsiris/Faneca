import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/faneca.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [navModal, setNavModal] = useState(false);

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
      <div
        className="nav__bars"
        onClick={() => {
          setNavModal(!navModal);
        }}
      >
        {navModal ? <FaTimes /> : <FaBars />}
      </div>
      {navModal && (
        <div className="nav__modal">
          <div>
            <Link
              to="/"
              onClick={() => {
                setNavModal(false);
              }}
            >
              .story()
            </Link>
          </div>
          <div>
            <Link
              to="/skills"
              onClick={() => {
                setNavModal(false);
              }}
            >
              .skills()
            </Link>
          </div>
          <div>
            <Link
              to="/work"
              onClick={() => {
                setNavModal(false);
              }}
            >
              .work()
            </Link>
          </div>
          <div>
            <Link
              to="/more"
              onClick={() => {
                setNavModal(false);
              }}
            >
              .more()
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
