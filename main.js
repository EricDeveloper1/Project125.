leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(800, 500);
    canvas.position(700, 190);

    video = createCapture(VIDEO);
    video.size(600, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = Math.floor(leftWristX - rightWristX);
    console.log("leftWristX = "+ leftWristX +" rightWristX = "+ rightWristX);
}

function draw() {
    color = document.getElementById("text-color").value;
    background('#ab98ef');
    textSize(difference);
    fill(color);
    text("text", 180, 305);
}