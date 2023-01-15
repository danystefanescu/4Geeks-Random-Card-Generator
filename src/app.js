/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSeeds());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let seed = ["diamond", "spade", "heart", "club"];

window.getCard = function getCard() {
  let card = document.querySelector(".card");
  for (let i = 0; i < seed.length; i++) {
    if (card.classList.contains(seed[i])) {
      card.classList.remove(seed[i]);
    }
  }
  card.classList.add(generateRandomSeeds(seed));
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexCardNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexCardNumbers];
};

let generateRandomSeeds = () => {
  let seeds = ["diamond", "spade", "heart", "club"];
  let indexCardSeeds = Math.floor(Math.random() * seeds.length);
  return seeds[indexCardSeeds];
};

/* 
  Solución Mattia

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
  let seeds = ["♦", "♥", "♠", "♣"];

  let cardNumber = document.querySelector("#cardNumber");
  let cardSeeds = document.querySelectorAll(".cardSeed");

  let randomNumbersIndex = Math.floor(Math.random() * numbers.length);
  cardNumber.innerHTML = numbers[randomNumbersIndex];

  let randomSeedsIndex = Math.floor(Math.random() * seeds.length);
  for (let x = 0; x < cardSeeds.length; x++) {
    cardSeeds[x].innerHTML = seeds[randomSeedsIndex];
  };
*/
