$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    let isValid = true;

    $(".error-message").remove();

    const pattern = /^[A-z\d]+@[a-z]+\.[a-z]+$/;

    if (!email.match(pattern)) {
      $("#email").after(
        '<span class="error-message text-danger">Enter valid email address.</span>'
      );
      isValid = false;
    }

    if (password.length < 8) {
      $("#password").after(
        '<span class="error-message text-danger">Password must be at least 8 characters.</span>'
      );
      isValid = false;
    }

    if (isValid) {
      window.location.href = "index.html";
    }
  });
});
