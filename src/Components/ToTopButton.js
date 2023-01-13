import React from "react";
import { FaArrowUp } from "react-icons/fa";

function ToTopButton() {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("backTop").style.display = "block";
    } else {
      document.getElementById("backTop").style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // document.body.scrollTop = 0; // For Safari
  }

  return (
    <button id="backTop" className="backTop" onClick={() => topFunction()}>
      <FaArrowUp />
    </button>
  );
}

export default ToTopButton;
