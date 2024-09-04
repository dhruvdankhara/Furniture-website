const contact = document.getElementById("contactForm");

contact.addEventListener("submit", function (event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!fname.trim()) {
    alert("Enter Name.");
    return;
  }

  const pattern = /^[A-z\d]+@[a-z]+\.[a-z]+$/;

  if (!email.match(pattern)) {
    alert("Enter valid email address.");
    return;
  }

  if (!message.trim()) {
    alert("enter your message");
    return;
  }

  window.location.href = "shop.html";
});
