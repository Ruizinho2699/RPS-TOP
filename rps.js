function getComputerChoice(max) {
    let x = Math.floor(Math.random()*max);
    if (x == 1){
        return "Rock";
    }
    else if (x == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }

  }

  console.log(getComputerChoice(3));