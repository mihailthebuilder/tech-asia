import "./navbar.scss";
import html from "./navbar.html";
import svg from "./hamburger.svg";

import { clickStyle, moveTop } from "../../common/common.js";
import { homepageLoad } from "../../common/common.js";

import { contactLoad } from "../contact/contact.js";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("afterbegin", html);

  let navLinks = document.querySelectorAll("nav li");

  navLinks.forEach((element) => {
    clickStyle(element, "nav-li-clicked");
    element.addEventListener("click", () => {
      moveTop();
    });
  });

  navLinks[0].addEventListener("click", () => {
    homepageLoad();
  });

  navLinks[1].addEventListener("click", () => {
    contactLoad();
  });

  //document.getElementById("dropdown-button-wrapper").insertAdjacentHTML(svg);
};

export { navbarLoad };
