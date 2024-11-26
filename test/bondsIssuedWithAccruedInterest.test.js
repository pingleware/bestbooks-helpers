const assert = require('assert');
    const {bondsIssuedWithAccruedInterest} = require('../index');
    const {
      Model,
      Cash,
      Liability,
    } = require("@pingleware/bestbooks-core");

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    describe('bondsIssuedWithAccruedInteres Testing', () => {
      let model, date, dateString, cash, bond, interest;

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

      it('should verify bondsIssuedWithAccruedInterest does exist', () => {
        // Sample test
        assert.ok(bondsIssuedWithAccruedInterest, 'bondsIssuedWithAccruedInteres should be defined');
      });

      it("should create the cash account",async()=>{
        cash = new Cash("Cash");
        assert.ok(cash instanceof Cash);
      })

      it("should create the bond payable liability account",async()=>{
        bond = new Liability("Bonds Payable");
        assert.ok(bond instanceof Liability);        
      })

      it("should create the interest payable liability account",async()=>{
        interest = new Liability("Interest Payable");
        assert.ok(interest instanceof Liability);
      })

      it("should issued bond at par with accrued interest",async()=>{
        await bondsIssuedWithAccruedInterest("Cash","Bonds Payable","Interest Payable",date,"bond issued",1000.00,100.00);
      })

      it("should show ledger table contents",async()=>{
        const expected = [
          {
            id: 1,
            company_id: 0,
            office_id: 0,
            account_code: '100',
            account_name: 'Cash',
            txdate: date,
            note: 'bond issued',
            ref: 1,
            debit: 1100,
            credit: 0,
            balance: 1100,
            action: 'Record',
            performed_by: 0,
            location: 0,
            due_date: 0,
            transaction_type: 'Operating'
          },
          {
            id: 2,
            company_id: 0,
            office_id: 0,
            account_code: '200',
            account_name: 'Bonds Payable',
            txdate: date,
            note: 'bond issued',
            ref: 2,
            debit: 0,
            credit: 1000,
            balance: 1000,
            action: 'Record',
            performed_by: 0,
            location: 0,
            due_date: 0,
            transaction_type: 'Operating'
          },
          {
            id: 3,
            company_id: 0,
            office_id: 0,
            account_code: '201',
            account_name: 'Interest Payable',
            txdate: date,
            note: 'bond issued',
            ref: 3,
            debit: 0,
            credit: 100,
            balance: 100,
            action: 'Record',
            performed_by: 0,
            location: 0,
            due_date: 0,
            transaction_type: 'Operating'
          }
        ];
        const result = await model.querySync("SELECT * FROM ledger");
        assert.strictEqual(result.length > 0,true);
        assert.deepStrictEqual(result,expected);
      })

      it("should show the journal table contents",async()=>{
        const expected = [
          {
            id: 1,
            name: 'General',
            company_id: 0,
            office_id: 0,
            location_id: null,
            txdate: date,
            account: 'Cash',
            ref: 1,
            debit: 1100,
            credit: 0
          },
          {
            id: 2,
            name: 'General',
            company_id: 0,
            office_id: 0,
            location_id: null,
            txdate: date,
            account: 'Bonds Payable',
            ref: 2,
            debit: 0,
            credit: 1000
          },
          {
            id: 3,
            name: 'General',
            company_id: 0,
            office_id: 0,
            location_id: null,
            txdate: date,
            account: 'Interest Payable',
            ref: 3,
            debit: 0,
            credit: 100
          }
        ];
        const result = await model.querySync("SELECT * FROM journal");
        assert.strictEqual(result.length > 0,true);
        assert.deepStrictEqual(result,expected);
      })

      it("should show the accounts table contents",async()=>{
        const result = await model.querySync("SELECT * FROM accounts");
        const expected = [
          {
            id: 1,
            created: result[0].created,
            company_id: null,
            code: 100,
            name: 'Cash',
            type: 'Asset',
            base_type: 'Asset',
            Description: null,
            Bal01: null,
            Bal02: null,
            Bal03: null,
            Bal04: null,
            Bal05: null,
            Bal06: null,
            Bal07: null,
            Bal08: null,
            Bal09: null,
            Bal10: null,
            Bal11: null,
            Bal12: null,
            Bal13: null,
            Bal14: null,
            Bal15: null,
            Bal16: null,
            Bal17: null,
            Bal18: null,
            Bal19: null,
            Bal20: null,
            Bal21: null,
            Bal22: null,
            Bal23: null,
            Bal24: null,
            Bud01: null,
            Bud02: null,
            Bud03: null,
            Bud04: null,
            Bud05: null,
            Bud06: null,
            Bud07: null,
            Bud08: null,
            Bud09: null,
            Bud10: null,
            Bud11: null,
            Bud12: null,
            Bud13: null,
            Bud14: null,
            Bud15: null,
            Bud16: null,
            Bud17: null,
            Bud18: null,
            Bud19: null,
            Bud20: null,
            Bud21: null,
            Bud22: null,
            Bud23: null,
            Bud24: null,
            Budget: null
          },
          {
            id: 2,
            created: result[1].created,
            company_id: null,
            code: 200,
            name: 'Bonds Payable',
            type: 'Liability',
            base_type: 'Liability',
            Description: null,
            Bal01: null,
            Bal02: null,
            Bal03: null,
            Bal04: null,
            Bal05: null,
            Bal06: null,
            Bal07: null,
            Bal08: null,
            Bal09: null,
            Bal10: null,
            Bal11: null,
            Bal12: null,
            Bal13: null,
            Bal14: null,
            Bal15: null,
            Bal16: null,
            Bal17: null,
            Bal18: null,
            Bal19: null,
            Bal20: null,
            Bal21: null,
            Bal22: null,
            Bal23: null,
            Bal24: null,
            Bud01: null,
            Bud02: null,
            Bud03: null,
            Bud04: null,
            Bud05: null,
            Bud06: null,
            Bud07: null,
            Bud08: null,
            Bud09: null,
            Bud10: null,
            Bud11: null,
            Bud12: null,
            Bud13: null,
            Bud14: null,
            Bud15: null,
            Bud16: null,
            Bud17: null,
            Bud18: null,
            Bud19: null,
            Bud20: null,
            Bud21: null,
            Bud22: null,
            Bud23: null,
            Bud24: null,
            Budget: null
          },
          {
            id: 3,
            created: result[2].created,
            company_id: null,
            code: 201,
            name: 'Interest Payable',
            type: 'Liability',
            base_type: 'Liability',
            Description: null,
            Bal01: null,
            Bal02: null,
            Bal03: null,
            Bal04: null,
            Bal05: null,
            Bal06: null,
            Bal07: null,
            Bal08: null,
            Bal09: null,
            Bal10: null,
            Bal11: null,
            Bal12: null,
            Bal13: null,
            Bal14: null,
            Bal15: null,
            Bal16: null,
            Bal17: null,
            Bal18: null,
            Bal19: null,
            Bal20: null,
            Bal21: null,
            Bal22: null,
            Bal23: null,
            Bal24: null,
            Bud01: null,
            Bud02: null,
            Bud03: null,
            Bud04: null,
            Bud05: null,
            Bud06: null,
            Bud07: null,
            Bud08: null,
            Bud09: null,
            Bud10: null,
            Bud11: null,
            Bud12: null,
            Bud13: null,
            Bud14: null,
            Bud15: null,
            Bud16: null,
            Bud17: null,
            Bud18: null,
            Bud19: null,
            Bud20: null,
            Bud21: null,
            Bud22: null,
            Bud23: null,
            Bud24: null,
            Budget: null
          }
        ];
        assert.strictEqual(result.length > 0,true);
        assert.deepStrictEqual(result,expected);
      })
    });