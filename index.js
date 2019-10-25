const hidder = document.createElement("div");
hidder.style.position = "fixed";
hidder.style.top = 0;
hidder.style.left = 0;
hidder.style.width = "100vw";
hidder.style.height = "100vh";
hidder.style.backgroundColor = "white";
hidder.style.zIndex = "99999999999";
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(hidder);
});

window.addEventListener("load", () => {
  [...document.querySelectorAll(".box")]
    .filter($el => $el.style.backgroundColor === "rgb(247, 248, 170)")
    .map($el => {
      $el.style.backgroundColor = "rgb(247, 248, 250)";
      $el.querySelector("a").remove();
    });
  setTimeout(() => {
    hidder.remove();
  }, 100);
});
