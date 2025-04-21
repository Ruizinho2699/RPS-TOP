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
    if (finalChoice === "ROCK" || finalChoice === "SCISSORS" || finalChoice === "ROCK"){
    return finalChoice;
    }
    else{
        return "wrong input!";
    }
  
  }
  console.log(getHumanChoice());