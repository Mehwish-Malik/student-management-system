#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("********** WELCOME TO STUDENT MANAGEMENT SYSTEM **********"));
const random_Number = Math.floor(20000 + Math.random() * 50000);
let my_Balance = 0;
let user_Answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a valid Name";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the Course to be Enrolled",
        choices: ["TYPESCRIPT", "HTML", "C++", "JAVASCRIPT", "PYTHON"]
    }
]);
const tution_Fee = {
    "TYPESCRIPT": 6000,
    "HTML": 4000,
    "C++": 5000,
    "JAVASCRIPT": 5000,
    "PYTHON": 10000
};
console.log(chalk.greenBright(`\nTution Fees:${tution_Fee[user_Answer.courses]}/-\n`));
console.log(`Balance: ${my_Balance}\n`);
let payment_Method = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select Payment Method",
        choices: ["Bank Transfer", "EasyPaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a Valid value";
        }
    }
]);
console.log(chalk.cyanBright(`\n You Select Payment Method ${payment_Method.payment}!!\n`));
const tutionFees = tution_Fee[user_Answer.courses];
const payment_Amount = parseFloat(payment_Method.amount);
if (tutionFees === payment_Amount) {
    console.log(chalk.greenBright(`Congratulations!! You Have Successfully Enrolled in ${user_Answer.courses}\n`));
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you Like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log(chalk.yellow("\n******** STATUS ********"));
        console.log(`Student Name: ${user_Answer.student}`);
        console.log(`Student ID: ${random_Number}`);
        console.log(`Course:${user_Answer.courses}`);
        console.log(`Tution Fee Paid:${payment_Amount}`);
        console.log(`Balance: ${my_Balance += payment_Amount}`);
    }
    else {
        console.log(chalk.yellow(`\nExiting Student Management system\n`));
    }
}
else {
    console.log(chalk.red("InValid Amount"));
}
