let totalWin = 0;
let totalLoss = 0;
let totalTie = 0;
let computerLetterChoice = ["r", "p", "s"];

let gameCount = Number(prompt("How many rounds do you want to play?"));

for (i=0; i < gameCount; i++) {
  let userChoice = prompt("Pick rock, paper or scissors (enter r, p or s)");
  let computerChoice = computerLetterChoice[Math.round(Math.random() * (2))];
  let alertMessageTie = "It's a tie! You picked " + userChoice + " and the computer picked " + computerChoice 
  let alertMessageWin = "You won! You picked " + userChoice + " and the computer picked " + computerChoice 
  let alertMessageLose = "Sorry, you lost. You picked " + userChoice + " and the computer picked " + computerChoice 
  
  if (userChoice === "r") {
    if (computerChoice === "r") {
      alert(alertMessageTie);
      totalTie++;
    } else if (computerChoice === "p") {
      alert(alertMessageLose);
      totalLoss++;
    } else if (computerChoice === "s") {
      alert(alertMessageWin);
      totalWin++;
    }
  } else if (userChoice === "p") {
    if (computerChoice === "r") {
      alert(alertMessageWin);
      totalWin++;
    } else if (computerChoice === "p") {
      alert(alertMessageTie);
      totalTie++;
    } else if (computerChoice === "s") {
      alert(alertMessageLose);
      totalLoss++;
    }
  } else if (userChoice === "s") {
    if (computerChoice === "r") {
      alert(alertMessageLose);
      totalLoss++;
    } else if (computerChoice === "p") {
      alert(alertMessageWin);
      totalWin++;
    } else if (computerChoice === "s") {
      alert(alertMessageTie);
      totalTie++;
    } 
  } else {
    alert("Please only enter r, p, or s as your choice");
    i--;
  }
} 

alert("Games you won: " + totalWin + " | Games you lost: " + totalLoss + " | Games you tied: " + totalTie);
