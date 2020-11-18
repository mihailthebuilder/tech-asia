import "./sidebar.scss";
import html from "./sidebar.html";

const sidebarLoad = () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);
  console.log("sidebarLoad activated");
};

export { sidebarLoad };
