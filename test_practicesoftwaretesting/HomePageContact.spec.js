
const{test,expect}=require('@playwright/test')



test('HomePage_Contact_Validation',async({page},testInfo)=>{



  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-contact"]').click();
  
  await page.locator('[data-test="first-name"]').fill('ashish');
  
  await page.locator('[data-test="last-name"]').fill('jaiswal');

  
  await page.locator('[data-test="email"]').fill('iamashish@live.com');
  await page.locator('[data-test="subject"]').selectOption('customer-service');
  
  await page.locator('[data-test="message"]').fill('How areyou and see ther reresult');
  await page.locator('[data-test="attachment"]').click();
//  await page.locator('[data-test="attachment"]').setInputFiles('uploadtest.txt');
  await page.locator('[data-test="contact-submit"]').click();
 
  const screenshot_HomePage_Contanct=await page.screenshot({ path: 'screenshots/screenshot_HomePage_Contanct.png', fullPage: true });
  await testInfo.attach('screenshot', { body: screenshot_HomePage_Contanct, contentType: 'image/png' });
  expect(page).toHaveURL('https://practicesoftwaretesting.com/contact');

  

});
