import "./navbar.scss";
import html from "./navbar.html";

import articleLoad from "../sidebar/sidebar.js";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("beforeend", html);

  let navLinks = document.querySelectorAll("nav li");

  navLinks.forEach((element) => {
    clickStyle(element);
  });
};

const clickStyle = (element) => {
  console.log(element);
  element.onclick = (event) => {
    let newElem = event.target;
    newElem.classList.add("nav-li-clicked");

    setTimeout(() => {
      newElem.classList.remove("nav-li-clicked");
    }, 200);
  };
};

export { navbarLoad };
