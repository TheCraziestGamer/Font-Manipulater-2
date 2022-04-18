function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(550, 550);
    canvas.position(900, 150);
    video.position(300,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }

}

function modelLoaded() {
    console.log('PoseNet has been initialised');
}

function draw() {
    background('#0080ff');
}
