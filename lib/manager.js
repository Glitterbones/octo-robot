const Employee = require ('./Employee.js')

class Manager extends Employee {
    constructor(name, employeeID, email, phoneNumber) {
        super(name, employeeID, email);

        this.phoneNumber = phoneNumber;
    }
    getRole() {
        return 'manager';
    }
}

module.exports = Manager;