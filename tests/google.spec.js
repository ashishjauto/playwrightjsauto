// @ts-check
const { test, expect, chromium } = require('@playwright/test');


test('googlenavigation', async ({page} )=> {
    
    const driver  =  chromium.launch();
    
    await page.goto('https://www.google.com');
    const searchGoogle =await page.getByLabel('Search');

    await searchGoogle.fill('test');

    const navigation_link = await page.getByRole('listbox').nth[2].click;

    




})

 