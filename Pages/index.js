

//button text
const addText = document.querySelector(".web-button");
addText.innerText = "Web Developer";

//add class 
let addClass = document.getElementById("apps");
addClass.classList.add("apps-tab");


//onclick event add innerText
const learnMore = (e) => {
    confirm("Do you want learn more??");
    let line = document.getElementById("paragraph");
    line.innerHTML = `<h4>Lorem ipsum dolor sit, amet consectetur</h4>`;
    e.preventDefault();
}

//change text and show Cv section
const downloadCVBtn = () => {
    let text = document.querySelector(".para");
    text.innerHTML= `<h4>Here you want to download CV?</h4>`;
    let file = document.getElementById("Opencv");   
    file.style.display = "block";
}