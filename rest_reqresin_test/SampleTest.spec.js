const {test,expect} = require('@playwright/test')
const { request } = require('http')


test("Get users",async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json());
    expect(response.status()).toBe(200);

});


test.only("Create users",async({request})=>{
    const response = await request.post('https://reqres.in/api/users',
                    {
                        data:{"name":"ashish","job":"QAE"},
                        headers:{"Accept":"appliation/json"}
                    } );
    console.log(await response.json());
    expect(response.status()).toBe(201);

});


