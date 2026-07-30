console.log("Javascript is connected");

function greetUser() {
  alert("Good morning! What can we do for you?");
}

const messageBtn = document.getElementById("messageBtn");
if (messageBtn) {
  messageBtn.addEventListener("click", function() {
    alert('Hello! Thanks for visiting K-Tech.');
  });
}

const toggleBtn = document.getElementById("toggleBtn");
const infoBox = document.getElementById("infoBox");
if (toggleBtn && infoBox) {
  toggleBtn.addEventListener("click", function() {
    infoBox.classList.toggle("hidden");
  });
}

const form = document.getElementById("ContactForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");
if (form && nameInput && message) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nameInput.value === "") {
      message.textContent = "Please enter your name";
      message.style.color = "red";
    } else {
      message.textContent = "Form submitted successfully!";
      message.style.color = "black";
    }
  });
}

function swapImage(el) {
  const main = document.querySelector('.main-img');
  if (main && el && el.src) {
    main.src = el.src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }
}
