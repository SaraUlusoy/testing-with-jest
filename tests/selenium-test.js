const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.example.com/');
    let element = await driver.findElement(By.name('q'));
    await element.sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    let button = await driver.findElement(By.name('btnK'));
    assert(await button.isDisplayed());
    console.log('Knappen existerar och är synlig');
  } finally {
    await driver.quit();
  }
})();
