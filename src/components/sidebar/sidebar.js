import "./sidebar.scss";
import html from "./sidebar.html";
import { clickStyle } from "../../common/common.js";

const sidebarLoad = () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);

  document.querySelectorAll("aside li").forEach((element) => {
    clickStyle(element, "side-div-clicked");
  });

  document.querySelectorAll(".article-link");
};

const sidebarMobileShow = () => {
  let sidebar = document.getElementsByTagName("aside")[0];

  if (
    document
      .getElementById("dropdown-button-wrapper")
      .classList.contains("nav-selected")
  ) {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
};

export { sidebarLoad, sidebarMobileShow };
