import "./navbar.scss";
import html from "./navbar.html";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("beforeend", html);

  document.querySelectorAll("nav li").forEach((element) => {
    element.onclick = (event) => {
      console.log(event.target);
    };
  });
};

export { navbarLoad };
