"use strict";
let passwordChar =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+|}{/.,";
let btn = document.getElementById("button");
let btnCopy = document.querySelector(".buttoncopy");
let input = document.getElementById("input");

btn.addEventListener("click", generatePassword);

function generatePassword() {
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += passwordChar.charAt(
      Math.floor(Math.random() * passwordChar.length)
    );
    input.value = password;
    input.style.display = "block";
  }
  return password;
}

btnCopy.addEventListener("click", function () {
  let copyText = input;
  copyText.select();

  navigator.clipboard.writeText(copyText.value);
});
