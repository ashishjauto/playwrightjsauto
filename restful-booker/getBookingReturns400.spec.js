const{test,expect,request} = require('@playwright/test')
 

/**
 * This is example to validate client side errors for 400 
 *  test validate to 418 ,404
 * 
 */


test('get booking id in text plain with status code 418', async () => {
    const apiContext = await request.newContext();
  
    const response200 = await apiContext.get('https://restful-booker.herokuapp.com/booking/1', {
      headers: {
         'Accept': 'text/plain',
              }
    });

    console.log(await response200);
    expect(response200.status()).toBe(418);


});

test.only('get booking id in xml with status code', async () => {
    const apiContext = await request.newContext();
  
    const response200 = await apiContext.get('https://restful-booker.herokuapp.com/booking/22', {
      headers: {
         'Content-Type': 'xml',
              }
    });

    console.log(await response200);
    expect(response200.status()).toBe(404);


});