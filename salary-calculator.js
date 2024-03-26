//declare variables for tax rates and deductions
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function netPay(basicSalary, allowances) {
  const taxRate = 0.3;
  const nhifRate = 0.01;
  const nssfRate = 0.01;

  //formula for calculating gross salary
  const grossSalary = basicSalary + allowances;

  //to get deductions
  const nssfDeduction = grossSalary * nssfRate;
  const nhifDeduction = grossSalary * nhifRate;
  const paye = (grossSalary - nhifDeduction - nssfDeduction) * taxRate;

  //calculating the net salar
  const netSalary = grossSalary - nhifDeduction - nssfDeduction - paye;

  //print to check the output
  console.log(`NHIF deduction is: ${nhifDeduction}`);
  console.log(`NSSF deduction: ${nssfDeduction}`);
  console.log(`PAYE: ${paye}`);
  console.log(`The gross salary is: ${grossSalary}`);
  console.log(`The net pay: ${netSalary}`);
}

readline.question("What is your basic salary? ", (basicSalary) => {
  readline.question("What are your allowances? ", (allowances) => {
    netPay(parseInt(basicSalary), parseInt(allowances));
    readline.close();
  });
});
