const container = document.querySelector(".container");

let number = 16;

function makeGrid (){
    for(let i = 0; i < number*number; i++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.style.cssText = `width: calc(640px/${number}); height: calc(640px/${number}); border: 1px solid lightgrey;`;
        div.addEventListener("mouseover", () => {
            let colorValueRed = Math.floor(Math.random()*256);
            let colorValueGreen = Math.floor(Math.random()*256);
            let colorValueBlue = Math.floor(Math.random()*256);
            div.style.backgroundColor = `rgb(${colorValueRed}, ${colorValueGreen}, ${colorValueBlue})`;
        } );
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
    number = prompt("Enter a number between 1 - 100 to generate your own custom grid.");
    number = Number(number);
    if(number < 1 || number > 100){
        return alert("Please enter a number between 1 and 100.")
    }
    deleteChild();
    makeGrid ();
});