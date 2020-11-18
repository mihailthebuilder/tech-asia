const clickStyle = (element, style) => {
  element.addEventListener("click", (event) => {
    let newElem = event.target;
    newElem.classList.add(style);

    setTimeout(() => {
      newElem.classList.remove(style);
    }, 200);
  });
};

export { clickStyle };
