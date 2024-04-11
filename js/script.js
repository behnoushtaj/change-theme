let btnColor = document.querySelectorAll(".btn");

btnColor.forEach(function (elem) {
  elem.addEventListener("click", function (event) {
    let colorData = event.target.dataset.color;
    document.documentElement.style.setProperty("--theme-color", colorData);
  });
});
