console.log("challenge1.js running");

let button2 = document.querySelector(".clickButton");
console.log(button2);

let img = document.querySelector("#image");
console.log(img);

button2.addEventListener("click", function(event){
  img.src = ("debugging.gif");
})



