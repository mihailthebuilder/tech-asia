import { sidebarLoad } from "../components/sidebar/sidebar.js";
import { articleLoad } from "../components/articles/articles.js";

const clickStyle = (element, style) => {
  element.addEventListener("click", (event) => {
    let newElem = event.target;
    newElem.classList.add(style);

    setTimeout(() => {
      newElem.classList.remove(style);
    }, 200);
  });
};

const homepageLoad = () => {
  document.querySelector("main").innerHTML = "";
  sidebarLoad();
  articleLoad();
};

export { clickStyle, homepageLoad };
