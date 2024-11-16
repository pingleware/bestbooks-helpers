const assert = require('assert');
    const {
      accountsReceivablePayment
    } = require('../index');
    const {
      Model,
    } = require("@pingleware/bestbooks-core");
    
    describe('accountsReceivablePayment Testing', () => {
      it('should verify accountsReceivablePayment does exist', () => {
        // Sample test
        assert.ok(accountsReceivablePayment, 'accountsReceivablePayment should be defined');
      });

      it("should Company Receives Payment on an Invoice",async()=>{
        await accountsReceivablePayment("2024-11-15","Receive payment on invoice",650.00);
      })

      it("should show ledger contents",async()=>{
        const model = new Model();
        const result = await model.querySync("SELECT * FROM ledger");
        console.log(result)
      })
    });