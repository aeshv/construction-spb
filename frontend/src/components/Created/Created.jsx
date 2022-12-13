/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Created.scss";

const Created = () => {
  var animateButton = function (e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }

  return (
    <>
      <div className="created">
        <div className="created__wrapper">
          {/* <button className="bubbly-button"> */}
            <a href="https://github.com/aeshv">
              дизайн и разработку сделали <span>aeshv</span>
            </a>
          {/* </button> */}
        </div>
      </div>
    </>
  );
};

export default Created;
