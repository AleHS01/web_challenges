const form = document.querySelector("form");

// let inputValue = document.getElementById("text-box");
// const checkButton = document.getElementById("submit");
let outputParagraph = document.querySelector(".output");
const resultHeader = document.querySelector(".results h1");

form.addEventListener("submit", function (event) {
  outputParagraph.textContent = "";
  event.preventDefault();
  let inputValue = document.getElementById("text-box").value;
  resultHeader.textContent = "Results for :" + inputValue;
  if (isPalindrome(inputValue)) {
    outputParagraph.classList.add("palindrome");
    outputParagraph.classList.remove("not-palindrome");
    outputParagraph.textContent = inputValue + " is a Palindrome";
  } else {
    outputParagraph.classList.add("not-palindrome");
    outputParagraph.classList.remove("palindrome");
    outputParagraph.textContent = inputValue + " is not a Palindrome";
  }
});

function isPalindrome(word) {
  const wordLength = word.length;
  debugger;
  for (let i = 0; i < wordLength; i++) {
    if (word[i] !== word[wordLength - i - 1]) return false;
  }
  return true;
}
