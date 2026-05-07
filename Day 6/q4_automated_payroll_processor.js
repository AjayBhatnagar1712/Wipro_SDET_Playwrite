const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

function taxLogic(salaryAmount = 0) {
  const salary = Number(salaryAmount);
  return Number.isFinite(salary) && salary > 5000 ? 0.2 : 0.1;
}

function calculatePayroll(employeeList = [], taxCallback = () => 0.1) {
  const safeEmployees = Array.isArray(employeeList) ? employeeList : [];
  const getTaxRate = typeof taxCallback === "function" ? taxCallback : () => 0.1;

  const processedEmployees = safeEmployees.map((employee) => {
    const currentEmployee = employee && typeof employee === "object" ? employee : {};
    const salary = Number(currentEmployee.salary);
    const validSalary = Number.isFinite(salary) ? salary : 0;
    const taxRate = Number(getTaxRate(validSalary));
    const validTaxRate = Number.isFinite(taxRate) ? taxRate : 0;
    const taxAmount = validSalary * validTaxRate;
    const netSalary = Number((validSalary - taxAmount).toFixed(2));

    return {
      ...currentEmployee,
      salary: validSalary,
      netSalary,
      status: netSalary > 4000 ? "Premium" : "Standard"
    };
  });

  const totalNetPayout = processedEmployees.reduce(
    (total, employee) => total + employee.netSalary,
    0
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Payroll Processed: Total Net Payout is $${totalNetPayout.toFixed(2)} for ${processedEmployees.length} employees.`
      );
      resolve(processedEmployees);
    }, 2000);
  });
}

if (typeof require === "undefined" || require.main === module) {
  calculatePayroll(employees, taxLogic).then((processedEmployees) => {
    console.log(processedEmployees);
  });
}

if (typeof module !== "undefined") {
  module.exports = { calculatePayroll, taxLogic };
}
