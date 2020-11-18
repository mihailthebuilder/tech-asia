import "./navbar.scss";
import html from "./navbar.html";

import { articleLoad } from "../articles/articles.js";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("afterbegin", html);

  let navLinks = document.querySelectorAll("nav li");

  navLinks.forEach((element) => {
    clickStyle(element, "nav-li-clicked");
  });

  //---TO CHANGE---
  navLinks[0].addEventListener("click", articleLoad);
  navLinks[1].addEventListener("click", articleLoad);
};

const clickStyle = (element, style) => {
  element.addEventListener("click", (event) => {
    let newElem = event.target;
    newElem.classList.add(style);

    setTimeout(() => {
      newElem.classList.remove(style);
    }, 200);
  });
};

export { navbarLoad };
