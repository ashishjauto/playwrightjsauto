
const{test,expect}=require('@playwright/test')



test('HomePage_SignIn_Validation',async({page},testInfo)=>{
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();
    
    await page.locator('[data-test="email"]').fill('johndoe@test.com');
    
    await page.locator('[data-test="password"]').fill('April@2025');
    await page.locator('[data-test="login-submit"]').click();
    
    
    const loginError= await page.locator('[class="help-block"]').innerText();
    console.log(loginError);


  const screenshot_HomeSignIn_Validation=await page.screenshot({ path: 'screenshots/screenshot_HomeSignIn_Validation.png', fullPage: true });
  await testInfo.attach('screenshot', { body: screenshot_HomeSignIn_Validation, contentType: 'image/png' });
  expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');

  await page.close();



});