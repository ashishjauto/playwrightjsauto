const{test,expect}= require('@playwright/test')

test('File Download',async({page},testInfo)=>{
await page.goto('https://the-internet.herokuapp.com/');

await page.getByText('File Download',{exact:true}).click();
 

const  fileName= await page.locator('a').nth(5).innerText();
console.log(fileName);

const [ download ] = await Promise.all([
    page.waitForEvent('download'),         // 1. Wait for the download event
    page.locator('a').nth(5).click()    // 2. Trigger the download
    
  ]);
  
  // Save the file to disk
  const path = await download.path();       // Gets the temporary file path
  await download.saveAs('./test-download/'+fileName);
  
  console.log('File downloaded to: '+'./test-download/'+fileName);
 


const fileDownload_screenshotBefore= await page.screenshot({path:'./screenshots/fileDownload_screenshotBefore.png',fullPage:true});
await testInfo.attach('screenshot',{body:fileDownload_screenshotBefore,contentType:'image/png'});

 

 

});