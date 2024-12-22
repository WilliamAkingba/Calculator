const { Builder, By, Key, until } = require('selenium-webdriver');
const path = require('path');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Load the HTML file directly from the file system
        const filePath = `file://${path.resolve(__dirname, 'test-page.html')}`;
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
