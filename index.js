// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");


// Creating an array of questions for user input using Inquirer
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?' 
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email Address?' 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description about your project' 
    },
     
    {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run this app ?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use this app ?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who Contributed to this Project?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Command needed to run the tests?',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Give license is being used ?',
        choices:['MIT','APACHE 2.0','GPl-v3','None'] 
    },
  
];

// function to create README file using the user input
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            return console.log(err);
        } else {
            console.log("Generating README.md");
        }
    })
    //return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile('README.md', generateMarkdown(data));
        
    });
}

// Function call to initialize app
init();
