const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");


// Array for profiles
function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        message: "What is your title",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "office number"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your github?",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school do you attend?",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
}


// 
async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function ({
                    name,
                    id,
                    email,
                    title
                }) {

                    if (title === "Manager") {
                        runInquirerManager().then(function (officeNumber) {
                            this.employee = new Manager(name, id, email, officeNumber);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        runInquirerEngineer().then(function ({
                            github
                        }) {
                            this.employee = new Engineer(name, id, email, github);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        runInquirerIntern().then(function ({
                            school
                        }) {
                            this.employee = new Intern(name, id, email, school);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

    // console.log(employeeArray.length);

    let html =

        for (let i in employeeArray) {
            employee = employeeArray[i];
            let cardInfo = {
                name: employee.getName(),
                role: employee.getRole(),
                id: employee.getId(),
                email: employee.getEmail()
            }

            if (employee.getRole() == "Engineer") {
                cardInfo.github = employee.getGithub();
            } else if (employee.getRole() == "Manager") {
                cardInfo.officeNumber = employee.getOfficeNumber();
            } else if (employee.getRole() == "Intern") {
                cardInfo.school = employee.getSchool();
            }

            html += getCardHtml(cardInfo);
        }

    // Write/render file to index.html
    const fs = require("fs");
    fs.writeFile('teamprofiles.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}
run()

function getCardHtml(cardInfo) {
    let html = "<div>";
    return html;
}