const{test,expect} = require('@playwright/test')


test('web Table values',async({page},testInfo)=>{

   await page.goto('https://the-internet.herokuapp.com/') ;

   await page.locator('a').nth(5).click();


   const tableData = await page.locator('table tbody tr').evaluateAll(rows =>
    rows.map(row => {
      return Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim());
    })
  );
  console.log(tableData); 

   const webTable_Screenshot= await page.screenshot({path:'./screenshots/webTable.png',fullpage:true});

    testInfo.attach('screenshots',{body:webTable_Screenshot,contentType:'image/png'});

  await page.locator('(//a[@href="#delete"])[1]').click();

  await expect(page).toHaveURL(/delete?/);

});