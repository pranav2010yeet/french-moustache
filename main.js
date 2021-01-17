nosex=0
nosey=0


function preload(){
moustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){

    canvas=createCanvas (400,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.size (400,400)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}

function draw(){
image(video,0,0,400,400)

image(moustache,nosex,nosey,50,40)
}

function takephoto(){

    save("pranav.png")
}

function modelloaded(){
    console.log("model has loaded")
}

function gotposes(results){

    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x-15
        nosey=results[0].pose.nose.y
    }

}