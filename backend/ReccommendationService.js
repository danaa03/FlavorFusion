const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log("Starting the script");

const generateRecommendations = async () => {
    console.log('Inside generateRecommendations function');
    
    // Construct the absolute path to the Python script
    const pythonScriptPath = path.join(__dirname, 'GenerateReccommendations.py');
    console.log('Python Script Path:', pythonScriptPath); // Debug statement

    // Check if the Python script exists
    if (!fs.existsSync(pythonScriptPath)) {
        console.error('Python script not found:', pythonScriptPath);
        return Promise.reject('Python script not found');
    }

    // Call Python script to generate recommendations
    return new Promise((resolve, reject) => {
        console.log('About to run Python script');
        const pythonProcess = spawn('python', [pythonScriptPath]);

        let dataOutput = '';

        pythonProcess.stdout.on('data', (data) => {
            dataOutput += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Error running Python script: ${data}`);
            reject(data.toString());
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                console.log('Python script execution completed successfully');
                try {
                    // Clean up and parse the output
                    const cleanedOutput = dataOutput.trim();
                    let recommendations = JSON.parse(cleanedOutput);

                    // Remove duplicates
                    recommendations = [...new Set(recommendations)];

                    resolve(recommendations);
                } catch (error) {
                    console.error('Error parsing JSON from Python script output:', error);
                    reject(error);
                }
            } else {
                console.error(`Python script execution failed with code ${code}`);
                reject(`Python script execution failed with code ${code}`);
            }
        });
    });
};

generateRecommendations().then((recommendations) => {
    console.log('Final Recommendations:', recommendations);
}).catch(error => {
    console.error('Error in recommendation service:', error);
});

module.exports = { generateRecommendations };
