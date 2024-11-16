const assert = require('assert');
    const postageExpense = require('../index');
    const {
      Model,
    } = require("@pingleware/bestbooks-core");

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    describe('postageExpense Testing', () => {
      let model;

      before(async()=>{
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

      it('should verify postageExpense does exist', () => {
        // Sample test
        assert.ok(postageExpense, 'postageExpense should be defined');
      });

      // TODO: insert specific test case for the helper function below

      // TODO: add specific test case verification to confirm ledger modification
      // delete if not applicable
      it("should show ledger contents",async()=>{
        const model = new Model();
        const result = await model.querySync("SELECT * FROM ledger");
        console.log(result)
      })
    });