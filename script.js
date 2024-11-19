const container = document.querySelector(".container");
let number = 16;

for(let i = 0; i < number*number; i++){
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.cssText = "width: 55px; height: 52px; border: 1px solid red;"
}

