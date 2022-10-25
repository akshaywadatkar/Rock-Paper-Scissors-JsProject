const botChoice = document.getElementById("bot-choice")
const yourChoice = document.getElementById("your-choice")
const result = document.getElementById("result")
const posschoice = document.querySelectorAll('button')
let userchoice;
let compChoice;
let finalResult;


posschoice.forEach(posschoice=>posschoice.addEventListener('click',(e)=>{
userchoice = e.target.id;
yourChoice.innerHTML = userchoice;
 generatebotchoice();
 getResult();
}))

function generatebotchoice () {
    const randomnumber = Math.floor(Math.random()*3)+1;
    console.log(randomnumber);
    if(randomnumber === 1){
        compChoice = "rock";
    }else if(randomnumber === 2){
        compChoice = "scissors";
    }else if(randomnumber === 3){
        compChoice = "paper";
    }
    botChoice.innerHTML = compChoice;
}


function getResult(){
    if (compChoice === userchoice) {
        finalResult = 'its a draw!'
      }
      if (compChoice === 'rock' && userchoice === "paper") {
        finalResult = 'you win!'
      }
      if (compChoice === 'rock' && userchoice === "scissors") {
        finalResult = 'you lost!'
      }
      if (compChoice === 'paper' && userchoice === "scissors") {
        finalResult = 'you win!'
      }
      if (compChoice === 'paper' && userchoice === "rock") {
        finalResult = 'you lose!'
      }
      if (compChoice === 'scissors' && userchoice === "rock") {
        finalResult = 'you win!'
      }
      if (compChoice === 'scissors' && userchoice === "paper") {
        finalResult = 'you lose!'
      }
      result.innerHTML = finalResult;


}