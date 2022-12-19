// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'name',
        message:'Welcome! Please provide your name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else{
                console.log('Please try that again.');
                return false;
            }
        }
    },

    {    
        type:'input',
        name:'github',
        message:'Enter you Github username:',
        validate: githubInput => {
            if(githubInput) {
                return true;
            }   else{
                console.log('It is important to link your github. Please try again.');
                return false;

                }
            }
        },
    
    {
        type:'input',
        name:'description',
        message:'Please enter a description for your file.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }   else {
                console.log('Please try again!');
                return false;
                }
            }  
        },
    
    {
        type:'input',
        name:'email',
        message:'Please enter your email address:',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please provide a email you can be contacted at.');
                return false;
            }
        }
    },

    {
        type:'input',
        name:'title',
        message: 'Please enter the title of your project.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please try again. Your project must have a title.');
                return false;
            }
        }
    },

    {
        type:'input',
        name:'description',
        message: "Please enter a description here:",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Its important to provide a description of your project.');
                return false;
            }
        }
    },

    {
        type:'input',
        name:'installation',
        message:'Please provide the instructions for installation.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You must provide instructions on how to run your program.');
                return false;
            }
        }
    },

    {
        type:'input',
        name:'usage',
        message:'What are the instructions for usage?:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('This will make it easier to navigate your project.');
                return false;
            }
        }
    },

    {
        type:'input',
        name:'contributing',
        message:'How can someone contribute to this project?:',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Provide instructions on how others can contribute to this project');
                return false;
            }
        }
    },

    {
        type:'input',
        name:'tests',
        message:'Please provide information on how to run tests for your project:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Provide details on how tests can be ran for your project');
                return false;
            }
        }
    },

    {
        type:'list',
        name:'licenses',
        message:'Please select which license you would like to use:',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'GPL', 'Apache License 2.0']

    }
    
]

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {
    fs.writeFile(generateMarkdown, data, function (err) {
        if (err) {
            return console.log('error');
        }else {
            console.log('README has been created succesfully!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('./dist/README.md', generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
