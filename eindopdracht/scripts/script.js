console.log("linked")

imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }

const form = document.querySelector('form');
const email = document.getElementById('email');
const errorEmail = document.getElementById('error');

email.removeAttribute("required")

form.addEventListener('submit', (e) => {
  let messages = [];
  if (email.value === '' || email.value == null) {
    messages.push('Email is required');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorEmail.innerText = messages.join(', ');
  }
});

const graphic = document.querySelector('image')
const text = document.querySelector('text')

form.text.addEventListener("keyup", myFunction);

function myFunction() {
  let x = document.getElementById("text").value;
  text.innerHTML = x;
}

dragElement(document.getElementById("shirt"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const red = document.querySelector("#red")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")
const svg = document.querySelector("svg")

red.addEventListener("click", () => {
  svg.classList.add("red")
  svg.classList.remove("green")
  svg.classList.remove("blue")
})

green.addEventListener("click", () => {
  svg.classList.add("green")
  svg.classList.remove("red")
  svg.classList.remove("blue")
})

blue.addEventListener("click", () => {
  svg.classList.add("blue")
  svg.classList.remove("green")
  svg.classList.remove("red")
})

    // const scanner = document.querySelector("#scanner")
    // const startbutton = document.querySelector('#start')
    // const stopbutton = document.querySelector('#stop')
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //     const constraints = { 
    //     video: true,
    //     audio: false
    //     }

    //     navigator.mediaDevices.getUserMedia({
    //         audio: false, 
    //         video: {
    //             facingMode:'environment'
    //         }
    //     })
    //     .then(stream => video.srcObject = stream);

    //     scanner.classList.toggle("hide");
    //     startbutton.classList.toggle("hide");
    //     stopbutton.classList.toggle("hide");
    //   }

const cameraOn = document.querySelector('#start')
const cameraOff = document.querySelector('#stop')

cameraOn.addEventListener('click', enableCamera)
cameraOff.addEventListener('click', disableCamera)

function enableCamera() {
  const scanner = document.querySelector("#scanner")
  const startbutton = document.querySelector('#start')
  const stopbutton = document.querySelector('#stop')
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = { 
      video: true,
      audio: false
      }
          
      navigator.mediaDevices.getUserMedia({
          audio: false, 
          video: {
              facingMode:'environment'
          }
      })
      .then(stream => video.srcObject = stream);

      scanner.classList.toggle("hide");
      startbutton.classList.toggle("hide");
      stopbutton.classList.toggle("hide");
  }
}


function disableCamera() {
  const scanner = document.querySelector("#scanner")
  const startbutton = document.querySelector('#start')
  const stopbutton = document.querySelector('#stop')
  
  const mediaStream = video.srcObject;
  const tracks = mediaStream.getTracks();
  tracks.forEach(track => track.stop())

  scanner.classList.toggle("hide");
  startbutton.classList.toggle("hide");
  stopbutton.classList.toggle("hide");
}