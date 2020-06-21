const output=document.querySelector(".output");
const Player1=document.querySelector("#Player1");
const Player2=document.querySelector("#Player2");
const button=document.querySelector("button");

button.addEventListener("click", function(){
 
    let rolled=[roll(6),roll(6)];
    
    Player1.innerHTML=rolled[0];
    Player2.innerHTML=rolled[1];
    
    let temp;
    if(rolled[0] == rolled[1]) {temp="It's a Draw";}
    else if(rolled[0] > rolled[1]) {temp="Player 1 wins";}
    else {temp="Player 2 wins";}
    
    output.innerHTML=temp;
})

   function roll(num){
       let rNumber=Math.floor(Math.random()*num)+1;
       
       let n=9855 + rNumber; 
       
       let logo= rNumber + " " + "&#" + n + ";";
       return logo;
   }




 
