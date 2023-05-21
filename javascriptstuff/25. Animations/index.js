

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if (x >= 200 || y >=200 ||scaleX <= 0||scaleY <= 0){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            degrees+=8;
            scaleX-=0.01;
            scaleY-=0.01
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";

        }
    }
}