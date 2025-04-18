
const{test,expect,request}=require('@playwright/test')
const { json } = require("stream/consumers");

const tokenRequest = require("../test-data/token_request_body.json");
 

const{RestfulBookerAuthorizationCode}=require('../pom/restapi/restful-booker/RestfulBookerAuthorizationCode.js')


test('post booking application/json with status code 200', async () => {
    const apiContext = await request.newContext();
  
    const response200 = await apiContext.delete('https://restful-booker.herokuapp.com/booking/2362', {
         
      headers: {
                'Cookie': 'token=720e8953ad5c073',
             'Content-Type': 'application/json'
              }
             
    })
    
        console.log(response200)
expect(response200.status()).toBe(201);
});


test.only('using external', async () => {
    
    const restfulBookerAuthorizationCode= new RestfulBookerAuthorizationCode();
    let tokenBe= (await restfulBookerAuthorizationCode.generateToken(tokenRequest)).json();
    
    const tokenValue = await tokenBe;
    
    const extract =await  tokenValue.token;
 
    
    console.log(extract);

    const apiContext = await request.newContext();

    const table= 'token='+extract;
    console.log(table);
  
   const response200 = await apiContext.delete('https://restful-booker.herokuapp.com/booking/2820', {
         
      headers: {'Content-Type': 'application/json',
                'Cookie': table
             
              }
             
    })
    
        console.log(response200)
expect(response200.status()).toBe(201);  
});