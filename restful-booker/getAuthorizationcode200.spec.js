


const { json } = require("stream/consumers");

const tokenRequest = require("../test-data/token_request_body.json");
const{test,expect,request}=require('@playwright/test')

const{RestfulBookerAuthorizationCode}=require('../pom/restapi/restful-booker/RestfulBookerAuthorizationCode.js')
 
test('get authorization code in  application/json with status code 200', async ({request}) => {
 
  
    const tokenAPIResponse = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: tokenRequest,
      });
      console.log(await tokenAPIResponse.json()) 
      expect(tokenAPIResponse.ok()).toBeTruthy();
      expect(tokenAPIResponse.status()).toBe(200);

  
 
});

test.only('get authorization', async ({request}) => {
 
    const restfulBookerAuthorizationCode = new RestfulBookerAuthorizationCode();

        
    const tokne= await restfulBookerAuthorizationCode.generateToken(tokenRequest);


      console.log(await tokne.json()) 
     

  
 
});




