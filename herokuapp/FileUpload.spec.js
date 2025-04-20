const{test,expect}= require('@playwright/test')

test('File Upload',async({page},testInfo)=>{
await page.goto('https://the-internet.herokuapp.com/');

await page.getByText('File Upload',{exact:true}).click();
 
 
 
   
// Select the file input
const fileInput = page.locator('input#file-upload');

// Set the file(s) to upload
await fileInput.setInputFiles('./test-upload/Bug_report & Test_cases.xlsx');  // Single file
 


const fileDownload_screenshotBefore= await page.screenshot({path:'./screenshots/fileDownload_screenshotBefore.png',fullPage:true});
await testInfo.attach('screenshot',{body:fileDownload_screenshotBefore,contentType:'image/png'});



await page.locator('input#file-submit').click();

const fileDownload_screenshotAfter= await page.screenshot({path:'./screenshots/fileDownload_screenshotAfter.png',fullPage:true});
await testInfo.attach('screenshot',{body:fileDownload_screenshotAfter,contentType:'image/png'});

 const msg_value= await page.locator('div#uploaded-files').innerText();

 console.log(msg_value);
 await expect(msg_value).toContain('Bug_report & Test_cases.xlsx');

 await expect(page).toHaveURL('https://the-internet.herokuapp.com/upload');


 

});