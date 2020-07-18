var numsquares = 6;
var colors = generateRandomColor(numsquares);

var squares = document.querySelectorAll(".square");
var picked = document.querySelector("#picked");
var display = document.querySelector("#display");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var pickedColor = pickColor();
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var mode = document.querySelectorAll(".mode");

for(var i=0 ; i<mode.length; i++)
{
    mode[i].addEventListener("click", function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy")
            numsquares = 3;
        else
            numsquares = 6;
        resetBut();
        
    });
}

function resetBut(){
    colors = generateRandomColor(numsquares);
    pickedColor = pickColor();
    picked.textContent = pickedColor;
    this.textContent = "New Colors";
    display.textContent = "";
    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
            else
            squares[i].style.display = "none";
    }
        h1.style.backgroundColor = "steelblue";
}

picked.textContent = pickedColor;   
reset.addEventListener("click", function(){
    resetBut();
});
for(var i=0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        
    if(pickedColor === clickedColor){
        display.textContent = "correct";
        allColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        reset.textContent = "Play Again"
    }
    else{
        this.style.backgroundColor = "#232323";
        display.textContent = "try again";
    }
    });
}

function allColor(color){
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i = 0;i<num;i++){
        arr.push(RandomColor());
    }
    return arr;
}

function RandomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}