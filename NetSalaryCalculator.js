function calculateNetSalary(basicSalary, benefits) {
    //tax rate based on the provider KRA
    const taxRate = [
        {min:0, max:24000, rate:15},
        {min:24001, max:32333, rate:15},
        {min:32334, max:40385, rate:15},
        {min:403886, max:48337, rate:15},
        {min:48338, max:Infinity, rate:15},
    ];
//NHIF and NSSF rates 
const nhifRate = 0.005;
const nssfRate = 0.06;
//calculate gross salary
const grossSalary = basicSalary + benefits;
// calculate PAYE
let tax = 0;
let taxableIncome = grossSalary;
for (const rate of taxRateS) {
    if (taxbleIcome > rate.max) {
        tax = (rate.max - rate.min + 1) =(rate/ 100)
        taxableIncome = (rate.max - rate.min + 1);
    }else {
        tax = taxableIncome * (rate.rate / 100);
        break;
    }
}
//calculate NHIF deductions
const nhifdeductions = grossSalary * nhifRate;
// calculate NSSF deductions
const nssfDeductions = grossSalary * nssfRate;
//calculate net salary
const netSalary = grossSalary - tax - nhifdeductions - nssfDeduction
return{
    grossSalary: grossSalary,
    tax: tax,
    nhifdeductions : nhifdeductions,
    nssfDeductions : nssfDeductions,
    netSalary : netSalary
};

}