import "./articles.scss";
import html from "./articles.html";

const articleLoad = (articleId = "china") => {
  let doc = new DOMParser().parseFromString(html, "text/html");

  let prevSection = document.querySelector("main>section");
  if (prevSection) {
    prevSection.remove();
  }

  document.querySelector("main").appendChild(doc.getElementById(articleId));
};

export { articleLoad };
