console.log("linked")

imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }

// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

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