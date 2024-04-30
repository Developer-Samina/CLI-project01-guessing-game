#! /user/bin/env node
import inquirer from "inquirer";
let systemgenrateno = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt({
    type: "number",
    name: "userguess",
    message: "guess number between 1 to 10",
});
if (answer.userguess === systemgenrateno) {
    console.log("congratulation your guess is right");
}
else {
    console.log(`oops!correct number was ${systemgenrateno} please try again`);
}
