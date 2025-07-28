 let gameSeq=[];
 let userSeq=[];
 let btns=["red","green","yellow","blue"];
 let started=false;
 let level = 0;
 let h2=document.querySelector("h2");
 document.addEventListener("keypress", function(){
    if (started==false){
      started=true;
    }
    levelUp();
 });

 function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
 }

 function levelUp(){
   userSeq=[];
   level++
   h2.innerText=`Level ${level}`;
   let randIndx=Math.floor(Math.random()*4);
   let randColor=btns[randIndx];
   let randBtn=document.querySelector(`.${randColor}`);
 
   gameSeq.push(randColor);
   console.log(gameSeq);
   buttonFlash(randBtn);
 }

 function checkAns(indx){
  if (userSeq[indx]==gameSeq[indx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }
  else{
    h2.innerHTML=`Game over!Your Score Was <b>${level}</b> <br>Press any key to restart.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
  }
 }

 function btnPress(){
  
  let btn=this;
  userFlash(btn);
  
  let userColor=btn.getAttribute("id");
  
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
 }
 let allBtns=document.querySelectorAll(".box")
 for (btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
 function reset(){
  gameSeq=[];
  userSeq=[];
  started=false;
  level = 0;
 }