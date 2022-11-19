draw_rect = "";
draw_circle = "";
var speechrec = window.webkitSpeechRecognition;
var Recognition = new speechrec();



function preload()
{

}

function draw()
{
    

    if( draw_rect == "set")
    {
        rect(x,y,width,height)
    }

    if( draw_circle == "set")
    {
        circle(x,y,diameter)
    }


}

function setup()
{
    canvas = createCanvas (800,500);


}

function start()
{
    document.getElementById("status").innerHTML = "SYSTEM IS LISTENING PLEASE SPEAK";
    Recognition.start();
}

Recognition.onresult = function(event)
{
    console.log(event);
    var result = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "YOU SAID -" + result;
    if(result == "rectangle")
    {
        draw_rect = "set"
        width = random(10,35);
        height = random(10,35);
        x = random( 0,800);
        y = random( 0,500);
    }
    
    if(result == "circle")
    {
        draw_circle = "set"
        diameter = random(10,35);
        x = random( 50,800);
        y = random( 50,500);
    }
}