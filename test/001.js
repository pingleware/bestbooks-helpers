const assert = require("assert");
const helpers = require("../index");

describe("Create Account", function(){
    it("create Cash account", async function(){
        var status = await helpers.createAccount("Cash","Cash");
        console.log(status);
    })
    it("add $5.39 deposit to Cash", async function(){
        var now = new Date().toISOString().split('T')[0] + " " + new Date().toISOString().split('T')[1];
        helpers.addTransaction("Cash","Cash",now,"Deposit",5.39,0);
    })
    it("declare a $10.00 dividend", async function(){
        var now = new Date().toISOString().split('T')[0] + " " + new Date().toISOString().split('T')[1];
        helpers.dividendDeclared(now,"Dividend of $10 declared",10.00);
    })
    it("pay the previously declared dividend", async function(){
        var now = new Date().toISOString().split('T')[0] + " " + new Date().toISOString().split('T')[1];
        helpers.dividendPaid(now,"Paying previously declared dividend",10.00);
    })
})