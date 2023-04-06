// console.log("linked")

// // Email validation
// // 1
// const form = document.querySelector('form:first-of-type');
// const email = document.getElementById('email');
// const errorEmail = document.getElementById('error');

// email.removeAttribute("required")

// form.addEventListener('submit', (e) => {
//   let messages = [];
//   if (email.value === '' || email.value == null) {
//     messages.push('Email is required');
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorEmail.innerText = messages.join(', ');
//   }
// });

// // 2
// const form2 = document.querySelector('details:nth-of-type(2) form');
// const email2 = document.getElementById('email2');
// const errorEmail2 = document.getElementById('error2');

// email2.removeAttribute("required")

// form2.addEventListener('submit', (e) => {
//   let messages = [];
//   if (email2.value === '' || email2.value == null) {
//     messages.push('Email is required');
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorEmail2.innerText = messages.join(', ');
//   }
// });

// // 3
// const form3 = document.querySelector('details:nth-of-type(3) form');
// const email3 = document.getElementById('email3');
// const errorEmail3 = document.getElementById('error3');

// email3.removeAttribute("required")

// form3.addEventListener('submit', (e) => {
//   let messages = [];
//   if (email3.value === '' || email3.value == null) {
//     messages.push('Email is required');
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorEmail3.innerText = messages.join(', ');
//   }
// });

// // input radio
// // 1
// const radiocolor = document.querySelectorAll('input[name="color"]')

// let findselectedcolor = () => {
//   let selected = document.querySelector('input[name="color"]:checked').value
//   localStorage.setItem("color", selected);
// }

// radiocolor.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedcolor)
// })

// findselectedcolor()

// const radiogender = document.querySelectorAll('input[name="gender"]')

// let findselectedgender = () => {
//   let selected = document.querySelector('input[name="gender"]:checked').value
//   localStorage.setItem("gender", selected);
// }

// radiogender.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedgender)
// })

// findselectedgender()

// const radiosize = document.querySelectorAll('input[name="size"]')

// let findselectedsize = () => {
//   let selected = document.querySelector('input[name="size"]:checked').value
//   localStorage.setItem("size", selected);
// }

// radiosize.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedsize)
// })

// findselectedsize()

// // 2
// const radiocolor2 = document.querySelectorAll('input[name="color2"]')

// let findselectedcolor2 = () => {
//   let selected = document.querySelector('input[name="color2"]:checked').value
//   localStorage.setItem("color2", selected);
// }

// radiocolor2.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedcolor2)
// })

// findselectedcolor2()

// const radiogender2 = document.querySelectorAll('input[name="gender2"]')

// let findselectedgender2 = () => {
//   let selected = document.querySelector('input[name="gender2"]:checked').value
//   localStorage.setItem("gender2", selected);
// }

// radiogender2.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedgender2)
// })

// findselectedgender2()

// const radiosize2 = document.querySelectorAll('input[name="size2"]')

// let findselectedsize2 = () => {
//   let selected = document.querySelector('input[name="size2"]:checked').value
//   localStorage.setItem("size2", selected);
// }

// radiosize2.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedsize2)
// })

// findselectedsize2()

// // 2
// const radiocolor3 = document.querySelectorAll('input[name="color3"]')

// let findselectedcolor3 = () => {
//   let selected = document.querySelector('input[name="color3"]:checked').value
//   localStorage.setItem("color3", selected);
// }

// radiocolor3.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedcolor3)
// })

// findselectedcolor3()

// const radiogender3 = document.querySelectorAll('input[name="gender3"]')

// let findselectedgender3 = () => {
//   let selected = document.querySelector('input[name="gender3"]:checked').value
//   localStorage.setItem("gender3", selected);
// }

// radiogender3.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedgender3)
// })

// findselectedgender3()

// const radiosize3 = document.querySelectorAll('input[name="size3"]')

// let findselectedsize3 = () => {
//   let selected = document.querySelector('input[name="size3"]:checked').value
//   localStorage.setItem("size3", selected);
// }

// radiosize3.forEach(radiobtn => {
//   radiobtn.addEventListener("change", findselectedsize3)
// })

// findselectedsize3()

// // input text
// // 1
// const textdata = document.querySelector('input[name="text"]')
// const emaildata = document.querySelector('input[name="email"]')

// form.addEventListener('submit', store, store2, store3)
// function store() {
//   localStorage.setItem("email", emaildata.value);
//   localStorage.setItem("text", textdata.value);
// }

// // 2
// const textdata2 = document.querySelector('input[name="text2"]')
// const emaildata2 = document.querySelector('input[name="email2"]')

// form2.addEventListener('submit', store2, store, store3)
// function store2() {
//   localStorage.setItem("email2", emaildata2.value);
//   localStorage.setItem("text2", textdata2.value);
// }

// // 3
// const textdata3 = document.querySelector('input[name="text3"]')
// const emaildata3 = document.querySelector('input[name="email3"]')

// form3.addEventListener('submit', store3, store2, store)
// function store3() {
//   localStorage.setItem("email3", emaildata3.value);
//   localStorage.setItem("text3", textdata3.value);
// }

// // input file
// // 1
// const inputEl = document.getElementById('imgInp');

// inputEl.addEventListener('change' , () => {
//     const fr = new FileReader();

//     fr.readAsDataURL(inputEl.files[0]);

//     fr.addEventListener('load', () => {
//         const url = fr.result
        
//         localStorage.setItem('graphic', url)
//     })
// })

// // 2
// const inputEl2 = document.getElementById('imgInp2');

// inputEl2.addEventListener('change' , () => {
//     const fr2 = new FileReader();

//     fr2.readAsDataURL(inputEl2.files[0]);

//     fr2.addEventListener('load', () => {
//         const url2 = fr2.result
        
//         localStorage.setItem('graphic2', url2)
//     })
// })

// // 3
// const inputEl3 = document.getElementById('imgInp3');

// inputEl3.addEventListener('change' , () => {
//     const fr3 = new FileReader();

//     fr3.readAsDataURL(inputEl3.files[0]);

//     fr3.addEventListener('load', () => {
//         const url3 = fr3.result
        
//         localStorage.setItem('graphic3', url3)
//     })
// })

// // color shirt
// // 1
// const red = document.querySelector("#red")
// const green = document.querySelector("#green")
// const blue = document.querySelector("#blue")
// const svg = document.querySelector("svg")

// red.addEventListener("click", () => {
//   svg.classList.add("red")
//   svg.classList.remove("green")
//   svg.classList.remove("blue")
// })

// green.addEventListener("click", () => {
//   svg.classList.add("green")
//   svg.classList.remove("red")
//   svg.classList.remove("blue")
// })

// blue.addEventListener("click", () => {
//   svg.classList.add("blue")
//   svg.classList.remove("green")
//   svg.classList.remove("red")
// })

// // 2
// const red2 = document.querySelector("#red2")
// const green2 = document.querySelector("#green2")
// const blue2 = document.querySelector("#blue2")
// const svg2 = document.querySelector("details:nth-of-type(2) svg")

// red2.addEventListener("click", () => {
//   svg2.classList.add("red")
//   svg2.classList.remove("green")
//   svg2.classList.remove("blue")
// })

// green2.addEventListener("click", () => {
//   svg2.classList.add("green")
//   svg2.classList.remove("red")
//   svg2.classList.remove("blue")
// })

// blue2.addEventListener("click", () => {
//   svg2.classList.add("blue")
//   svg2.classList.remove("green")
//   svg2.classList.remove("red")
// })

// // 3
// const red3 = document.querySelector("#red3")
// const green3 = document.querySelector("#green3")
// const blue3 = document.querySelector("#blue3")
// const svg3 = document.querySelector("details:nth-of-type(3) svg")

// red3.addEventListener("click", () => {
//   svg3.classList.add("red")
//   svg3.classList.remove("green")
//   svg3.classList.remove("blue")
// })

// green3.addEventListener("click", () => {
//   svg3.classList.add("green")
//   svg3.classList.remove("red")
//   svg3.classList.remove("blue")
// })

// blue3.addEventListener("click", () => {
//   svg3.classList.add("blue")
//   svg3.classList.remove("green")
//   svg3.classList.remove("red")
// })

// // preview file

// imgInp.onchange = evt => {
//   const [file] = imgInp.files
//   if (file) {
//     blah.src = URL.createObjectURL(file)
//     localStorage.setItem("file", blah.src);
//   }
// }

// imgInp2.onchange = evt => {
//   const [file] = imgInp2.files
//   if (file) {
//     blah2.src = URL.createObjectURL(file)
//     localStorage.setItem("file2", blah2.src);
//   }
// }

// imgInp3.onchange = evt => {
//   const [file] = imgInp3.files
//   if (file) {
//     blah3.src = URL.createObjectURL(file)
//     localStorage.setItem("file3", blah3.src);
//   }
// }

// // preview text
// // 1
// const text = document.querySelector('text')

// form.text.addEventListener("keyup", myFunction);

// function myFunction() {
//   let x = document.querySelector('input[name="text"]').value;
//   text.innerHTML = x;
// }

// // 2
// const text2 = document.querySelector('details:nth-of-type(2) text')

// form2.text2.addEventListener("keyup", myFunction2);

// function myFunction2() {
//   let x = document.querySelector('input[name="text2"]').value;
//   text2.innerHTML = x;
// }

// // 3
// const text3 = document.querySelector('details:nth-of-type(3) text')

// form3.text3.addEventListener("keyup", myFunction3);

// function myFunction3() {
//   let x = document.querySelector('input[name="text3"]').value;
//   text3.innerHTML = x;
// }

// // Drag
// // 1
// dragElement(document.getElementById("shirt"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// // 2
// dragElement2(document.getElementById("shirt2"));

// function dragElement2(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// // 3
// dragElement3(document.getElementById("shirt3"));

// function dragElement3(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// // Camera

// const scanner = document.querySelector("#scanner")
// const startbutton = document.querySelector('#start')
// const stopbutton = document.querySelector('#stop')

// startbutton.addEventListener('click', enableCamera)
// stopbutton.addEventListener('click', disableCamera)

// function enableCamera() {
//   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       const constraints = { 
//       video: true,
//       audio: false
//       }
          
//       navigator.mediaDevices.getUserMedia({
//           audio: false, 
//           video: {
//               facingMode:'environment'
//           }
//       })
//       .then(stream => video.srcObject = stream);

//       scanner.classList.toggle("hide");
//       startbutton.classList.toggle("hide");
//       stopbutton.classList.toggle("hide");
//   }
// }


// function disableCamera() {
//   const mediaStream = video.srcObject;
//   const tracks = mediaStream.getTracks();
//   tracks.forEach(track => track.stop())

//   scanner.classList.toggle("hide");
//   startbutton.classList.toggle("hide");
//   stopbutton.classList.toggle("hide");
// }