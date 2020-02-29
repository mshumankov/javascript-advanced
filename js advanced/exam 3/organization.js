class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];

        this.departmentsBudget = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35
        }
    }

    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] >= salary) {
            const employee = {
                employeeName,
                department,
                salary
            }

            this.employees.push(employee);
            this.departmentsBudget[department] -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        } else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this.departmentsBudget[department]}.`
        }
    }

    employeeExists(employeeName) {
        const checkEmplyee = this.employees.filter((x) => x.employeeName === employeeName);

        if (checkEmplyee[0]) {
            return `Mr./Mrs. ${employeeName} is part of the ${checkEmplyee[0].department} department.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    leaveOrganization(employeeName) {
        const checkEmplyee = this.employees.filter((x) => x.employeeName === employeeName);

        if (checkEmplyee[0]) {
            const salary = checkEmplyee[0].salary;
            const department = checkEmplyee[0].department;
            this.departmentsBudget[department] += salary;
            this.employees = this.employees.filter((x) => x.employeeName !== employeeName);

            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    status() {
        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;

        const marketingDep = this.employees.filter((x) => x.department === 'marketing').sort((a, b) => b.salary - a.salary);
        const marketingEmployees = marketingDep.map(e => e.employeeName);

        output += `\nMarketing | Employees: ${marketingDep.length}: ${marketingEmployees.join(', ')} | \nRemaining Budget: ${this.departmentsBudget.marketing}`;

        const financeDep = this.employees.filter((x) => x.department === 'finance').sort((a, b) => b.salary - a.salary);
        const financeEmployees = financeDep.map(e => e.employeeName);

        output += `\nFinance | Employees: ${financeDep.length}: ${financeEmployees.join(', ')} | \nRemaining Budget: ${this.departmentsBudget.finance}`;

        const productionDep = this.employees.filter((x) => x.department === 'production').sort((a, b) => b.salary - a.salary);
        const productionEmployees = productionDep.map(e => e.employeeName);

        output += `\nFinance | Employees: ${productionDep.length}: ${productionEmployees.join(', ')} | \nRemaining Budget: ${this.departmentsBudget.production}`;
        return output;
    }
}

let organization = new Organization('SoftUni', 30000);

console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Robert', 'marketing', 2000));
console.log(organization.add('Tosho', 'finance', 2000));
console.log(organization.add('Gosho', 'production', 1000));
console.log(organization.add('Mosho', 'production', 2000));
console.log(organization.employeeExists('Robert'));
console.log(organization.departmentsBudget);
console.log(organization.leaveOrganization('Petoer'));
console.log(organization.departmentsBudget);
console.log(organization.employees);
console.log(organization.status());