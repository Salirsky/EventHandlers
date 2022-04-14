"use strict";

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");

const colorChange = function (event) {
  square.style.backgroundColor = event.target.value;
};

//text.addEventListener("input", colorChange);

btn.addEventListener("click", function () {
  console.log("Клик по кнопке");
  text.addEventListener("input", colorChange);
});
// В таком виде цвет меняется, только если кнопка уже была кликнута, причём цвет меняется как только его ввели, независимо от нажатия кнопки. Если кнопка кликнута не была, цвет не изменится, пока на неё не нажать.
