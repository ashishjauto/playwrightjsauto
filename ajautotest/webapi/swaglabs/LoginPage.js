exports.LoginPage =
class LoginPage{

    constructor (page){
        this.page= page;
        this.signInbutton= page.locator("[value='Login']");
        this.userName = page.locator("#user-name");
        this.password = page.locator("#password");

    }

    async navigate()
    {
        await this.page.goto('https://www.saucedemo.com/');
        
    }

    async userName_sendKeys(){
        await this.userName.fill('standard_user');
    }

    async password_sendKeys(){
        await this.password.fill('secret_sauce');
    }


//made erro wants to see what happens

    async password_sendKeys(){
        await this.page.locator('[data-test="login-button"]').click();
    }

};
//module.exports={LoginPage};
 