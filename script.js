// typing animation

const text = [
"DSA Enthusiast",
"C++ Programmer",
"Frontend Developer",
"Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0,++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);

})();


// scroll reveal

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((element) => {

const windowHeight = window.innerHeight;
const revealTop = element.getBoundingClientRect().top;
const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){
element.classList.add("active");
}

});

});