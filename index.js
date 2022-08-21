// TODO: Include packages needed for this application

// Keith -- Installed node.js and the inquirer package

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/js/generateMarkdown')

const questions = [
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
        choices: ['MIT','ISC','None']
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
  ];

// TODO: Create a function to write README file


// fs.writeFile('README.md', `${ans}\n`, (err) => {
//     err ? console.error(err) : console.log('Commit logged!')
// });

// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

const init = () => {
    questions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((data) => fs.writeFileSync("README.md", generateMarkdown(data)))
      // If it was successful console log Successfully wrote to README.md
      .then(() => console.log("Successfully wrote to README.md"))
      .catch((err) => console.error("error", err));
  };
  // Function call to initialize app
  init();

// // Function call to initialize app
// init();
