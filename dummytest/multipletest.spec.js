import { test, expect, chromium } from '@playwright/test';



test('browserFixture',async({browser})=>{

     


const context = await browser.newContext();
const page =await context.newPage();

await page.goto('https://www.espncricinfo.com/series/ipl-2025-1449924/rajasthan-royals-vs-lucknow-super-giants-36th-match-1473473/full-scorecard/');
 

const tableData = await page.locator('table tbody tr').evaluateAll(rows =>
    rows.map(row => {
      return Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim());
    })
  );
  console.log(tableData); 
 
/*    
  const columnData = [];
  const rows = await page.locator('table tbody tr').all();
  for (const row of rows) {
    const cell = await row.locator('td').nth(3).innerText();
    columnData.push(cell);
  }
  console.log(columnData);*/
 



});