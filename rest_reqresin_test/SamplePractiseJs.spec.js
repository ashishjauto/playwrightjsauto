

import {test,expect, chromium} from '@playwright/test';
import { request } from 'http';



test.only('Questioner',      async({page},window)   =>{

    const vehicles =[];
    vehicles.push("Volvo");
    vehicles.push("Tata");
    vehicles.push("Tesla");
    vehicles.push("BMW");

    console.log(vehicles);

    const desiVehicles =["Maruti","Mahindra","Ashoka"]   ;

    const newVehicle = vehicles.concat(desiVehicles);

    console.log(newVehicle);
    const list = newVehicle.entries();

    console.log(list);

   
    let text = "";
    for (let x of list) {
      text += x; 
      console.log(text,x)
    }


    const ages =[18,21,23,25];
    const filterAges =ages.filter(checkages);

        ages.flatMap()

    function checkages(age){
        return age>18;
    }


    console.log(filterAges);




    page.pause();
    const browser = await chromium.launch();
    const context = await browser.newContext();

    page.press()
 
})