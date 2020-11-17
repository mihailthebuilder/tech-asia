import "./navbar.scss";
import html from "./navbar.html";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("beforeend", html);
};

export { navbarLoad };
