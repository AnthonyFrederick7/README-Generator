// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput(){

    return inquirer.prompt([
    {name: 'license',
    message: 'What kind of license do you want for this project?',
    type: 'list',
    choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause License", "BSD 3-Clause license", "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0",
    "The Unlicense"]},

    {name: 'title',
    message: 'What is the title of this project?',
    type: 'input'},

    {name: 'description',
    message: 'What does this project do?',
    type: 'input'},

    {name: 'install',
    message: 'How do I install this project?',
    type: 'input'},

    {name: 'usage',
    message: 'How do I use this project?',
    type: 'input'},

    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},

    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},

    {name: 'fileName',
    message: 'What do you want to call this README?',
    type: 'input'},

])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();