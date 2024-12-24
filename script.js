"use strict";

const subscribeContainer = document.querySelector(".container-hidden");
const successMessage = document.querySelector(".container2");
const btnSubscribe = document.querySelector(".btnSubscribe");
const email = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-enter");
const errorMessage = document.querySelector(".error-message");
const messageDismiss = document.querySelector(".btn-dismiss");
const btnColor = document.querySelector(".btn");

btnSubscribe.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = email.value.trim();

  if (!emailValue) {
    // alert("enter address");
    errorMessage.textContent = "Valid email required";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(3, 33%, 87%)";
    btnColor.style.backgroundColor = "hsl(234, 29%, 20%)";

    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    errorMessage.textContent = "Valid email required";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(3, 33%, 87%)";
    btnColor.style.backgroundColor = "hsl(234, 29%, 20%)";
  } else {
    subscribeContainer.style.display = "none";
    successMessage.classList.remove("success-container");
    emailInput.textContent = emailValue;
  }
  console.log(emailValue);
});

messageDismiss.addEventListener("click", function () {
  subscribeContainer.classList.remove("container-hidden");
  subscribeContainer.style.display = "flex";
  successMessage.classList.add("success-container");
  email.value = " ";
  errorMessage.textContent = " ";
  email.style.borderColor = "hsl(234, 29%, 20%)";
  email.style.color = "hsl(234, 29%, 20%)";
  email.style.backgroundColor = "hsl(0, 0%, 100%)";
});

console.log(email);
console.log(subscribeContainer);
