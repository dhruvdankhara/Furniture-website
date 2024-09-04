const login = document.getElementById("loginForm");

login.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const pattern = /^[A-z\d]+@[a-z]+\.[a-z]+$/;

  if (!email.match(pattern)) {
    alert("Enter valid email address.");
    return;
  }

  if (password.length < 7) {
    alert("password must be 8 character");
    return;
  }

  window.location.href = "index.html";
});
