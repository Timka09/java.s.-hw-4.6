import { playRound } from "./game.js";

const userChoice = prompt("Вибери: камінь, ножиці або папір").toLowerCase();
alert(playRound(userChoice));
