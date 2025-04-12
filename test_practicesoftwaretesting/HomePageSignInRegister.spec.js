const{test,expect}= require('@playwright/test')


test('HomePageSignInRegister',async({page},testInfo)=>{

    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="register-link"]').click();
    await page.locator('[data-test="first-name"]').fill('john');

    
    await page.locator('[data-test="last-name"]').fill('doe');
    
    await page.locator('[data-test="dob"]').fill('2025-04-10');
    
    await page.locator('[data-test="street"]').fill('Street On left');
    
    await page.locator('[data-test="postal_code"]').fill('90201');
    
    await page.locator('[data-test="city"]').fill('New York');
    
    await page.locator('[data-test="state"]').fill('New York');
    
    await page.locator('[data-test="country"]').selectOption('US');
    
    await page.locator('[data-test="phone"]').fill('1188549799');
    
    await page.locator('[data-test="email"]').fill('johndoe@test.com');
    
    
    await page.locator('[data-test="password"]').fill('Remember@2025');
    await page.locator('[data-test="register-submit"]').click();
    
    expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/register');




    const HomePageSignInRegister=await page.screenshot({ path: 'screenshots/HomePageSignInRegister.png', fullPage: true });
    await testInfo.attach('screenshot', { body: HomePageSignInRegister, contentType: 'image/png' });

    await page.close(); 



});