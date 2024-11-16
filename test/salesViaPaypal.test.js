const assert = require('assert');
    const salesViaPaypal = require('../index');
    const {
      Model,
    } = require("@pingleware/bestbooks-core");

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    describe('salesViaPaypal Testing', () => {
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

      it('should verify salesViaPaypal does exist', () => {
        // Sample test
        assert.ok(salesViaPaypal, 'salesViaPaypal should be defined');
      });

      it("should show ledger contents",async()=>{
        const model = new Model();
        const result = await model.querySync("SELECT * FROM ledger");
        console.log(result)
      })
    });