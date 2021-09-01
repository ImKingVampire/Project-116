headX=0;
headY=0;


function preload(){
 hat=loadImage("circledHat.jpg")  
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        headX = results[0].pose.leftEar.x;
        headY = results[0].pose.leftEar.y;
        console.log("ear x =" + results[0].pose.leftEar.x);
        console.log("ear y =" + results[0].pose.leftEar.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(hat,headX,headY,100,100);
}

function take_snapshot(){
    save("youWithaHAT");
}