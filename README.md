# WK1 code - Challenges
Below is a brief overview of each challenge, its requirements, and how the solution works.

# Challenge 1: Student Grade Generator
Problem Description
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond to the correct grade, based on the following criteria:

A for marks greater than 79
B for marks between 60 and 79
C for marks between 50 and 59
D for marks between 40 and 49
E for marks less than 40

# How It Works
The user is prompted to input the student's marks.
The input is validated to ensure it's a valid number between 0 and 100.
Based on the marks, the program calculates and outputs the corresponding grade (A, B, C, D, or E).


# Challenge 2: Speed Detector
Problem Description
Write a program that takes the speed of a car as input (e.g., 80). If the speed is less than 70, it should print "Ok". Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example:

If the speed is 80, it should print: "Points: 2".
If the driver gets more than 12 points, the function should print: "License suspended".

# How It Works
The program takes the speed of the car as input.
If the speed is less than 70, the program prints "Ok".
If the speed exceeds 70, the program calculates how many demerit points the driver has accumulated based on every 5 km/s over the limit.
If the driver accumulates more than 12 demerit points, the program prints "License suspended". Otherwise, it prints the total number of points.

# Challenge 3: Net Salary Calculator
Problem Description
Write a program that calculates an individual's net salary by getting inputs for basic salary and benefits. The program should also calculate the PAYE tax, NHIF deductions, NSSF deductions, gross salary, and net salary based on the inputs.

# How It Works
The program prompts the user for their basic salary and benefits.
It calculates the gross salary by adding the basic salary and benefits.
The program calculates various deductions, including:
PAYE tax based on the taxable salary.
NHIF (National Health Insurance Fund) deduction based on the gross salary.
NSSF (National Social Security Fund) deduction based on the basic salary.
Finally, the program calculates and displays the net salary by subtracting the total deductions from the gross salary.

# Requirements
Node.js: The solution is implemented in Node.js. Ensure you have Node.js installed on your system to run the code.
Input Validation: The programs handle input validation, such as ensuring valid marks, speed, and salary values.