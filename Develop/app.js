// Dependencies 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");​
// Output folders
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");​
// Render 
const render = require("./lib/htmlRenderer");​​
// Notes: What elements are important...

// Need arrays 

const employeeArray = [];

function init() {
    inquirer
        .prompt(employeeQuestions.concat(managerQuestions))
        .then(({
            name,
            id,
            email,
            officeNumber
        }) => {
            let manager = new Manager(name, id, email, officeNumber);
            employeeArray.push(manager);
            getEmployee();
        })
}

function getEmployee() {
    inquirer
        .prompt(defineEmployee)
        .then(({
            userChoice
        }) => {
            switch (userChoice) {
                case 'Engineer':
                    getEngineer();
                    break;
                case 'Intern':
                    getIntern();
                    break;
                case 'Complete':
                    htmlRenderer(employeeArray);
                    break;
            }
        })
}

function getEngineer() {
    inquirer
        .prompt(employeeQuestions.concat(engineerQuestions))
        .then(({
            name,
            id,
            email,
            githubUsername
        }) => {
            let engineer = new Engineer(name, id, email, githubUsername);
            employeeArray.push(engineer);
            getEmployee();
        })
}

function getIntern() {
    inquirer
        .prompt(employeeQuestions.concat(internQuestions))
        .then(({
            name,
            id,
            email,
            school
        }) => {
            let intern = new Intern(name, id, email.school);
            employeeArray.push(intern)
            getEmployee();
        })
}

init();





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```