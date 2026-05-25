const { chromium } = require('@playwright/test');
const readline = require('readline');

function waitForEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('After you finish login in the opened browser, press Enter here to save auth.json...', () => {
      rl.close();
      resolve();
    });
  });
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.jiomart.com/', { waitUntil: 'domcontentloaded' });
  await waitForEnter();
  await context.storageState({ path: 'auth.json' });

  console.log('Saved login session to auth.json');
  await browser.close();
})();
