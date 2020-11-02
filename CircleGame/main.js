
const ball = document.getElementById("block");
const moveRight = function () {
    let current = parseInt(ball.style.left) || 0;
    current += 10;
    ball.style.left = current + "px";
};
const moveLeft = function () {
    let current = parseInt(ball.style.left) || 0;
    current -= 10;
    ball.style.left = current + "px";
};
const moveUp = function () {
    let current = parseInt(ball.style.top) || 0;
    current -= 10;
    ball.style.top = current + "px";
};
const moveDown = function () {
    let current = parseInt(ball.style.top) || 0;
    current += 10;
    ball.style.top = current + "px";
};

