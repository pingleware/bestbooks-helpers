const assert = require('assert');
    const loanPayment = require('../index');
    
    describe('loanPayment Testing', () => {
      it('should verify loanPayment does exist', () => {
        // Sample test
        assert.ok(loanPayment, 'loanPayment should be defined');
      });
    });