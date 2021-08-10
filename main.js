function setup(){
    canvas = creatCanvas(640 , 480);
    canvas.position(110, 250);
    video = creteCapture(VIDEO);
    video.hide();
    tint-color =  "";
}

function draw() {
    Image(video, 230, 150, 220, 200);
    tint(tint-color);
    
    Fill(255, 0, 0);
    stroke(0 , 120, 0);
    rect(90, 40, 460, 20);
}