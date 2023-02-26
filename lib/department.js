class Department {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getDepartment() {
    return "Department";
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

module.exports = Department;
