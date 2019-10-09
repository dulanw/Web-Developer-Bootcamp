
var NumGenerate = 6;

var squares = document.getElementsByClassName("colorpick");
var RGBDisplay = document.getElementById("RGBDisplay");

document.getElementById("Reset").addEventListener("click", function(){ GenerateSquares(NumGenerate) });

document.getElementById("easyBtn").addEventListener("click", SelectEasy);
document.getElementById("hardBtn").addEventListener("click", SelectHard);
document.getElementById("hardBtn").classList.add("selected");

function SelectEasy()
{
    NumGenerate = 3;
    GenerateSquares(NumGenerate);
    document.getElementById("easyBtn").classList.add("selected");
    document.getElementById("hardBtn").classList.remove("selected");
}

function SelectHard()
{
    NumGenerate = 6;
    GenerateSquares(NumGenerate);
    document.getElementById("easyBtn").classList.remove("selected");
    document.getElementById("hardBtn").classList.add("selected");
}

var CorrectColour;

//var button = document.getElementById("MyButton");
var message = document.getElementById("message");

GenerateSquares(NumGenerate);

function IsColourMatch()
{
    if (this.style.backgroundColor == CorrectColour)
    {
        message.textContent = "Correct";
        OnCorrectColour();
    }
    else
    {
        message.textContent = "Wrong! Try Again";
        this.style.backgroundColor = "#232323";
    }
}

function OnCorrectColour()
{
    for (var i = 0; i < NumGenerate; i++)
    {
        squares[i].style.backgroundColor = CorrectColour;
    }
}

function GenerateSquares(number)
{
    if (number > squares.length)
    {
        number = squares.length;
    }
    
    ResetSquares();

    var ColourSelect = Math.floor(Math.random() * number); 

    for (var i = 0; i < number; i++)
    {
        squares[i].addEventListener("click", IsColourMatch);

        var RanRGB = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        squares[i].style.backgroundColor = RanRGB;
    
        if (i == ColourSelect)
        {
            CorrectColour = RanRGB;
            RGBDisplay.textContent = RanRGB;
        }
    }
}

function ResetSquares()
{
    message.textContent = "";
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = "#232323";
    }
}