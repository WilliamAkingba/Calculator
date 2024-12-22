const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
    // Configure ChromeDriver to run in headless mode
    const options = new chrome.Options();
    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // Load the HTML file directly from the file system
        const filePath = `file://${path.join(process.cwd(), 'test-page.html')}`;
        console.log(`Loading file from: ${filePath}`);
        await driver.get(filePath);

        // Test Addition
        await driver.findElement(By.id('num1')).sendKeys('5');
        await driver.findElement(By.id('num2')).sendKeys('3');
        await driver.findElement(By.id('add-btn')).click();
        const addResult = await driver.findElement(By.id('result')).getText();
        console.log(`Addition Test Result: ${addResult}`);

        // Clear inputs for the next test
        await driver.findElement(By.id('num1')).clear();
        await driver.findElement(By.id('num2')).clear();

        // Test Subtraction
        await driver.findElement(By.id('num1')).sendKeys('8');
        await driver.findElement(By.id('num2')).sendKeys('2');
        await driver.findElement(By.id('sub-btn')).click();
        const subResult = await driver.findElement(By.id('result')).getText();
        console.log(`Subtraction Test Result: ${subResult}`);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
})();
