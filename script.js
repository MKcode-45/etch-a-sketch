const container = document.querySelector(".container");

let number = 16;

function makeGrid (){
    for(let i = 0; i < number*number; i++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.style.cssText = "width: 55px; height: 52px; border: 1px solid red;";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue";
        } )
    }
}

makeGrid ();

function deleteChild() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}


const button = document.querySelector("#reset");
button.addEventListener("click", () => {
    number = prompt("Enter a number between 1 - 100.");
    number = Number(number);
    deleteChild();
    makeGrid ();
});




