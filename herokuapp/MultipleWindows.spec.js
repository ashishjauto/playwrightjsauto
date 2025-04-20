

const {test,expect,chromium,testInfo} = require('@playwright/test')

test('Multiple Windows Test' , async()=>{

    const browser = await chromium.launch({ headless: false }); // Set to true for headless
    const context = await browser.newContext();
    const page = await context.newPage();


await page.goto('https://the-internet.herokuapp.com/');
await page.getByText('Multiple Windows',{exact:true}).click();





  // ---- Trigger the link that opens a new tab ----
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),             // 1. Listen for the new tab
    page.click('text=Click Here') // 2. Trigger the new tab
  ]);

  // Wait for the new tab to load
  await newTab.waitForLoadState();


   // ---- Interact with the new tab ----
   console.log('New tab title:', await newTab.title());

  
 
   // Optional: Go back to original tab
  // await page.bringToFront();
 

   await page.pause();
 
const webElementScreenShot= await page.screenshot({path:'./screenshots/webElementScreenShot.png',fullPage:true});

await testInfo.attach('screenshots',{body:webElementScreenShot,contentType:'image/png'});
 
 


 

});