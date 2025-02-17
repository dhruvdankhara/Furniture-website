$(document).ready(function () {
  // Form validation
  $("#signupForm").submit(function (event) {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let isValid = true;

    $(".error-message").remove();

    const emailPattern = /^[A-z\d]+@[a-z]+\.[a-z]+$/;
    const phonePattern = /^\d{10}$/;

    if (name.trim() === "") {
      $("#name").after(
        '<span class="error-message text-danger">Name is required.</span>'
      );
      isValid = false;
    }

    if (!phone.match(phonePattern)) {
      $("#phone").after(
        '<span class="error-message text-danger">Enter valid phone number.</span>'
      );
      isValid = false;
    }

    if (!email.match(emailPattern)) {
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

  // Hover event
  $("#signupForm button[type='submit']").hover(
    function () {
      $(this).css("background-color", "green");
    },
    function () {
      $(this).css("background-color", "");
    }
  );

  // Mouseover event
  $("#signupForm input").mouseover(function () {
    $(this).css("border-color", "blue");
  });

  // Keyboard event
  $("#signupForm input").keydown(function (event) {
    if (event.key === "Enter") {
      alert("Enter key pressed!");
    }
  });
});
