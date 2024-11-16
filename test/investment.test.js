const assert = require('assert');
    const investment = require('../index');
    
    describe('investment Testing', () => {
      it('should verify investment does exist', () => {
        // Sample test
        assert.ok(investment, 'investment should be defined');
      });
    });