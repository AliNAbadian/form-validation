const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be at least 6 characters");
  }

  if (password.value.length >= 32) {
    messages.push("Password must be at least 32 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be Password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(", ");
  }
});
