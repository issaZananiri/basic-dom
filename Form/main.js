const container = document.getElementById("container");
const biday = document.getElementById("birthdayDate");
const form = document.getElementById("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const salary = document.getElementById("salary");

const missing = function () {
    if(name.value.length < 2) {
        let missing = document.createElement("p");
        form.appendChild(missing);
        missing.classList.add("red");
        missing.innerText = "Please fill your name";
         } else if (phone.value === "") {
        let missing = document.createElement("p");
        form.appendChild(missing);
        missing.classList.add("red");
        missing.innerText = "Please fill your phone number";
    } else if (biday.value === "") {
        let missing = document.createElement("p");
        form.appendChild(missing);
        missing.classList.add("red");
        missing.innerText = "Please fill your birthday";
    } else if (salary.value < 10000 || salary.value > 16000) {
        let missing = document.createElement("p");
        form.appendChild(missing);
        missing.classList.add("red");
        missing.innerText = "Please fill your desired salary,Or fill the number between 10000 and 16000"
  
   
    } else {
        container.style.display = "none";
    }
};
const validate = function () {
    document.body.innerHTML = '';
    window.alert("Welcome"+name);
};
