class Role {
  constructor(id, title, salary) {
    this.id = id;
    this.title = title;
    this.salary = salary;
  }

  getRole() {
    return "Role";
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getSalary() {
    return this.salary;
  }
}

module.exports = Role;
