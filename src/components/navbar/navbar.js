import "./navbar.scss";
import html from "./navbar.html";

import { clickStyle } from "../../common/common.js";
import { articleLoad } from "../articles/articles.js";
import { homepageLoad } from "../../common/common.js";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("afterbegin", html);

  let navLinks = document.querySelectorAll("nav li");

  navLinks.forEach((element) => {
    clickStyle(element, "nav-li-clicked");
  });

  navLinks[0].addEventListener("click", () => {
    homepageLoad();
  });
};

export { navbarLoad };
