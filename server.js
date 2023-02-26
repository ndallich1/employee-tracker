// import and require inquirer
const inquirer = require("inquirer");
// import and require mysql2
const mysql = require("mysql2");
const prompts = require("./lib/prompts");
const Engineer = require("./lib/department");
const Intern = require("./lib/employee");
const Manager = require("./lib/role");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// create connection to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    // Add MySQL password
    password: "SQL4me1!",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);
