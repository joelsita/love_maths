document.addEventListener("DOMContentLoaded", function(){
let buttons = document.getElementsByTagName("button");

  for  (let button of buttons){
    button.addEventListener("click", function (){
      if(this.getAttribute("data-tye") === "submit"){
        alert("you clicked submit");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`you clicked ${gameType}`);
      }
    })
  }

})

function runGame(){
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25)+ 1;
}

function checkAnswer(){
  
}

function calculateCorrectAnswer(){
  
}

function incrmentScore(){
  
}


function incrmentWrongAnswer(){
  
}

function displayAdditionQuestion(){
  
}

function displaySubtractQuestion(){
  
}

function displayMultiplyQuestion(){
  
}

function displayDivisionQuestion(){
  
}