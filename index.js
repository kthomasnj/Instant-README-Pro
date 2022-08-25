// TODO: Include packages needed for this application

// Keith -- Installed node.js and the inquirer package

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/js/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project?"
        },
        {
            type: "input",
            name: "installation",
            message: "What installations does your project require?"
        },
        {
            type: "input",
            name: "usage",
            message: "How is your application used?"
        },
        {
            type: "list",
            name: "license",
            message: "Any license?",
            choices: ['MIT', 'ISC', 'None']
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this application?"
        },
        {
            type: "input",
            name: "test",
            message: "Any test required for this application to run?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
    ])
};

// // TODO: Create a function to initialize app

const init = () => {
    questions()
        .then((data) => fs.writeFileSync("New_README.md", generateMarkdown(data)))

        .then(() => console.log("Successfully wrote to README.md"))
        .catch((err) => console.error("error", err));

};

// Function call to initialize app
init();

