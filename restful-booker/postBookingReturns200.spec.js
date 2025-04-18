


const{test,expect,request} = require('@playwright/test')
 

/**
 * This is example to validate post 200 
firstname	String	 Firstname for the guest who made the booking
lastname	String	 Lastname for the guest who made the booking
totalprice	Number	 The total price for the booking

depositpaid	Boolean	 Whether the deposit has been paid or not
checkin	    Date	 Date the guest is checking in
checkout	Date	 Date the guest is checking out

additionalneeds	String	 Any other needs the guest has
 * 
 */


test('post booking application/json with status code 200', async () => {
    const apiContext = await request.newContext();
  
    const response200 = await apiContext.post('https://restful-booker.herokuapp.com/booking/', {
        data: {
            firstname: "ashish",
            lastname: "jaiswal",
            totalprice: 1000,
            depositpaid: true,
            bookingdates: {
              checkin: "2025-04-13",
              checkout: "2025-04-21",
            },
            additionalneeds: "super bowls",
          },
      headers: {
         'Content-Type': 'application/json',
              }
    });

    console.log(await response200.json());
    expect(response200.status()).toBe(200);


});