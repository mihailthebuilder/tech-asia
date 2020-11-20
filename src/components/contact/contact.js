import html from "./contact.html";
import "./contact.scss";

const contactLoad = () => {
  document.querySelector("main").innerHTML = html;
};

export { contactLoad };
