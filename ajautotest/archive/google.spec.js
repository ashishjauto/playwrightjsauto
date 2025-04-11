// @ts-check
const { test, expect, chromium } = require('@playwright/test');


 

    

    test('test', async ({ page }) => {
        await page.goto('https://www.google.com/');
        
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('test');
        await page.getByText('match', { exact: true }).click();
        await page.locator('body').click();
      });

 
 