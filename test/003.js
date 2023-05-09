const helpers = require("../index");


describe("Query Users by Type", function(){
    it("get all vendors",async function(){
        const vendors = await helpers.getUsersByType("vendor");
        console.log(vendors);
    })
    it("get all customers", async function(){
        const customers = await helpers.getUsersByType("customer");
        console.log(customers);
    })
    it("get all internal users", async function(){
        const users = await helpers.getUsersByType("internal");
        console.log(users);
    })
});
