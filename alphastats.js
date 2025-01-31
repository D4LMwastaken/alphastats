/*
* A console test function that I don't know why it exists still...
* @param {string} letter - Must match up with a specific word
* @returns {string} - Returns a string that is shows if you entered the correct word
* */
function consoleTest(letter="sigma") {
  if (letter==="sigma" || letter!=="alpha") {
    console.error("You are not sigma enough to obtain the true content of this error message, so this temporary error message was placed. To become more sigma, you must improve your physique by enhancing your jawline until it reaches a status of chiseled, and then try again.");
  } else {
    return("A true sigma right there buddy, this function will not return this message to the console, this message is being returned as a string.");
  }
}

/*
* Find the mean of an array
* @param {number[]} input - Array used to find the mean
* @returns {number} - Mean of the array
* */
function mean(input) {
  if (input.length === 0) return null; // Handle empty array case
  const sum = input.reduce((acc, num) => acc + num, 0);
  return sum / input.length;
}



export {consoleTest,mean};
