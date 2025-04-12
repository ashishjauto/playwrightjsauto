const { test, expect }  = require('@playwright/test');

test('HomePage_Support', async ({ page },testInfo) => {


    await page.goto('https://www.practicesoftwaretesting.com/');
    console.log(await page.title())
    const SupportPopPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Support this project' }).click();
    const SupportPage = await SupportPopPromise;
    console.log(await SupportPage.title())
    const stringtest=await SupportPage.locator('xpath=//div[@class="col-md-5 text-column"]').first().innerHTML();
    const screenshot_validate_support=await SupportPage.screenshot({ path: 'screenshots/example.png', fullPage: true });
    await testInfo.attach('screenshot', { body: screenshot_validate_support, contentType: 'image/png' });


  });

  test('HomePage_PrivacyPolicy',async({page} , testInfo)=> {

    await page.goto("https://www.practicesoftwaretesting.com/");
    await page.getByRole('link',{name:'Privacy Policy'}).click();
    const screenshot_validate_privacyPolicy=await page.screenshot({ path: 'screenshots/validate_privacyPolicy_page.png', fullPage: true });
    await testInfo.attach('screenshot', { body: screenshot_validate_privacyPolicy, contentType: 'image/png' });
    

  //  expect(page).toHaveURL("https://testwithroy.com/b/support");
      
  await page.close();     


  }); 