const options = document.querySelector("p")

console.log(options)
const input = document.createElement("input")
input.type = "checkbox"
options.appendChild(input)

for(let i = 0 ; i < options.length; i++){
options[i].style.color = "green"

 
}
