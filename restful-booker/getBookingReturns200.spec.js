
const{test,expect,request}=require('@playwright/test')



test("get bookings with status code 200",async({request},testInfo)=>{

    const response200 =(await request.get('https://restful-booker.herokuapp.com/booking/'));
   // console.log(await response200.json());

    let jsonObject = await response200.json();

    Object.entries(jsonObject).forEach(([key, value]) => {
        console.log(key.toString()+ "  " +value.toString());
        });
expect(response200.status()).toBe(200);
    
    



});

test.only("get first bookings with status code 200",async({request},testInfo)=>{

    const response200 =await request.get('https://restful-booker.herokuapp.com/booking/');
   

    let jsonObject = await response200.json();

    Object.entries(jsonObject).forEach(([key, value]) => {
        console.log(key.toString()  );
        });


        expect(response200.status()).toBe(200);
    
    



});