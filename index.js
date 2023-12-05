const myDiv = document.getElementById("myDiv");
let newColor = "";

function changeColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  console.log(red, green, blue);
  newColor = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = newColor;
  document.body.innerHTML = `<h2>${newColor}</h2>`;
}

setInterval(changeColor, 2000);
