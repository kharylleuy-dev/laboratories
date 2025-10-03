// Initial employee data with at least 8 employees and salaries in PHP
const employees = [
  { name: 'Alice', department: 'Engineering', salary: 80000, yearsOfExperience: 5 },
  { name: 'Bob', department: 'Sales', salary: 25000, yearsOfExperience: 3 },
  { name: 'Charlie', department: 'Engineering', salary: 160000, yearsOfExperience: 10 },
  { name: 'Diana', department: 'HR', salary: 48000, yearsOfExperience: 2 },
  { name: 'Eve', department: 'Sales', salary: 40000, yearsOfExperience: 7 },
  { name: 'Frank', department: 'Engineering', salary: 70000, yearsOfExperience: 4 },
  { name: 'Greg', department: 'HR', salary: 35000, yearsOfExperience: 1 },
  { name: 'Hannah', department: 'Marketing', salary: 50000, yearsOfExperience: 6 }
];

// 1. Calculate the average salary
function calculateAverageSalary(employeeList) {
  if (employeeList.length === 0) {
    return 0;
  }
  const totalSalary = employeeList.reduce((sum, employee) => sum + employee.salary, 0);
  return totalSalary / employeeList.length;
}

// 2. Filter employees by department
function filterByDepartment(employeeList, department) {
  return employeeList.filter(employee => employee.department === department);
}

// 3. Find the most experienced employee
function findMostExperienced(employeeList) {
  if (employeeList.length === 0) {
    return null;
  }
  return employeeList.reduce((mostExperienced, currentEmployee) => {
    return (currentEmployee.yearsOfExperience > mostExperienced.yearsOfExperience) ? currentEmployee : mostExperienced;
  }, employeeList[0]);
}

// 4. Group employees by years of experience ranges
function groupEmployeesByExperience(employeeList) {
  const groups = {
    junior: [],  // 0-3 years
    mid: [],     // 4-7 years
    senior: [],  // 8+ years
  };

  employeeList.forEach(employee => {
    if (employee.yearsOfExperience >= 0 && employee.yearsOfExperience <= 3) {
      groups.junior.push(employee);
    } else if (employee.yearsOfExperience >= 4 && employee.yearsOfExperience <= 7) {
      groups.mid.push(employee);
    } else {
      groups.senior.push(employee);
    }
  });

  return groups;
}

// 5. Simulate fetching new hires asynchronously
function fetchNewHiresAsync() {
  const newHires = [
    { name: 'Isabel', department: 'Marketing', salary: 1050000, yearsOfExperience: 2 },
    { name: 'Jake', department: 'Engineering', salary: 1750000, yearsOfExperience: 12 }
  ];

  return new Promise(resolve => {
    // Simulate a network delay of 2 seconds
    setTimeout(() => {
      console.log('Fetching new hires...');
      resolve(newHires);
    }, 2000);
  });
}

// Main function to run all the operations
async function main() {
  console.log('--- Current Employees ---');
  console.log(employees);

  console.log('\n--- 1. Average Salary ---');
  const avgSalary = calculateAverageSalary(employees);
  console.log("The average salary is: ₱" + avgSalary.toFixed(2));

  console.log('\n--- 2. Employees in Engineering Department ---');
  const engineeringEmployees = filterByDepartment(employees, 'Engineering');
  console.log(engineeringEmployees);

  console.log('\n--- 3. Most Experienced Employee ---');
  const mostExperiencedEmployee = findMostExperienced(employees);
  if (mostExperiencedEmployee) {
    console.log("The most experienced employee is:" + mostExperiencedEmployee.name + " with " + mostExperiencedEmployee.yearsOfExperience + " years of experience. ");
  }

  console.log('\n--- 4. Employees Grouped by Experience ---');
  const groupedEmployees = groupEmployeesByExperience(employees);
  console.log(groupedEmployees);

  console.log('\n--- 5. Simulating Asynchronous Update ---');
  const newHires = await fetchNewHiresAsync();
  const updatedEmployees = [...employees, ...newHires];

  console.log('\n--- Updated Employee List with New Hires ---');
  console.log(updatedEmployees);

  console.log('\n--- New Average Salary after Update ---');
  const newAvgSalary = calculateAverageSalary(updatedEmployees);
  console.log('The new average salary is: ₱${newAvgSalary.toFixed(2)}');
}

// Run the main function
main();