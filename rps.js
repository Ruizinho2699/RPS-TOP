function getComputerChoice(max) {
    let x = Math.floor(Math.random()*max);
    if (x == 1){
        return "ROCK";
    }
    else if (x == 2){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }

  }

  //console.log(getComputerChoice(3));

  function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors:");
    return choice.toUpperCase();
  
  }
  //console.log(getHumanChoice());

  let counterHuman = 0
  let counterComputer = 0
  //alert(humanScore);
  //alert(computerScore);
  let humanScore = counterHuman;
  let computerScore = counterComputer;

  function playRound(humanChoice, computerChoice){
    
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore = ++counterHuman;
        return "You win! Rock beats scissors! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "ROCK" && computerChoice === "PAPER"){
        computerScore = ++counterComputer;
        return "You lose! Paper beats rock! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "ROCK" && computerChoice === "ROCK"){
        return "It's a tie! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS"){
        return "It's a tie! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        humanScore = ++counterHuman;
        return "You win! Scissors beats paper! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        computerScore = ++counterComputer;
        return "You lose! Rock beats scissors! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        computerScore = ++counterComputer;
        return "You lose! Scissors beats paper! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "PAPER" && computerChoice === "PAPER"){
        return "It's a tie! You: " + humanScore + " Computer: " + computerScore;}

    else if (humanChoice === "PAPER" && computerChoice === "ROCK"){
        humanScore = ++counterHuman;
        return "You win! Paper beats rock! You: " + humanScore + " Computer: " + computerScore; 
  }
}


const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
  console.log(playRound("ROCK",getComputerChoice(3)));
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
  console.log(playRound("PAPER",getComputerChoice(3)));
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
  console.log(playRound("SCISSORS",getComputerChoice(3)));
});



