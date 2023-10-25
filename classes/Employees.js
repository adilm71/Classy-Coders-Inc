class Employees {
  static #allEmployees = [];
  #salary;
  #isHired = true;
  constructor(name, position, salary) {
    this.#salary = salary;
    this.name = name;
    this.position = position;
    let obj = this;
    obj['salary'] = this.#salary;
    Employees.#allEmployees.push(obj);
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;

    for (let i = 0; i < Employees.#allEmployees.length; i ++) {
      if (this.name == Employees.#allEmployees[i]['name']) {
        Employees.#allEmployees[i].salary = amount;

      }
    }
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") {
      this.#isHired = false;
    }
  }
  static getEmployees() {
    return Employees.#allEmployees;
  }
    static getTotalPayroll() {
      let totalSalary = 0;
      for (let employee of Employees.#allEmployees) {
        totalSalary += employee.salary;
      }
      return totalSalary//Employees.#allEmployees;
    }
}

module.exports = {
  Employees,
};
