X=Math.random()*10;
Y=Math.random()*10;
R=Math.random()*10;
function preload(){

}
function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw(){
    image(video, 0,0,640, 480);
    tint(tint_color);
    circle(X, Y, R);
    rect(X,Y,50,60);
}

function take_snapshot(){
    save('abc.png');
}

function filter_tint(){
    tint_color= document.getElementById("color_name").value;
}