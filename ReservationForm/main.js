const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
};
const input = document.getElementById("input");
const buttonCheck = document.getElementById("check");
const label = document.getElementById("label");
const p = document.createElement("p");
label.appendChild(p);
const check = function () {
    let inputValue = input.value.toLowerCase();
    if (reservations[inputValue]) {
        if (!(reservations[inputValue].claimed)) {
            p.innerHTML = "Welcome " + inputValue;
        } else {
            p.innerHTML = "Hmm, someone already claimed your reservation";
        }
    } else {
        p.innerHTML =  inputValue + " There's nothing under your name";
    }
};