const { chromium } = require('playwright');

(async () => {

  // Launch browser
  const browser = await chromium.launch({
    headless: false
  });

  // Open new page
  const page = await browser.newPage();

  // Open website
  await page.goto('https://www.google.com');

  // Print title
  console.log(await page.title());

  // Wait 5 seconds
  await page.waitForTimeout(5000);

  // Close browser
  await browser.close();

})();