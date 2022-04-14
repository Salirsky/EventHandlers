"use strict";

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circle = document.getElementById("circle");

const colorChange = function (event) {
  square.style.backgroundColor = event.target.value;
};

//text.addEventListener("input", colorChange);

btn.addEventListener("click", function () {
  console.log("Клик по кнопке");
  text.addEventListener("input", colorChange);
});
// В таком виде цвет меняется, только если кнопка уже была кликнута, причём цвет меняется как только его ввели, независимо от нажатия кнопки. Если кнопка кликнута не была, цвет не изменится, пока на неё не нажать.

eBtn.style.display = "none";

const rangeLogger = function (event) {
  rangeSpan.textContent = event.target.value + "%";
  circle.style.width = event.target.value + "%";
  circle.style.height = event.target.value + "%";
};

range.addEventListener("input", rangeLogger);
