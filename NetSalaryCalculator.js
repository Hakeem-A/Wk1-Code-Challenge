const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculatePAYE(taxableIncome) {
    let tax = 0;

    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.10;
    } else if (taxableIncome <= 32333) {
        tax = (24000 * 0.10) + ((taxableIncome - 24000) * 0.25);
    } else if (taxableIncome <= 500000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.30);
    } else if (taxableIncome <= 800000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + (166667 * 0.30) + ((taxableIncome - 500000) * 0.325);
    } else {
        tax = (24000 * 0.10) + (8333 * 0.25) + (166667 * 0.30) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
    }

    return tax;
}

function calculateNHIF(salary) {
    if (salary <= 5999) return 150;
    if (salary <= 7999) return 300;
    if (salary <= 11999) return 400;
    if (salary <= 14999) return 500;
    if (salary <= 19999) return 600;
    if (salary <= 29999) return 750;
    if (salary <= 39999) return 850;
    if (salary <= 49999) return 900;
    if (salary <= 59999) return 1000;
    if (salary <= 69999) return 1100;
    if (salary <= 79999) return 1200;
    if (salary <= 89999) return 1300;
    if (salary <= 99999) return 1400;
    return 1500;
}

function calculateNSSF(basicSalary) {
    let nssfTierI = 0;
    let nssfTierII = 0;

    if (basicSalary <= 7000) {
        nssfTierI = basicSalary * 0.06; 
    } else {
        nssfTierI = 7000 * 0.06; 
        nssfTierII = (basicSalary - 7000) * 0.06; 
    }

    return nssfTierI + nssfTierII;
}

function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const tax = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);

    const totalDeductions = tax + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;

    console.log(`Gross Salary: KES ${grossSalary}`);
    console.log(`PAYE Tax: KES ${tax}`);
    console.log(`NHIF Deduction: KES ${nhif}`);
    console.log(`NSSF Deduction: KES ${nssf}`);
    console.log(`Net Salary: KES ${netSalary}`);
}

function getSalaryDetails() {
    rl.question("Please enter your basic salary: ", (basicSalaryInput) => {
        let basicSalary = parseFloat(basicSalaryInput);

        if (isNaN(basicSalary) || basicSalary <= 0) {
            console.log("Invalid input. Please enter a valid number for the basic salary.");
            rl.close();
            return;
        }

        rl.question("Please enter your benefits (e.g., allowances, bonuses, etc.): ", (benefitsInput) => {
            let benefits = parseFloat(benefitsInput);

            if (isNaN(benefits) || benefits < 0) {
                console.log("Invalid input. Please enter a valid number for the benefits.");
                rl.close();
                return;
            }

            // Calculate the net salary based on the entered values
            calculateNetSalary(basicSalary, benefits);
            rl.close();
        });
    });
}

// Call the function to prompt the user and calculate the salary
getSalaryDetails();
