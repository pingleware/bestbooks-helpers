const assert = require("assert");
const helpers = require("../index");

describe("Googlr Adsense", function(){ 
    it("Add an Service Adjustment Entry", async function(){
        var status = await helpers.googleAdsenseEarning("2013-05-27","Service Adjustment",71.12);
        console.log(status);
    })
    it("Add an Earnings Entry", async function(){
        var status = await helpers.googleAdsenseEarning("2013-05-31","May 1-31, 2013 Earnings",70.37);
        console.log(status);
    })
    it("Receive payout from Adsense", async function(){
        await helpers.googleAdsensePayout("2024-03-31","Payout received",100.00);
    })
    it("Deposit payout into bank",async function(){
        await helpers.googleAdsenseReceivePayout("2024-03-31","Bank Deposit",100.00);
    })
})