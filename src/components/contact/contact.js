import html from "./contact.html";
import "./contact.scss";

import { moveTop } from "../../common/common.js";

const contactLoad = () => {
  document.querySelector("main").innerHTML = html;

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
