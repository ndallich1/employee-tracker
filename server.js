// import and require inquirer
const inquirer = require("inquirer");
// import and require mysql2
const mysql = require("mysql2");
const prompts = require("./lib/prompts");
const Engineer = require("./lib/department");
const Intern = require("./lib/employee");
const Manager = require("./lib/role");
const cTable = require("console.table");

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    // Add MySQL password
    password: "SQL4me1!",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

const initialQuestion = () => {
  inquirer.prompt(prompts.menu).then((answers) => {
    chosenTask(answers.menu);
  });
};

initialQuestion();

const chosenTask = (options) => {
  switch (options) {
    case "View all departments":
      viewDepartments();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Add a role":
      addRole();
      break;
    case "Update an employee role":
      updateEmpRole();
      break;
    case "Quit":
      quit();
      break;
    default:
      console.log("'" + options + "' is not valid");
  }
};

// const viewDepartments = () => {
//   db.query (
//     `SELECT
//     department.name AS 'Department',
//     department.id AS 'Department ID'
//     FROM
//     department`,
//     if (err) {
//       console.log(err);
//     }
//     console.table(results);
//   )
// };

const addDepartment = () => {
  inquirer.prompt(prompts.addDepartment).then((answers) => {
    db.query(
      `INSERT INTO department (name)
      VALUES (?)`,
      [answers.deptName],
      console.log("Added new department")
    );
    if (err) {
      console.log(err);
    }
    console.table(results);
  });
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

const viewRoles = () => {
  inquirer.prompt(prompts.X).then((answers) => {
    db.query(
      `INSERT INTO department (name)
      VALUES (?)`,
      [answers.deptName],
      console.log("Added new department")
    );
    if (err) {
      console.log(err);
    }
    console.table(results);
  });
};
