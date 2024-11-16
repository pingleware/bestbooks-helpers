const assert = require('assert');
    const bondPremium = require('../index');
    const {
      Model,
    } = require("@pingleware/bestbooks-core");

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    describe('bondPremium Testing', () => {
      let model, date, dateString;

      before(async()=>{
        date = new Date().toISOString().split("T")[0];
        dateString = new Date().toDateString();
        model = new Model();
      })

      beforeEach(async function() {
        await delay(1000); // Delay of 1 second before each test
      });

      after(async()=>{
        await model.insertSync("DELETE FROM ledger;");
        await model.insertSync("DELETE FROM accounts");
        await model.insertSync("DELETE FROM journal");
        await model.insertSync("DELETE FROM company");
        await model.insertSync("DELETE FROM users");
        await model.insertSync("UPDATE sqlite_sequence SET seq=0 WHERE name='users';");
        await model.insertSync("UPDATE sqlite_sequence SET seq=0 WHERE name='company';");
        await model.insertSync("UPDATE sqlite_sequence SET seq=0 WHERE name='journal';");
        await model.insertSync("UPDATE sqlite_sequence SET seq=0 WHERE name='ledger';");
        await model.insertSync("UPDATE sqlite_sequence SET seq=0 WHERE name='accounts';");
      })

      it('should verify bondPremium does exist', () => {
        // Sample test
        assert.ok(bondPremium, 'bondPremium should be defined');
      });

      // TODO: insert specific test case for the helper function below

      // TODO: add specific test case verification to confirm ledger modification
      // delete if not applicable
      it("should show ledger table contents",async()=>{
        const result = await model.querySync("SELECT * FROM ledger");
        console.log(result)
      })

      it("should show the journal table contents",async()=>{
        const result = await model.querySync("SELECT * FROM journal");
        console.log(result)
      })

      it("should show the accounts table contents",async()=>{
        const result = await model.querySync("SELECT * FROM accounts");
        console.log(result)
      })
    });