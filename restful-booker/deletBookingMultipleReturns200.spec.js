
const{test,expect,request}=require('@playwright/test')
const { json } = require("stream/consumers");

const tokenRequest = require("../test-data/token_request_body.json");
 

const{RestfulBookerAuthorizationCode}=require('../pom/restapi/restful-booker/RestfulBookerAuthorizationCode.js')

 

const test_data = 
[
{ bookingId:1816},
{ bookingId:1818},
{ bookingId:1819},
{ bookingId:1820},
{ bookingId:1821},
{ bookingId:1823} 

];


test_data.forEach(({ bookingId  }) => {
    test(`Login test for ${bookingId}`, async ({request}) => {
        const restfulBookerAuthorizationCode= new RestfulBookerAuthorizationCode();
        let tokenBe= (await restfulBookerAuthorizationCode.generateToken(tokenRequest)).json();
        
        const tokenValue = await tokenBe;
        
        const extract =await  tokenValue.token;
     
        
        console.log(extract);
    
        const apiContext = await request.newContext();
    
        const table= 'token='+extract;
        console.log(table);
      
       const response200 = await apiContext.delete('https://restful-booker.herokuapp.com/booking/'+bookingId, {
             
          headers: {'Content-Type': 'application/json',
                    'Cookie': table
                 
                  }
                 
        })
        
            console.log(response200)
    expect(response200.status()).toBe(201);  
    });
  });



 