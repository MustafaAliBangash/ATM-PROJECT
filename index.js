#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const welcome = () => {
    console.log(chalk.bgMagenta("Welcome to PIAIC Bank "));
};
welcome();
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your Id please! ",
    },
    {
        type: "password",
        name: "userPin",
        message: "Kindly enter your Pin please! ",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Choose your acount type:",
        when(answers) {
            return answers.userPin;
        },
    },
    {
        type: "list",
        name: "transactionMethod",
        choices: ["Fast Cash", "Cash Withdraw"],
        message: "Select transaction method:",
    },
    {
        type: "list",
        name: "amount",
        choices: [2000, 5000, 10000],
        when(answers) {
            return answers.transactionMethod == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount:",
        when(answers) {
            return answers.transactionMethod == "Cash Withdraw";
        },
    },
]);
// console.log(answers);
if (answers.userId && answers.userPin) {
    let balance = Math.round(Math.random() * 100000);
    console.log(chalk.bgWhite(chalk.italic("Your current balance is:", balance)));
    const EnteredAmount = answers.amount;
    if (balance > EnteredAmount) {
        const remainingBalance = balance - Number(EnteredAmount);
        console.log("The remaining balance is:", remainingBalance);
    }
    else {
        console.log("Insufficient balance!");
    }
}
