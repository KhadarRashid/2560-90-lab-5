// Find canvas, create context
let canvas = document.querySelector("#canvas")
let context = canvas.getContext("2d");

// Find input box and disable it untill canvas is ready
let input = document.querySelector("#image_text");
input.disabled = true;

// Draw the image - create the image and set the source
// Add callback to know when the image is loaded and ready
// so it can draw it to the canvas and enable the input
let image = new Image();
image.src = "pug.jpg";

image.addEventListener("load", function() {
    context.drawImage(image, 0, 0);
    input.disabled = false;
})


// Add event listener to input 
input.addEventListener("input", function(){
    // Read the data typed in the input
    // "This" is the HTML element this function is called for
    let text = this.value;

    context.drawImage(image, 0, 0);
    context.font = "40px Arial"; // setting font
    context.fillStyle = "Black"; // setting color
    context.fillText(text, 30, 100);
})