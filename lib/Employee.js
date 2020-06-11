// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * title
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;


    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;




// inquirer
//     .prompt({
//         message: "Enter team manager:",
//         name: "manager"
//     })
// {
//     message: "What is your first team member's name?",
//     name: "team name",
// }, 
// {
//     message: "What is your second team member's name?",
//     name: "team name",
// }, 
// {
//     message: "What is your third team member's name?",
//     name: "team name",
// },




// It is recommended that you follow this workflow:

// 1. Run tests
// 2. Create or update classes to pass a single test case
// 3. Repeat

// 🎗 Remember, you can run the tests at any time with `npm run test`

// It is recommended that you start with a directory structure that looks like this:

// ```
// lib/           // classes and helper code
// output/        // rendered output
// templates/     // HTML template(s)
// test/          // jest tests
//   Employee.test.js
//   Engineer.test.js
//   Intern.test.js
//   Manager.test.js
// app.js         // Runs the application
// ```

// ### Hints

// * Create multiple HTML templates for each type of user. For example, you could use the following templates:

//   * `main.html`

//   * `engineer.html`

//   * `intern.html`

//   * `manager.html`

// * You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

// * The different employee types should all inherit some methods and properties from a base class of `Employee`.

// * In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

// ## Minimum Requirements

// * Functional application.

// * GitHub repository with a unique name and a README describing the project.

// * User can use the CLI to generate an HTML page that displays information about their team.

// * All tests must pass.

// ### Classes
// The project must have the these classes: `Employee`, `Manager`, `Engineer`,
// `Intern`. The tests for these classes in the `tests` directory must all pass.



// The other three classes will extend `Employee`. 

// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'

// In addition to `Employee`'s properties and methods, `Engineer` will also have:

//   * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'

// ### User input

// The project must prompt the user to build an engineering team. An engineering
// team consists of a manager, and any number of engineers and interns.

// ### Roster output

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

//   * Name

//   * Role

//   * ID

//   * Role-specific property (School, link to GitHub profile, or office number)