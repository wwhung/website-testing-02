var btnChangeColor = document.getElementById("Change-random-color")

btnChangeColor.addEventListener("click", function(){
    document.body.style.background = randomColor();
})

function randomColor(){
    console.log(Math.floor(255 * Math.random()));
    // generate random integer between 0 and 255 --> Math.floor
    return `rgb(${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())})`
}