class Person {
    constructor(id, fName, lName, dob){
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
        this.id = id;
    }
    calculateAge(){
        let now = Date.now();
        let dobMillis = new Date(this.dob.year, this.dob.month -1, this.dob.day); // all months minus one for some reason
        const millisPerYear = 31556952000;
        let ageMillis = now - dobMillis.getTime();
        return Math.floor(ageMillis/millisPerYear);
    }

    get fullName(){
        return this.fName + ' ' + this.lName;
    }
}

class Employee extends Person{

    constructor(id, fName, lName, dob, hourlyWage = 17, hrsWorked = 0){
        super(id, fName, lName, dob);
        this._hourlyWage = hourlyWage;
        this._hrsWorked = hrsWorked;
    }

    get hourlyWage(){
        return this._hourlyWage;
    }

    set hourlyWage(newWage){
        this._hourlyWage = newWage;
    }

    get hrsWorked (){
        return this._hrsWorked;
    }

    set hrsWorked(newHours){
        this._hrsWorked = newHours;
    }

}

//I hope its okay that I inherited from the Employee. I feel like managers are employees first.

class Manager extends Employee{
    constructor(id, fName, lName, dob, hourlyWage = 17, hrsWorked = 0, managedEmployees = []){
        super(id, fName, lName, dob, hourlyWage, hrsWorked);
        this._managedEmployees = managedEmployees;
    }

    get managedEmployees(){
        return this._managedEmployees;
    }

    hireEmployee(employee){
        this._managedEmployees.push(employee);
        console.log(`New employee added: {$employee.fullName}`);
    }

    fireEmployee(employee){
        this._managedEmployees = this._managedEmployees.filter((managedEmployee) => managedEmployee.id !== employee.id);
    }

    createPayrollReport() {
        return this._managedEmployees.map((employee) => ({
            fullName: employee.fullName,
            pay: employee.hourlyWage * employee.hrsWorked
        }));
    }
}
// Manager
let q = new Manager('Q', '', {year: 1987, month: 7, day: 9}, 6, 23, 160);

// Employees
let jeanLuc = new Employee('Jean-Luc', 'Picard', {year: 2305, month: 7, day: 13}, 1, 100, 45);
let will = new Employee('Will', 'Riker', {year: 2021, month: 3, day: 5}, 2, 20, 10);
let beverly = new Employee('Beverly', 'Crusher', {year: 2324, month: 10, day: 13}, 3, 18, 60);
let data = new Employee('Data', '', {year: 2338, month: 2, day: 2}, 4, 25, 1000);
let geordi = new Employee('Geordi', 'LaForge', {year: 2335, month: 2, day: 16}, 5, 22, 60);
let worf = new Employee('Worf', '', {year: 2340, month: 7, day: 9}, 6, 23, 160);
let wesley = new Employee('Wesley', 'Crusher', {year: 2348, month: 7, day: 29}, 7, 10, 16);
let deanna = new Employee('Deanna', 'Troi', {year: 2336, month: 3, day: 29}, 8, 15, 46);
let tasha = new Employee('Tasha', 'Yar', {year: 2337, month: 3, day: 23}, 9, 16, 16);

// hiring
q.hireEmployee(jeanLuc);

q.hireEmployee(deanna);
deanna._hourlyWage = 20;

// Payroll Report
console.log(q.createPayrollReport());

// firing
q.fireEmployee(jeanLuc);
q.hireEmployee(will);

// Payroll Report
console.log(q.createPayrollReport());