    //adding a GIF to my grid

    let gif;

    function preload (){
    gif = loadtiImage ('assets/Giftransparent.gif');
    }

function setup() {
  //runs one time
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  //runs in a loop
  
  background('red');

    vars num = 50;
    vars sideLen = windowWidth/num;

    for (var y = 0; y < windowHeight; y = y +sideLen) {
      //loop to create a grid in the y direction

      for(var x = 0; x < windowWidth; x = x +sideLen) {
image (gif, x, y, sideLen, sideLen);        
      }
    }
  }

    function windowResized (){
      resizeCanvas (windowWidth, windowHeight);
}