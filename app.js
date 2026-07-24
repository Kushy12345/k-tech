console.log("Javascript is connected");
//alert("Welcome to K-Tech");
console.log(2+3);

let traineeName = "Kush";
console.log(traineeName);

traineeName= "Dre"
console.log(traineeName);

const age = 23;
console.log(age);

function greetUser() {
    //alert("Good morning, What can we do for you")
}
greetUser();

document.getElementById(messageBtn);
messageBtn.addEventListener("mouseenter", function() {
  //  alert ("Button clicked");
    
});

const heading = document.querySelector("h1");
heading.textContent = "Welcome to the best gadget store on the planet"

console.log(heading);

const toggleBtn = document.getElementById("toggleBtn");
const infoBox = document.getElementById("infoBox");

toggleBtn.addEventListener("click", function() {
    infoBox.classList.toggle("hidden")
});

const form = document.getElementById("ContactForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

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