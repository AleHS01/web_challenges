const form = document.querySelector("form");
let outputParagraph = document.querySelector(".output");
const resultHeader = document.querySelector(".results h1");

form.addEventListener("submit", function (event) {
  outputParagraph.textContent = ""; //Resetting the result each  submit
  event.preventDefault(); //giving the form a new behavior
  let inputValue = document.getElementById("text-box").value;
  resultHeader.textContent = "Results for :" + inputValue;
  if (isPalindrome(inputValue)) {
    outputParagraph.classList.add("palindrome"); //adding palindrome class
    outputParagraph.classList.remove("not-palindrome"); //removing not-palindrome class if it has it
    outputParagraph.textContent = inputValue + " is a Palindrome";
  } else {
    outputParagraph.classList.add("not-palindrome"); //adding not-palindrome class if it's not a palindrome
    outputParagraph.classList.remove("palindrome"); //removing palindrome in case it has it
    outputParagraph.textContent = inputValue + " is not a Palindrome";
  }
});

function isPalindrome(word) {
  word = word.toUpperCase(); //So that don't matter if it's lower case or uppercase the algo will work
  const wordLength = word.length;
  debugger; //use debugger to find the error in the algorithm

  /*
    if character at [i] of words is not the same as character at [word.length - i - 1],
     basically the first part word[i] will it iterate each letter from left to right, the other part word[wordLength - i - 1] from right to left
     , if they don't macth then is not a palindrome hence return false and set not-palindrome class, else return true and set palindrome class
     */

  for (let i = 0; i < wordLength; i++) {
    if (word[i] !== word[wordLength - i - 1]) return false;
  }
  return true;
}
