const{test,expect}= require('@playwright/test')

test('DropDown',async({page},testInfo)=>{

await page.goto('https://the-internet.herokuapp.com/');

await page.locator('a').nth(11).click();
 
await page.getByText('Dropdown').click();


const drop_Down_screenshotAfter= await page.screenshot({path:'./screenshots/drop_Down_screenshotAfter.png',fullPage:true});

await testInfo.attach('screenshot',{body:drop_Down_screenshotAfter,contentType:'image/png'});



/*
    ************* MULTIPLE WAYS TO SELECT THE OPERATION *******************
await page.selectOption('#mySelect', 'optionValue');

// Select by label/text
await page.selectOption('#mySelect', { label: 'Option Text' });

// Select by index
await page.selectOption('#mySelect', { index: 2 });

*/
await page.selectOption('select#dropdown', { index: 2 });


await page.pause();

await page.close();


});