import { sidebarLoad } from "../components/sidebar/sidebar.js";
import { articleLoad } from "../components/articles/articles.js";

const clickStyle = (element, style) => {
  element.classList.add(style);

  setTimeout(() => {
    element.classList.remove(style);
  }, 200);
};

const moveTop = () => {
  window.scrollTo(0, 0);
};

const homepageLoad = () => {
  document.querySelector("main").innerHTML = "";
  sidebarLoad();
  articleLoad();
};

export { clickStyle, homepageLoad, moveTop };
