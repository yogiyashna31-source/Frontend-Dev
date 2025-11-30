// Function to simulate a hospital step
function hospitalStep(stepName) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 sec

        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success chance

            if (success) {
                console.log(stepName + " completed");
                resolve();
            } else {
                reject(stepName + " failed!");
            }
        }, delay);
    });
}

// Main emergency handling function
async function emergencyProcess() {
    try {
        await hospitalStep("Registering patient");
        await hospitalStep("Assigning doctor");
        await hospitalStep("Starting diagnosis");
        await hospitalStep("Starting treatment");

        console.log("Patient is treated successfully!");
    } catch (error) {
        console.log("Emergency handling failed!");
        console.log("Reason:", error);
    }
}

emergencyProcess();
