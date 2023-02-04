import { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaCodepen } from "react-icons/fa";

function SideBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar--btn">
        <a
          href="https://drive.google.com/file/d/17wy2-8JjxLAvVG3lJdz1EnI83icA2W8n/view"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          CV
        </a>
      </div>
      <div className="sidebar--btn">
        <a
          href="https://www.linkedin.com/in/sergiocscosta/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="sidebar--btn">
        <a
          href="https://github.com/VillaOsiris"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="sidebar--btn">
        <a
          href="https://codepen.io/VillaOsiris"
          target="_blank"
          rel="noreferrer"
        >
          <FaCodepen />
        </a>
      </div>
      <div className="sidebar--btn">
        <div onClick={() => setShowModal(!showModal)}>
          <FaWhatsapp />
        </div>
      </div>
      {showModal && (
        <div className="contact__modal">
          <p>(+34) 612 225 757</p>
          <p>sergio20128@hotmail.com</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
