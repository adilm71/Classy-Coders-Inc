class Employees {
  static #allEmployees = [];
  #salary;
  #isHired = true;
  constructor(name, position, salary) {
    this.#salary = salary;
    this.name = name;
    this.position = position;
    Employees.#allEmployees.push(this.name);
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
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
  //   static getTotalPayroll() {
  //     let totalSalary = 0;
  //     for (let employee of Employees.#allSalaries) {
  //       totalSalary += employee;
  //     }
  //     return Employees.#allSalaries;
  //   }
}

module.exports = {
  Employees,
};
