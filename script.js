const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");


if (savedUsername && savedPassword) {
  existingBtn.style.display = "block";

  username.value = savedUsername;
  password.value = savedPassword;

  checkbox.checked = true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "" || password.value === "") {
    alert("Please fill all fields");
    return;
  }

  alert(`Logged in as ${username.value}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existingBtn.style.display = "none";
  }
});

existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");

  alert(`Logged in as ${savedUser}`);
});