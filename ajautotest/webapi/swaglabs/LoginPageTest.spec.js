
import {test,expect} from '@playwright/test';

import { LoginPage } from './LoginPage';


 

test('HomePage_Support', async ({ page },testInfo) => {

  const loginTest = new LoginPage(page);

  loginTest.navigate();
});



