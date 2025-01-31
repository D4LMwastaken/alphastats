import {mean} from "../alphastats.js";


/*
* Calculate the mean of an array using the mean function from alphastats
* @param {string} input - Array used to find the mean
* @returns {number} - Mean of the array
* */
function calculateMean() {
    const input = document.getElementById("MeanInput").value;
    const numbers = input.split(",").map(Number);
    const result = mean(numbers);
    document.getElementById("MeanResult").innerHTML = `Mean: ${result}`;
    console.log(result)
}

window.calculateMean = calculateMean

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('calculateButton');
  button.addEventListener('click', function() {
    calculateMean();
  });
});