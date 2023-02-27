module.exports = {
  menu: [
    {
      type: "list",
      name: "name",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
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
