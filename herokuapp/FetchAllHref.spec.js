
const{test,expect} = require('@playwright/test')


test('get text from webpage',async({page},testInfo)=>{


    await page.goto('https://the-internet.herokuapp.com/');

    const links = await page.locator('a').evaluateAll(anchors =>
        anchors.map(a => a.href)
      );
      console.log(links);


      const screenshot_lockedOutUserTest=await page.screenshot({ path: 'screenshots/screenshot_lockedOutUserTest.png', fullPage: true });
      await testInfo.attach('screenshot', { body: screenshot_lockedOutUserTest, contentType: 'image/png' });


      const innerText1st= await page.locator('a').nth(1).innerText();
      console.log(innerText1st);

      await expect(page.locator('a').nth(1)).toHaveText('A/B Testing');




})