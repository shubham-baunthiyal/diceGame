var num1 = Math.ceil(Math.random()*6);
var num2 = Math.ceil(Math.random()*6);
console.log("left-dice -> "+num1);
console.log("left-dice -> "+num2);

function dicePattern(num, dice){
  if(num===1){
    document.querySelector(dice+".d1").style.visibility="hidden";
    document.querySelector(dice+".d2").style.visibility="hidden";
    document.querySelector(dice+".d3").style.visibility="hidden";
    document.querySelector(dice+".d4").style.visibility="hidden";
    document.querySelector(dice+".d5").style.visibility="hidden";
    document.querySelector(dice+".d6").style.visibility="hidden";
    document.querySelector(dice+".d7").style.visibility="visible";
  }
  else if(num===2){
    document.querySelector(dice+".d1").style.visibility="visible";
    document.querySelector(dice+".d2").style.visibility="hidden";
    document.querySelector(dice+".d3").style.visibility="hidden";
    document.querySelector(dice+".d4").style.visibility="hidden";
    document.querySelector(dice+".d5").style.visibility="hidden";
    document.querySelector(dice+".d6").style.visibility="visible";
    document.querySelector(dice+".d7").style.visibility="hidden";
  }
  else if(num===3){
    document.querySelector(dice+".d1").style.visibility="visible";
    document.querySelector(dice+".d2").style.visibility="hidden";
    document.querySelector(dice+".d3").style.visibility="hidden";
    document.querySelector(dice+".d4").style.visibility="hidden";
    document.querySelector(dice+".d5").style.visibility="hidden";
    document.querySelector(dice+".d6").style.visibility="visible";
    document.querySelector(dice+".d7").style.visibility="visible";
  }
  else if(num===4){
    document.querySelector(dice+".d1").style.visibility="visible";
    document.querySelector(dice+".d2").style.visibility="hidden";
    document.querySelector(dice+".d3").style.visibility="visible";
    document.querySelector(dice+".d4").style.visibility="visible";
    document.querySelector(dice+".d5").style.visibility="hidden";
    document.querySelector(dice+".d6").style.visibility="visible";
    document.querySelector(dice+".d7").style.visibility="hidden";
  }
  else if(num===5){
    document.querySelector(dice+".d1").style.visibility="visible";
    document.querySelector(dice+".d2").style.visibility="hidden";
    document.querySelector(dice+".d3").style.visibility="visible";
    document.querySelector(dice+".d4").style.visibility="visible";
    document.querySelector(dice+".d5").style.visibility="hidden";
    document.querySelector(dice+".d6").style.visibility="visible";
    document.querySelector(dice+".d7").style.visibility="visible";
  }
  else if(num===6){
    document.querySelector(dice+".d1").style.visibility="visible";
    document.querySelector(dice+".d2").style.visibility="visible";
    document.querySelector(dice+".d3").style.visibility="visible";
    document.querySelector(dice+".d4").style.visibility="visible";
    document.querySelector(dice+".d5").style.visibility="visible";
    document.querySelector(dice+".d6").style.visibility="visible";
    document.querySelector(dice+".d7").style.visibility="hidden";
  }
}

dicePattern(num1, ".left-dice ");
dicePattern(num2, ".right-dice ");

if(num1 > num2){
  document.querySelector(".result").innerHTML="Player 1 Wins";
}
else if(num1 < num2){
  document.querySelector(".result").innerHTML="Player 2 Wins";
}
else{
  document.querySelector(".result").innerHTML="It is a Tie";
}
