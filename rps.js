

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
  let humanScore = ++counterHuman;
  let computerScore = ++counterComputer; 
  //alert(humanScore);
  //alert(computerScore);

  function playRound(humanChoice, computerChoice){
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        return "You win! Rock beats scissors!";}
    else if (humanChoice === "ROCK" && computerChoice === "PAPER"){
        return "You lose! Paper beats rock!";}
    else if (humanChoice === "ROCK" && computerChoice === "ROCK"){
        return "It's a tie!";}
    else if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS"){
        return "It's a tie!";}
    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        return "You win! Scissors beats paper!";}
    else if (humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        return "You lose! Rock beats scissors!";}
    else if (humanChoice === "PAPER" && computerChoice === "SCISSORS"){
            return "You lose! Scissors beats paper!";}
    else if (humanChoice === "PAPER" && computerChoice === "PAPER"){
            return "It's a tie!";}
    else if (humanChoice === "PAPER" && computerChoice === "ROCK"){
            return "You win! Paper beats rock!"; 
  }
}

   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice(3); 
   console.log(playRound(humanSelection,computerSelection));

  