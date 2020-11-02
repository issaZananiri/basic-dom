const container = document.getElementById("container");
const boxesNum = 6;

const boxCreate = function (box) {
    box = document.createElement("div");
    box.classList.add("box");
    box.onmouseover = function () {
        
        box.style.backgroundColor += "#"+((1<<24)*Math.random()|0).toString(16);
    };
    container.appendChild(box);
};

for (let i = 0; i < boxesNum; i++) {
    boxCreate(boxesNum[i]);
}



