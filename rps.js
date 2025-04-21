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
    let choice = prompt("Choose Rock, Paper or Scissors:")
    finalChoice = choice.toUpperCase();
    if (finalChoice === "ROCK" || finalChoice === "SCISSORS" || finalChoice === "PAPER"){
    return finalChoice;
    }
    else{
        return "wrong input!";
    }
  
  }
  console.log(getHumanChoice());

  let counterHuman = 0
  let counterComputer = 0
  let humanScore = ++counterHuman;
  let computerScore = ++counterComputer; 
  alert(humanScore);
  alert(computerScore);
