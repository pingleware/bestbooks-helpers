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
})