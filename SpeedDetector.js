const readline = require('readline');

// Function to prompt the user for their speed input
function promptSpeedInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Prompt the user to input the speed
    rl.question('Please enter your speed: ', (speedInput) => {
        const speed = parseInt(speedInput, 10); // Parse the speed input as an integer

        // Validate the speed input
        if (isNaN(speed)) {
            console.log("Please provide a valid speed.");
        } else {
            calculateDemeritPoints(speed); // Calculate demerit points if the input is valid
        }

        rl.close(); // Close the readline interface after processing the input
    });
}

// Function to calculate demerit points based on the given speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70; 
    const demeritPerExcessSpeed = 5; 

    // Check if the speed is within the limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate excess speed and demerit points
        let excessSpeed = speed - speedLimit;
        let demeritPoints = Math.floor(excessSpeed / demeritPerExcessSpeed);

        // If demerit points exceed 12, suspend the license
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            // Otherwise, print the demerit points
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Call the function to prompt the user to input their speed
promptSpeedInput();
