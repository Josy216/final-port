const btn = document.querySelector("#more");
const morePro = document.querySelector(".more-pro");
btn.addEventListener("click", function more() {
  if (morePro.style.display === "flex") {
    morePro.style.display = "none";
    btn.textContent = "show More";
  } else {
    morePro.style.display = "flex";
    btn.textContent = "show Less";
  }
});
