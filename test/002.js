const helpers = require("../index");

var lotnumber = new Date().getTime() + Math.random();

describe("Inventory Testing", function(){
    it("purchase 25lbs of bread flour",async function(){
        await helpers.inventoryRawMaterials(new Date().toISOString(),"purchase 25lbs of bread flour",25.00);
    })
    it("transfer 4 cups of bread flour to WIP inventory (4c=2lbs, =$1.90)", async function(){
        await helpers.inventoryWIP(new Date().toISOString(),`using 4 cups of flour for lot #${lotnumber}`,1.90);
    })
    it("job cost for making a dozen bagels is 1.90 (hypothetically only use a single ingredient)", async function(){
        await helpers.inventoryFinishedGoods(new Date().toISOString(),`job cost for dozen bagels for lot #${lotnumber}`,1.90);
    })
    it("sold 3 bagels at $5.00 each with a COGS of $1.90/12", async function(){
        var txdate = new Date().toISOString();
        await helpers.inventorySold(txdate,`Sold 3 begals from lot #${lotnumber}`,Number(1.90/12) * 3);
        await helpers.salesCash(txdate,`Sold 3 begals from lot #${lotnumber}`,15.00);
    })
});
