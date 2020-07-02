var capture_screen;

function setup() {
  createCanvas(1280, 800);
  select("#startCapture").mouseClicked(startCapture);
  select("#stopCapture").mouseClicked(stopCapture);
}

function draw() {
  background(220);
  if( capture_screen ){
    image(capture_screen.image,0,0,width/2, height/2);
    filter(THRESHOLD);
    image(capture_screen.image,width/2,0,width/2, height/2);
    filter(INVERT)
    image(capture_screen.image,0,height/2,width/2, height/2);
    filter(POSTERIZE,3)
    image(capture_screen.image,width/2,height/2,width/2, height/2);
    filter(OPAQUE)
  }
}

function startCapture(){
  
  capture_screen = createScreenCapture(VIDEO);
  capture_screen.image.hide();
  
}


function stopCapture(){
 if( capture_screen ){
    let tracks = capture_screen.element.srcObject.getTracks();
    tracks.forEach(track => track.stop());        
  }
    capture_screen.element.srcObject = null;
    capture_screen = null;
}

