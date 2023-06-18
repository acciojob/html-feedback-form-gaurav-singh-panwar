//your code here
const form = document.querySelector("form");

const nameInput = form.querySelector("#name");
const portfolioInput = form.querySelector("#portfolio");
const favColorInput = form.querySelector("#favColor");

const submitButton = form.querySelector("input[type='submit']");

submitButton.addEventListener("click", () => {
  const name = nameInput.value;
  const portfolio = portfolioInput.value;
  const favColor = favColorInput.value;

  // Do something with the name, portfolio, and favColor values.
});