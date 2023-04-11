module.exports = {
  menu: [
    {
      type: "list",
      name: "menu",
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
      name: "deptName",
      message: "What is the name of the department?",
    },
  ],

  addRole: [
    {
      type: "input",
      name: "roleName",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for the role?",
    },
    {
      type: "input",
      name: "roleDept",
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
      name: "empRole",
      message: "What is the employee's role?",
    },
    {
      type: "input",
      name: "empManager",
      message: "Who is the employee's manager?",
    },
  ],

  updateEmpRole: [
    {
      type: "input",
      name: "updateEmp",
      message: "What is the ID of the employee you would like to update?",
    },
    {
      type: "input",
      name: "empNewRole",
      message: "What is the employee's new role?",
    },
  ],
};
