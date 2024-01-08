const button = document.querySelector("button");


function random(max) {
    return Math.floor(Math.random() * max) + 1;
}

button.onclick = () => {
    button.style.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}