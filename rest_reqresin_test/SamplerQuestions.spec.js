
import {test,expect, chromium} from '@playwright/test';
import { request } from 'http';

 

test.only('Questioner',      async({page},window)   =>{
   
    /* const price1 = 5;
    const price2 = 6;
    let total = price1 + price2;
    price1=44;

    console(price1);

 */

  /*   const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      };

       console.log(person.fullName()); 


       const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
      ]);

      fruits.forEach() */



      const numbers = [1, 2, 3, 4, 5, 6];

      const result = numbers
        .filter(num => num % 2 === 0)    // [2, 4, 6]
        .map(num => num * 2)             // [4, 8, 12]
        .reduce((sum, num) => sum + num, 0); // 24
      

        




      console.log(result);  



    page.pause();
    const browser = await chromium.launch();
    const context = await browser.newContext();
 
  
 
    const page1 = page.context();
    await page1.goto("https://www.google.com");

    /* await page.setInputFiles('//input[@class=""]','path');

    const [download] = Promise.all(
        [
            page.waitForEvent('download'),
            page.click('#download')
        
        ]);

        await  download.saveAs()

        await page.waitForSelector('',{state :'visible'});
        
        
    


    await page.keyboard('test');
    await page.pdf

    page.locator('//input').waitFor({timeout:5000}); */
});

test('GET API ',async({request})=>{
const response = await request.get("");
expect(response.status()).toBe(200);




});


