import "./sidebar.scss";
import html from "./sidebar.html";
import { clickStyle } from "../../common/common.js";

const sidebarLoad = () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);

  document.querySelectorAll("aside div").forEach((element) => {
    clickStyle(element, "side-div-clicked");
  });
};

export { sidebarLoad };
