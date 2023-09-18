let totalWin = 0;
let totalLoss = 0;
let totalTie = 0;

let gameCount = Number(prompt("How many rounds do you want to play?"));

for (i=0; i < gameCount; i++) {
  let userChoice = prompt("Choose r for rock, p for paper, or s for scissors");
  let computerChoice = Math.round(Math.random() * (2));

  if ((userChoice === "r" && computerChoice === 0) || (userChoice === "p" && computerChoice === 1) || (userChoice === "s" && computerChoice === 2) ) {
    alert("It's a tie!");
    totalTie++;
  } else if ((userChoice === "r" && computerChoice === 2) || (userChoice === "p" && computerChoice === 0) || (userChoice === "s" && computerChoice === 1)) {
    alert("You win!");
    totalWin++;
  } else if ((userChoice === "r" && computerChoice === 1) || (userChoice === "p" && computerChoice === 2) || (userChoice === "s" && computerChoice === 0)) {
    alert("You lose, sir!");
    totalLoss++;
  } else {
    alert("Please only enter r, p, or s as your choice");
    i--;
  }
} 

alert("Games won: " + totalWin);
alert("Games lost: " + totalLoss);
alert("Games tied: " + totalTie);
