const signup = document.getElementById("signupForm");

signup.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  console.log("🚀 ~ name:", name);
  const number = document.getElementById("phone").value;
  console.log("🚀 ~ number:", typeof number);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name.trim()) {
    alert("Enter Name.");
    return;
  }

  if (number.length != 10) {
    alert("Phone number length is must be 10 digits.");
    return;
  }

  const pattern = /^[A-z\d]+@[a-z]+\.[a-z]+$/;

  if (!email.match(pattern)) {
    alert("Enter valid email address.");
    return;
  }

  if (password.trim().length < 7) {
    alert("password must be 8 character");
    return;
  }

  window.location.href = "login.html";
});
