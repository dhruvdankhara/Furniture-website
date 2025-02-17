$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    let fname = $("#fname").val();
    let email = $("#email").val();
    let message = $("#message").val();
    let isValid = true;

    $(".error-message").remove();

    const emailPattern = /^[A-z\d]+@[a-z]+\.[a-z]+$/;

    if (!fname.trim()) {
      $("#fname").after(
        '<span class="error-message text-danger">Enter Name.</span>'
      );
      isValid = false;
    }

    if (!email.match(emailPattern)) {
      $("#email").after(
        '<span class="error-message text-danger">Enter valid email address.</span>'
      );
      isValid = false;
    }

    if (!message.trim()) {
      $("#message").after(
        '<span class="error-message text-danger">Enter your message.</span>'
      );
      isValid = false;
    }

    if (isValid) {
      window.location.href = "shop.html";
    }
  });
});
