const { Builder, By } = require('selenium-webdriver'); // Removed unused imports
const path = require('path');

// Define __dirname for ES modules compatibility
const __dirname = path.resolve();

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Load the HTML file directly from the file system
        const filePath = `file://${path.join(__dirname, 'test-page.html')}`;
        await driver.get(filePath);

        // Test Addition
        await driver.findElement(By.id('num1')).sendKeys('5');
        await driver.findElement(By.id('num2')).sendKeys('3');
        await driver.findElement(By.id('add-btn')).click();

        const result = await driver.findElement(By.id('result')).getText();
        console.log(`Addition Test Result: ${result}`);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
})();
