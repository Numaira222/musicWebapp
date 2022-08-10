music_1 = "music1.mp3";
music_2 = "music2.mp3";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();


}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    music_1 = loadSound("music1.mp3");
    music_2 = loadSound("music2.mp3");

}
