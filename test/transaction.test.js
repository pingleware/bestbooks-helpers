const assert = require('mocha');
const helpers = require("../index");

describe("Transaction Testing", function(){
    it("get transactions", async function(){
        try {
            var account = "Unearned Revenue";
            var type = 0;
            var begin_date = "2023-01-01";
            var end_date = "2023-12-31";
            var transactions = await helpers.getTransactions(account, type, begin_date, end_date);
            //expect(transactions.length).to.greaterThan(0,"Transactions exists");
        } catch(error) {    
            
        }
    })
});
