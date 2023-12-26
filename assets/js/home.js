function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let navbar = document.querySelector("nav.navbar");
  let darkButton = document.querySelector("input[type=checkbox]");
  let span = document.querySelector("label.switch span");
  if (darkButton.checked) {
    navbar.classList = "navbar navbar-expand-lg navbar-dark bg-dark";
    span.classList = "slider-dk round-dk";
  } else {
    navbar.classList = "navbar navbar-expand-lg navbar-light bg-blue";
    span.classList = "slider-lg round-lg";
  }
  console.log(darkButton.checked);
}
