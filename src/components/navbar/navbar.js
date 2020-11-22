import "./navbar.scss";
import html from "./navbar.html";
import svg from "./hamburger.svg";

import { clickStyle } from "../../common/common.js";
import { homepageLoad } from "../../common/common.js";

import { contactLoad } from "../contact/contact.js";
import { sidebarMobileShow } from "../sidebar/sidebar.js";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("afterbegin", html);

  let navLinks = document.querySelectorAll("nav li");

  navLinks.forEach((element) => {
    clickStyle(element, "nav-li-clicked");
  });

  navLinks[0].addEventListener("click", () => {
    homepageLoad();
  });

  navLinks[1].addEventListener("click", () => {
    contactLoad();
  });

  let dropdownButton = document.getElementById("dropdown-button-wrapper");
  dropdownButton.insertAdjacentHTML("afterbegin", svg);

  dropdownButton.addEventListener("click", (event) => {
    dropdownButton.classList.toggle("nav-selected");
    sidebarMobileShow();
  });
};

export { navbarLoad };
