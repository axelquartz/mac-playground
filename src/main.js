const boxes = document.querySelector(".boxes");
const hideButton = document.getElementById("hide-button");

hideButton.addEventListener("click", function () {
  boxes.className = "hide";
});
