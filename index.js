// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.')

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
            if(githubINput) {
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
    
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
