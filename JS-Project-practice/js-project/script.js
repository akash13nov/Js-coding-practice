let inputfield = document.querySelector(".input-field");
let inputPassword = document.querySelector(".input-password");
let loginBtn = document.querySelector(".login-button");

loginBtn.addEventListener("click", function () {
  const emailValue = inputfield.value.trim();
  const passwordValue = inputPassword.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("Please enter the details");
  } else {
    alert("Login successful!");
  }
});
