const{test,expect}= require('@playwright/test')

test('Entry Ad Test',async({page},testInfo)=>{
await page.goto('https://the-internet.herokuapp.com/');

await page.getByText('Entry Ad').click();
 


const allPages = page.context().pages();
for (const p of allPages) {
  console.log(await p.title());
}


const Entry_Add_screenshotBefore= await page.screenshot({path:'./screenshots/Entry_Add_screenshotBefore.png',fullPage:true});
await testInfo.attach('screenshot',{body:Entry_Add_screenshotBefore,contentType:'image/png'});

 

let myval=await page.locator('div.modal-body p').innerText();
console.log(myval);


await page.locator('//p[normalize-space()="Close"]').click();





const Entry_Add_screenshotAfter= await page.screenshot({path:'./screenshots/Entry_Add_screenshotAfter.png',fullPage:true});
await testInfo.attach('screenshot',{body:Entry_Add_screenshotAfter,contentType:'image/png'});

await page.close();

});