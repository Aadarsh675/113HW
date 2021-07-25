function preload() {
    camera_mockup = loadImage("https://i.postimg.cc/qqVftPwQ/recording.png");
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(150, 300);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
}
function draw() {
    image(video, 0, 0, 500, 500);
    image(camera_mockup, 0, 0, 500, 550);
}
function take_snapshot() {
    save("capture.png");
}