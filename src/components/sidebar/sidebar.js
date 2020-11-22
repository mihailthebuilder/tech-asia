import "./sidebar.scss";
import html from "./sidebar.html";
import { clickStyle } from "../../common/common.js";
import { articleLoad } from "../articles/articles";
import { contactLoad } from "../contact/contact.js";

const sidebarLoad = () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);

  document.querySelectorAll("aside li").forEach((element) => {
    element.addEventListener("click", (event) => {
      let clickedElem = event.target;

      clickStyle(clickedElem, "side-div-clicked");

      if (clickedElem.hasAttribute("id")) {
        contactLoad();
      } else {
        articleLoad(clickedElem.getAttribute("linkTo"));
      }
    });
  });
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
