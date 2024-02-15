document.getElementById("change-name").addEventListener("click", function () {
  const changeText = document.getElementById("change-text");
  changeText.innerText = "My name is.....";
});

document.getElementById("btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputFieldValue = inputField.value;
  const tittleChange = document.getElementById("text-tittle-change");
  tittleChange.innerText = inputFieldValue;
  inputField.value = "";
});

// let serial = 1;
// document
//   .getElementById("submit-btn")
//   .addEventListener("click", function () {
//     const textArea = document.querySelector("textarea");
//     const textAreaValue = textArea.value;
//     const review = document.getElementById("review");
//     const paragraph = document.createElement("p");
//     paragraph.innerText = serial + "." + textAreaValue;
//     serial++;
//     review.appendChild(paragraph);
//     textArea.value = "";
//   });

// let number = 1;
// document
//   .getElementById("submit-btn")
//   .addEventListener("click", function () {
//     const textareaInput = document.getElementById("textarea").value;
//     const userReview = document.getElementById("user-review");
//     const p = document.createElement("p");
//     p.innerText = number + "." + textareaInput;
//     userReview.appendChild(p);
//     number++;
//     textareaInput.value = " ";
//   });

let num = 1;
document.getElementById("submit-btn").addEventListener("click", function () {
  const textareaInput = document.querySelector("textarea");
  const textareas = textareaInput.value;
  const userReview = document.getElementById("user-review");
  const p = document.createElement("p");
  p.innerText = num + "." + textareas;
  userReview.appendChild(p);
  num++;
  textareaInput.value = "";
});

let number = 0;
document.getElementById("second-btn").addEventListener("click", function () {
  const numbers = document.getElementById("num");
  // console.log(numbers);
  number += numbers.innerText++;
});

document.getElementById("first-btn").addEventListener("click", function () {
  const numbers = document.getElementById("num");
  number -= numbers.innerText--;
});
