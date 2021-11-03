function setup(){
    canvas = createCanvas(550,550);
   canvas.position(560,150);
   video=createCapture(VIDEO);
   video.size(550,550);
   var posenet=ml5.poseNet(video,modelloaded);
   posenet.on('pose',gotposes);
}

function draw(){
    background("grey");
}

function modelloaded(){
    console.log("PoseNet has been loaded");
}

function gotposes(results,error){
if(results.length>0){
    console.log(results);
    
}
}