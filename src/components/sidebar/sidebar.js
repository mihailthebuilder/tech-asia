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

      /*
      // if dropdown visible then hide sidebar after click
      if (
        document.getElementById("dropdown-button-wrapper").offsetParent != null
      ) {
        sidebarMobileShow();
      }*/
    });
  });
};

const sidebarMobileToggle = () => {
  let sidebar = document.getElementsByTagName("aside")[0];
  console.log(sidebar);

  if (
    sidebar.style.display == "block" ||
    sidebar.style.display == "block !important"
  ) {
    sidebar.style.display = "none !important";
  } else {
    sidebar.style.display = "block !important";
  }

  console.log(sidebar.style.display);
};

export { sidebarLoad, sidebarMobileToggle };
