const assert = require('assert');
    const cardPayment = require('../index');
    
    describe('cardPayment Testing', () => {
      it('should verify cardPayment does exist', () => {
        // Sample test
        assert.ok(cardPayment, 'cardPayment should be defined');
      });
    });