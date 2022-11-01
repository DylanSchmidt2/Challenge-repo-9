
// Array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownJsFile = require('./utils/generateMarkdown');

const questions = [
  // TITLE
{
    type: 'input',
    name: 'Title',
    message: 'Title:',
  },
{
  // DESCRIPTION
    type: 'input',
    name: 'Description',
    message: 'Project description?',
  },
{
  // LICENSES
    type: 'list',
    name: 'licenses',
    message: 'Licenses:',
    choices:
      ["MIT", "GPLv3", "GPL", "n/a"]
  },
{
  // INSTALLATION
    type: 'input',
    name: 'Installation',
    message: 'Installation:',
  },
{
  // CREDITS
    type: 'input',
    name: 'Credits',
    message: 'Credits:',
  },
{
  // USAGE
    type: 'input',
    name: 'Usage',
    message: 'Usage:',
  },
{
  // CONTRIBUTORS
    name: "Contributors",
    message: "Enter contibutors:"
  },
{
  // TESTS
    name: "Tests",
    message: "Enter tests:"
  },
  {
    // GITHUB USERNAME
    name: "username",
    message: "Enter github username:",
  },
{
  // CONTACT EMAIL
    name: "email",
    message: "Enter your email:",
  }
]

function generateReadMe(resp) {
  const mkdwnStr = generateMarkdownJsFile(resp)
  const filename = "README.md";

  // Create README.md
  fs.writeFile(filename, mkdwnStr, (err) => {
    err ? console.log(err) : console.log('SUCCESSFULLY CREATED YOUR README.md')})
}

// Initialize app
function init() {
  inquirer.prompt(questions).then(resp => {
    generateReadMe(resp)
  });
}

// Call function initialize
init();
