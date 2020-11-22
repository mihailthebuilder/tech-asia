import "./sidebar.scss";
import html from "./sidebar.html";
import { clickStyle, moveTop } from "../../common/common.js";
import { articleLoad } from "../articles/articles.js";

const sidebarLoad = () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);

  document.querySelectorAll("aside li").forEach((element) => {
    clickStyle(element, "side-div-clicked");
  });

  document.querySelectorAll(".article-link");
};

const sidebarMobileShow = () => {
  console.log("sidebarMobileShow loaded");
};

export { sidebarLoad, sidebarMobileShow };
