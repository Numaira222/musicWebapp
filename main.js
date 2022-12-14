music_1 = "music1.mp3";
music_2 = "music2.mp3";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);


}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    music_1 = loadSound("music1.mp3");
    music_2 = loadSound("music2.mp3");

}
function modelLoaded(){
    console.log("Posenet has initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left wrist x = " + leftWristX + ", left wrist y = " + leftWristY);
        console.log("Right wrist x = " + rightWristX + ", right wrist y = " + rightWristY);
    }
}