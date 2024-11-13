// 1. Using getElementById 
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

// 2. Using getElementsByClassName 
const containers = document.getElementsByClassName("container");
console.log(containers);

const sections = document.getElementsByClassName("section");
console.log(sections);

// 3. Using getElementsByTagName 
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// 4. Using querySelector 
const firstButton = document.querySelector(".btn");
console.log(firstButton);

const firstSection = document.querySelector(".section");
console.log(firstSection);

// 5. Using querySelectorAll 
const allButtons = document.querySelectorAll(".btn");
console.log(allButtons);

const containerParagraphs = document.querySelectorAll(".container p");
console.log(containerParagraphs);
