
const { request, expect } = require('@playwright/test');

const { json } = require("stream/consumers");

 

exports.RestfulBookerAuthorizationCode =
class RestfulBookerAuthorizationCode{

    

    async generateToken(tokenRequest){


        const apiContext = await request.newContext({
            baseURL: "https://restful-booker.herokuapp.com/" // optional
          });
        


       const tokenAPIResponse= await apiContext.post('auth', 
        
                                          { data: tokenRequest   }
                                        
                                        );

      return tokenAPIResponse;

 }














};

 