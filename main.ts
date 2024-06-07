#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.magenta.cyan(`
     _   _   _   _   _   _   _ 
    / \\ / \\ / \\ / \\ / \\ / \\ / \\
   ( W | e | l | c | o | m | e )
    \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/
`));


console.log(chalk.yellowBright("\t\    Greetings from the Quiz System "));
console.log(chalk.yellowBright("\t\n   To win, you must receive at least 4 points."));

let score = 0;


// Question 1
const question1 = await inquirer.prompt([
  {
    name: "answerOne",
    message: chalk.blueBright("1. What is the capital of Pakistan"),
    type: "list",
    choices: ["Karachi", "Punjab", "Islamabad", "KPK"],
  },
]);

if (question1.answerOne === "Islamabad") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}

// Question 2
const question2 = await inquirer.prompt([
  {
    name: "answerTwo",
    message: chalk.blueBright("2. TypeScript is a superset of"),
    type: "list",
    choices: ["Python", "JavaScript", "C++", "Java"],
  },
]);

if (question2.answerTwo === "JavaScript") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}

// Question 3
const question3 = await inquirer.prompt([
  {
    name: "answerThree",
    message: chalk.blueBright("3. Who is the founder of ChatGPT"),
    type: "list",
    choices: ["Mark Zuckerberg", "Elon Musk", "Sam Altman", "Bill Gates"],
  },
]);

if (question3.answerThree === "Sam Altman") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}

// Question 4
const question4 = await inquirer.prompt([
  {
    name: "answerFour",
    message: chalk.blueBright("4. TypeScript is developed and maintained by"),
    type: "list",
    choices: ["Google", "Microsoft", "Facebook", "Mozilla"],
  },
]);

if (question4.answerFour === "Microsoft") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}

// Question 5
const question5 = await inquirer.prompt([
  {
    name: "answerFive",
    message: chalk.blueBright("5. What is the file extension for TypeScript files"),
    type: "list",
    choices: [".js", ".css", ".html", ".ts"],
  },
]);

if (question5.answerFive === ".ts") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}


//Question 6
const question6 = await inquirer.prompt([
  {
    name: "answerSix",
    message: chalk.blueBright("6. Which TypeScript feature allows you to specify that a variable can have a specific set of values"),
    type: "list",
    choices: ["Enums", "Generics", "Decorators", "Modules"]
  },
]);

if (question6.answerSix === "Enums") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}

// Question 7
const question7 = await inquirer.prompt([
  {
    name: "answerSeven",
    message: chalk.blueBright("7. Which of the following is a TypeScript feature"),
    type: "list",
    choices: ["Type Safety", "Garbage Collection", "Read-Eval-Print Loop", "Run-time Debugging"],
  },
]);

if (question7.answerSeven === "Type Safety") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}

// Question 8
const question8 = await inquirer.prompt([
  {
    name: "answerEight",
    message: chalk.blueBright("8. TypeScript files are usually transpiled into"),
    type: "list",
    choices: ["JavaScript", "Python", "C++", "Java"],
  },
]);

if (question8.answerEight === "JavaScript") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}

// Question 9
const question9 = await inquirer.prompt([
  {
    name: "answerNine",
    message: chalk.blueBright("9. Who is the developer of the Java language"),
    type: "list",
    choices: ["Sun Microsystems", "Microsoft", "Apple", "Google"],
  },
]);

if (question9.answerNine === "Sun Microsystems") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" You have the right answer."));
}

// Question 10
const question10 = await inquirer.prompt([
  {
    name: "answerTen",
    message: chalk.blueBright("10. Who is the author of 'Harry Potter' series"),
    type: "list",
    choices: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"]
  },
]);

if (question10.answerTen === "J.K. Rowling") {
  console.log(chalk.greenBright("\t\ You have the right answer."));
  score++;
} else {
  console.log(chalk.redBright(" Your answer is incorrect"));
}


// Display the final score
console.log(chalk.yellowBright(`\t\    Your final score is: ${score}`));
//
if (score >= 4) {
  console.log(chalk.cyanBright("\t\  Congratulations, you won the quiz  "));
} else {
  console.log(chalk.redBright("Sorry, you didn't score enough points to win."));
  console.log(chalk.redBright("    Try Again   "));
}
