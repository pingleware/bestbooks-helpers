const assert = require('assert');
    const bankfee = require('../index');
    
    describe('bankfee Testing', () => {
      it('should verify bankfee does exist', () => {
        // Sample test
        assert.ok(bankfee, 'bankfee should be defined');
      });
    });