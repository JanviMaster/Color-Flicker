const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
    
    let computedColor = generateColor();
    document.body.style.backgroundColor = computedColor;
    color.textContent = computedColor;
});

const generateColor = () => {
    let res = "#";
    for (let i = 0; i < 6; i++) {
        res += hex[Math.floor(Math.random() * hex.length)];
    }
    return res;
};

