import html from "./footer.html";
import "./footer.scss";

const footerLoad = () => {
  let doc = new DOMParser().parseFromString(html, "text/html");

  document.body.insertBefore(
    doc.documentElement,
    document.querySelector("script")
  );
};

export { footerLoad };
