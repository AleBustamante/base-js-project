import sumar from "./sumador";
import multiplicar from "./multiplicador";

const firstSum = document.querySelector("#primer-num-sum");
const secondSum = document.querySelector("#segundo-num-sum");
const firstMult = document.querySelector("#primer-num-mult");
const secondMult = document.querySelector("#segundo-num-mult");
const sumForm = document.querySelector("#sumar-form");
const multForm = document.querySelector("#multiplicar-form");
const divSum = document.querySelector("#resultado-sum");
const divMult = document.querySelector("#resultado-mult");

sumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstSum.value);
  const secondNumber = Number.parseInt(secondSum.value);

  divSum.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMult.value);
  const secondNumber = Number.parseInt(secondMult.value);

  divMult.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
