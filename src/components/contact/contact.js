import html from "./contact.html";
import "./contact.scss";

import { moveTop } from "../../common/common.js";

const contactLoad = () => {
  let newHtml = new DOMParser().parseFromString(html, "text/html");

  document
    .querySelector("main")
    .replaceChild(
      newHtml.documentElement.querySelector("section"),
      document.querySelector("section")
    );

  document.getElementsByTagName("aside")[0].style.display = "none";

  document
    .getElementsByTagName("form")[0]
    .addEventListener("submit", (event) => {
      event.preventDefault();
      event.target.classList.add("hide");

      setTimeout(() => {
        event.target.style.display = "none";
        let submittedElem = document.getElementById("submitted");
        submittedElem.style.display = "block";

        setTimeout(() => {
          submittedElem.classList.add("show");
        }, 100);
      }, 500);
    });

  moveTop();
};

export { contactLoad };
