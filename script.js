"use strict";

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circle = document.getElementById("circle");

const colorChange = function (color) {
  square.style.backgroundColor = color;
};

const btnLogger = function () {
  colorChange(color);
};

const takeText = function (event) {
  color = event.target.value;
};

let color;

btn.addEventListener("click", btnLogger);

text.addEventListener("input", takeText);

//colors: #6949D7  #9D3ED5 #DB0058 #007730 #00B74A #FF3100
// #7109AA #3914AF #CD0074 #9FEE00

eBtn.style.display = "none";

const rangeLogger = function (event) {
  rangeSpan.textContent = event.target.value + "%";
  circle.style.width = event.target.value + "%";
  circle.style.height = event.target.value + "%";
};

range.addEventListener("input", rangeLogger);
