const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

async function main() {
  const rl = readline.createInterface({ input, output });
  const secret = Math.floor(Math.random() * 100) + 1;
  const maxTries = 7;
  let tries = 0;

  console.log("=== Number Guessing Game ===");
  console.log(`I'm thinking of a number from 1 to 100. You have ${maxTries} tries.\n`);

  while (tries < maxTries) {
    const answer = await rl.question(`Guess #${tries + 1}: `);
    const guess = Number(answer);

    if (answer.trim() === "" || !Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log("Please type a whole number from 1 to 100.");
      continue; 
    }

    tries++;

    if (guess === secret) {
      console.log(`Correct! You got it in ${tries} ${tries === 1 ? "try" : "tries"}.`);
      rl.close();
      return;
    }
    console.log(guess < secret ? "Too low." : "Too high.");
  }

  console.log(`\nOut of tries! The number was ${secret}.`);
  rl.close();
}

main();
