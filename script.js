let RGB_R
let RGB_G
let RGB_B

let tag = document.querySelector("div")

tag.style.width = "40%"
tag.style.height = "30vh"
tag.style.backgroundColor = "Black"

const criar = document.createElement("p")

criar.innerText = "rbg(0,0,0)"

let word = document.querySelector("section").appendChild(criar)

function MudarRGB(){
    RGB_R = document.getElementById("RGB_R").value
    RGB_G = document.getElementById("RGB_G").value
    RGB_B = document.getElementById("RGB_B").value
    tag.style.backgroundColor = `rgb(${RGB_R}, ${RGB_G}, ${RGB_B})`
    criar.innerText = `${tag.style.backgroundColor}`
}


