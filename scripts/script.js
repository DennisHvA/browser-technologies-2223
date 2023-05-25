const path = window.location.pathname;
console.log(path)

const form = document.querySelector('form');
const submitButton = form.querySelector('input[type="submit"]');
const inputs = form.querySelectorAll('input[type="text"]');
const shirtimg = document.querySelector('article > img')

const shirtcolor = localStorage.getItem(`${path}-color`)

const svg = document.querySelector('main svg')

switch (path) {
    case "/":
        break;
    case "/design.html":
    case "/design2.html":
    case "/design3.html":
        
        // send data to local storage
        const text = form.querySelector('input[type="text"]');
        console.log(text)
        const fileName = form.querySelector('input[type="file"]');

        submitButton.addEventListener('click', () => {
            const color = form.querySelector('input[name="color"]:checked');
            localStorage.setItem(`${path}-color`, color.value);
            localStorage.setItem(`${path}-text`, text.value);
            localStorage.setItem(`${path}-img`, fileName.value.split('\\').pop());

            const fr = new FileReader();
            fr.readAsDataURL(fileName.files[0]);
            fr.addEventListener('load', () => {
                const url = fr.result
                localStorage.setItem(`${path}-fileNamedata`, url);
            })

            shirtcolor = color.value;
        });

        // preview
        fileName.onchange = evt => {
            const [file] = fileName.files
            if (file) {
                const img = document.querySelector('img')
                img.src = URL.createObjectURL(file)
            }
        }

        const previewText = document.querySelector('main > article > p')

        console.log(form.text)
        form.text.addEventListener("keyup", () => {
            let x = text.value;
            previewText.innerHTML = x;
        });

        var radioButtons = document.querySelectorAll('input[name="color"]');
        var elementToColorize = document.querySelector("main svg");

        function updateColorClass(event) {
            var selectedColor = event.target.value;
            elementToColorize.classList.remove("red", "green", "blue");
            elementToColorize.classList.add(selectedColor);
        }

        radioButtons.forEach(function(radioButton) {
            console.log('test')
            radioButton.addEventListener('change', updateColorClass);
        });

        // get data from local storage
        if(shirtcolor == "red") {
            const red = document.querySelector('input[value="red"]')
            red.checked = true
            svg.classList.add("red")
        }
        if(shirtcolor == "green") {
            const green = document.querySelector('input[value="green"]')
            green.checked = true
            svg.classList.add("green")
        }
        if(shirtcolor == "blue") {
            const blue = document.querySelector('input[value="blue"]')
            blue.checked = true
            console.log(blue)
            svg.classList.add("blue")
        }

        shirtimg.src = localStorage.getItem(`${path}-fileNamedata`);
        previewText.innerHTML = localStorage.getItem(`${path}-text`);

        inputs.forEach(input => {
            const storedValue = localStorage.getItem(`${path}-${input.name}`);
            if (storedValue) {
            input.value = storedValue;
            }
        });
        break;
    case "/overview.html":

        const shirttext = document.querySelector('main > section > section:first-of-type > article > p')

        shirttext.innerHTML = localStorage.getItem(`/design.html-text`)

        if(localStorage.getItem(`/design.html-color`) == "red") {
            svg.style.fill = "var(--color-red)"
        }

        if(localStorage.getItem(`/design.html-color`) == "green") {
            svg.style.fill = "var(--color-green)"
        }

        if(localStorage.getItem(`/design.html-color`) == "blue") {
            svg.style.fill = "var(--color-blue)"
        }
        
        shirtimg.src = localStorage.getItem(`/design.html-fileNamedata`)

        inputs.forEach(input => {
            const storedValue = localStorage.getItem(`/design.html-${input.name}`);
            if (storedValue) {
            input.value = storedValue;
            }
        });

        // -

        const shirttext2 = document.querySelector('main > section > section:nth-of-type(2) > article > p')

        shirttext2.innerHTML = localStorage.getItem(`/design2.html-text`)

        const svg2 = document.querySelector('main > section > section:nth-of-type(2) > article > svg')

        if(localStorage.getItem(`/design2.html-color`) == "red") {
            svg2.style.fill = "var(--color-red)"
        }

        if(localStorage.getItem(`/design2.html-color`) == "green") {
            svg2.style.fill = "var(--color-green)"
        }

        if(localStorage.getItem(`/design2.html-color`) == "blue") {
            svg2.style.fill = "var(--color-blue)"
        }

        const shirtimg2 = document.querySelector('main > section > section:nth-of-type(2) > article > img')
        
        shirtimg2.src = localStorage.getItem(`/design2.html-fileNamedata`)

        const form2 = document.querySelector('main > section > section:nth-of-type(2) form');
        const inputs2 = form2.querySelectorAll('input[type="text"]');
        inputs2.forEach(input => {
            const storedValue = localStorage.getItem(`/design2.html-${input.name}`); 
            if (storedValue) {
            input.value = storedValue;
            }
        });

        // -

        const shirttext3 = document.querySelector('main > section > section:nth-of-type(3) > article > p')

        shirttext3.innerHTML = localStorage.getItem(`/design3.html-text`)

        const svg3 = document.querySelector('main > section > section:nth-of-type(3) > article > svg')

        if(localStorage.getItem(`/design3.html-color`) == "red") {
            svg3.style.fill = "var(--color-red)"
        }

        if(localStorage.getItem(`/design3.html-color`) == "green") {
            svg3.style.fill = "var(--color-green)"
        }

        if(localStorage.getItem(`/design3.html-color`) == "blue") {
            svg3.style.fill = "var(--color-blue)"
        }

        const shirtimg3 = document.querySelector('main > section > section:nth-of-type(3) > article > img')
        
        shirtimg3.src = localStorage.getItem(`/design3.html-fileNamedata`)

        const form3 = document.querySelector('main > section > section:nth-of-type(3) form');
        const inputs3 = form3.querySelectorAll('input[type="text"]');
        inputs3.forEach(input => {
            const storedValue = localStorage.getItem(`/design3.html-${input.name}`);
            if (storedValue) {
            input.value = storedValue;
            }
        });
        
        // amount of shirts
        const numbers = document.querySelectorAll('input[type="number"]');
        numbers.forEach((number, index) => {
        number.addEventListener('input', function(event) {
            const inputValue = event.target.value;
            localStorage.setItem(`amount${index}`, inputValue);
        });
        number.value = localStorage.getItem(`amount${index}`);
        });

        break;
    case "/info.html":
        const email = form.querySelector('input[name="email"]');
        const gender = form.querySelector('input[name="gender"]:checked');
        const size = form.querySelector('input[name="size"]:checked');
        const errorEmail = form.querySelector('p');
        const infogender = localStorage.getItem("gender")


        email.removeAttribute("required")

        form.addEventListener('submit', (e) => {
        let messages = [];
        if (email.value === '' || email.value == null) {
            messages.push('Email is required');
        }

        if (messages.length > 0) {
            e.preventDefault();
            errorEmail.innerText = messages.join(', ');
            errorEmail.style.display = "block";
            email.style.border = "var(--color-red) solid 3px";
        }
        });

        submitButton.addEventListener('click', () => {
            localStorage.setItem(email.name, email.value);
            localStorage.setItem(gender.name, gender.value);
            localStorage.setItem(size.name, size.value);
        });

        inputs.forEach(input => {
            const storedValue = localStorage.getItem(input.name);
            if (storedValue) {
            input.value = storedValue;
            }
        });

        if(infogender == "Male") {
            const male = document.querySelector('input[value="Male"')
            male.checked = true
        }
        if(infogender == "Female") {
            const female = document.querySelector('input[value="Female"')
            female.checked = true
        }

        break
    default:
}