
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Created an array to hold employee information.
const collectEmployees = function() {
    const employeesArray = [];
    let keepGoing = true;
// Created a funtion with prompts to collect employee information.
    while (keepGoing) {
        const firstName = prompt("Enter employee's first name.");
        const lastName = prompt("Enter employee's last name.");
        const salary = parseFloat(prompt("Enter employee's salary.")); // Convert salary to a number
        employeesArray.push({ firstName: firstName, lastName: lastName, salary: salary });
        keepGoing = confirm("Would you like to add another employee?");
    }

    return employeesArray;
};
// Created a function to calculate average salary.
const displayAverageSalary = function(employeesArray) {
    let totalSalary = 0;

    employeesArray.forEach(employee => {
        totalSalary += employee.salary;
    });

    const averageSalary = totalSalary / employeesArray.length;
    // Created a console log to log average salary.
    console.log(`The average salary between our ${employeesArray.length} employee(s) is $${averageSalary}.`);
    


};



// Created a function to select a random employee.
const getRandomEmployee = function(employeesArray) {

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
  const randomEmployee = employeesArray[randomIndex];
// Log a random employee as winner in console.
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} our random drawing winner!`);
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
