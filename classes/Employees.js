class Employees {
  #salary;
  #isHired = true;
  constructor(salary, name, position) {
    this.#salary = salary;
    this.name = name;
    this.position = position;
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
}

module.exports = {
  Employees,
};
