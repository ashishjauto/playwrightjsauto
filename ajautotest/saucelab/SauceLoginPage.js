
exports.SauceLoginPage =
class SauceLoginPage{

constructor (page){
    this.page= page;
}

async navigate()
{
    await this.page.goto('https://saucedemo.com')
}
    
};
//module.exports={LoginPage};
 