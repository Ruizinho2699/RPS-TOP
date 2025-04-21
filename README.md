# RPS-TOP

For this project the goal is to create a program that plays "rock, paper, scissors" by:

- Creating a random generator that plays as the computer;
- Creating a prompt for the human user to put down their option;
- Keep score between the human and the computer;
- Initiate a round between human vs computer;
- Keep score through 5 rounds and declare a winner;

Pseudo Code:

Create index.html + rps.js for code.
Create function that returns random number between 0-2 (ie 0,1,2):
  - using Math.random function, this will generate the numbers 0-2.
  - using if loops we can attribute "rock.paper,scissors" to 0,1,2.
Create a prompt for user to introduce their choice between rps:
  - using prompt, user can introduce their option;
  - must validate option regardless of upper/lower case;
  - create if loops or switch loops to compare the human vs computer answer and declare a winner
Create code to track the score between computer and human:
  - create a counter to keep score of human wins vs computer wins.
  - this counter will run until 5.
Create code to declare winner out of five games
Create code to initiate a round of rps
Create code to initiate a game of 5 rounds of rps.