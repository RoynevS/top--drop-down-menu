import "./styles/style.css";

const openDropDown = (function () {
  const hoverItem = document.querySelector(".hover-item");
  const dropDown = document.querySelector(".drop-down");
  const nav = document.querySelector("nav");

  const hoverHandler = (event) => {
    event.type === "mouseover"
      ? (dropDown.style.visibility = "visible")
      : (dropDown.style.visibility = "hidden");
  };

  hoverItem.addEventListener("mouseover", hoverHandler);
  nav.addEventListener("mouseleave", hoverHandler);
})();
