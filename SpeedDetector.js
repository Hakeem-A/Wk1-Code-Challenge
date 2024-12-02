function calculateDemeritPoints(speed) {
    const speedLimit = 70; 
    const demeritPerExcessSpeed = 5; 

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let excessSpeed = speed - speedLimit;
        let demeritPoints = Math.floor(excessSpeed / demeritPerExcessSpeed);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

const speed = parseInt(process.argv[2], 10);

if (isNaN(speed)) {
    console.log("Please provide a valid speed.");
} else {
    calculateDemeritPoints(speed);
}
