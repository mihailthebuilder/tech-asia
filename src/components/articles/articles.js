import "./articles.scss";
import html from "./articles.html";

const articleLoad = (articleId = "china") => {
  let prevSection = document.querySelector("main>section");
  if (prevSection) {
    prevSection.remove();
  }

  let doc = new DOMParser().parseFromString(html, "text/html");
  document.querySelector("main").appendChild(doc.getElementById(articleId));
};

export { articleLoad };
