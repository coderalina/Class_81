canvas=document.getElementById("myCanvas");
can=canvas.getContext("2d");
color="red";

can.beginPath();
can.strokeStyle=color;
can.lineWidth =  2;
can.arc( 200 ,200,40,0,2*Math.PI);
can.stroke();

canvas.addEventListener("mousedown",my_Canvas);
function my_Canvas(e){
    mouse_x = e.clientX - canvas.offsetLeft; 
    mouse_y = e.clientY - canvas.offsetTop; 
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
     circle(mouse_x , mouse_y);


}

function circle(mouse_x , mouse_y)
{color="red"
can.beginPath();
can.strokeStyle=color;
can.lineWidth=2;
can.arc(200,200,40,0,2*Math.PI);
can.stroke();

}