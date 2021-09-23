song="";
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;

function preload(){
song=loadSound("music.mp3");
}


function setup(){
    canvas=createCanvas(600,500)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet Is Initialized")
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("leftWristX= "+leftWristX+" leftWristY= "+leftWristY);
        console.log("rightWristX= "+rightWristX+" rightWristY= "+rightWristY);
    }
}