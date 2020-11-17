import "./navbar.scss";
import html from "./navbar.html";

const navbarLoad = () => {
  document.body.insertAdjacentHTML("beforeend", html);

  /*
  document.querySelector("li").onclick((event) => {
    console.log(event.target);
  });*/
};

export { navbarLoad };
