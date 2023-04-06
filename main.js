x =0;
y=0;
screen_w=0;
screen_h=0
draw_apple="";
apple="";
speak_data="";
to_no=0;
function preLoad(){
    apple=loadImage("apple.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML= "The speech has been recognized as :  "+content;
    to_no=Number(content);
    if(Number.isInteger(to_no)){
        document.getElementById("status").innerHTML= "Started drawing apple ";
        draw_apple="set";
    }
    else{
        document.getElementById("status").innerHTML= "Speech is not recognised as a number ";
    }
}
function setup(){
    screen_w=window.innerWidth;
    screen_h=window.innerHeight;
    canvas = createCanvas(screen_w,screen_h-150);
    canvas.position(0,150)
}
function draw(){
    if(draw_apple == "set"){
        for(var i =1; i <= to_no; i++){
            x = Math.floor(Math.random() *  700);
            y = Math.floor(Math.random() *  400);
            image(apple, x, y, 50, 50);
        }
    }
        
    
}


x=Math.floor(Math.random() * 900);
y=Math.floor(Math.random() * 600);