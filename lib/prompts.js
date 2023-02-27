module.exports = {
  menu: [
    {
      type: "list",
      name: "name",
      message: "What would you like to do?",
      choices: [
        "Add a department",
        "View all departments",
        "Add a role",
        "View all roles",
        "Add an employee",
        "Update an employee role",
        "View all employees",
        "Quit",
      ],
    },
  ],

  addDepartment: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the department?",
    },
  ],

  addRole: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for the role?",
    },
    {
      type: "input",
      name: "department",
      message: "What department is the role in?",
    },
  ],

  addEmployee: [
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
    {
      type: "input",
      name: "role",
      message: "What is the employee's role?",
    },
    {
      type: "input",
      name: "manager",
      message: "Who is the employee's manager?",
    },
  ],
};
