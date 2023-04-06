console.log("linked cart")

// Cache to html

// Gegevens
const email = document.querySelector('input[name="email"]')
email.value = localStorage.getItem("email")

const email2 = document.querySelector('input[name="email2"]')
email2.value = localStorage.getItem("email2")

const email3 = document.querySelector('input[name="email3"]')
email3.value = localStorage.getItem("email3")

const gender = document.querySelector('input[name="gender"]')
gender.value = localStorage.getItem("gender")

const gender2 = document.querySelector('input[name="gender2"]')
gender2.value = localStorage.getItem("gender2")

const gender3 = document.querySelector('input[name="gender3"]')
gender3.value = localStorage.getItem("gender3")

const size = document.querySelector('input[name="size"]')
size.value = localStorage.getItem("size")

const size2 = document.querySelector('input[name="size2"]')
size2.value = localStorage.getItem("size2")

const size3 = document.querySelector('input[name="size3"]')
size3.value = localStorage.getItem("size3")

// Design
// text
const text = document.querySelector('input[name="text"]')
text.value = localStorage.getItem("text");

const text3 = document.querySelector('input[name="text2"]')
text3.value = localStorage.getItem("text2");

const text5 = document.querySelector('input[name="text3"]')
text5.value = localStorage.getItem("text3");

// color
const color = document.querySelector('input[name="color"]')
color.value = localStorage.getItem("color")

const color2 = document.querySelector('input[name="color2"]')
color2.value = localStorage.getItem("color2")

const color3 = document.querySelector('input[name="color3"]')
color3.value = localStorage.getItem("color3")

// graphic
const file = document.querySelector('input[name="print"]')
file.value = localStorage.getItem("file")

const file2 = document.querySelector('input[name="print2"]')
file2.value = localStorage.getItem("file2")

const file3 = document.querySelector('input[name="print3"]')
file3.value = localStorage.getItem("file3")

const img = document.querySelector("#test")
img.src = localStorage.getItem('graphic');

const img2 = document.querySelector("#test2")
img2.src = localStorage.getItem('graphic2');

const img3 = document.querySelector("#test3")
img3.src = localStorage.getItem('graphic3');

// Preview
const svg = document.querySelector("svg")

if(color.value == "red") {
    svg.classList.add("red")
}
if(color.value == "green") {
    svg.classList.add("green")
}
if(color.value == "blue") {
    svg.classList.add("blue")
}

const svg2 = document.querySelector("details:nth-of-type(2) svg")

if(color2.value == "red") {
    svg2.classList.add("red")
}
if(color2.value == "green") {
    svg2.classList.add("green")
}
if(color2.value == "blue") {
    svg2.classList.add("blue")
}

const svg3 = document.querySelector("details:nth-of-type(3) svg")

if(color3.value == "red") {
    svg3.classList.add("red")
}
if(color3.value == "green") {
    svg3.classList.add("green")
}
if(color3.value == "blue") {
    svg3.classList.add("blue")
}

const text2 = document.querySelector('text')
text2.textContent = localStorage.getItem("text")

const text4 = document.querySelector('details:nth-of-type(2) text')
text4.textContent = localStorage.getItem("text2")

const text6 = document.querySelector('details:nth-of-type(3) text')
text6.textContent = localStorage.getItem("text3")

const img4 = document.querySelector("#blah")
img4.src = localStorage.getItem('graphic')

const img5 = document.querySelector("#blah2")
img5.src = localStorage.getItem('graphic2')

const img6 = document.querySelector("#blah3")
img6.src = localStorage.getItem('graphic3')