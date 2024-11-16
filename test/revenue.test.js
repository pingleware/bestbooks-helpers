const assert = require('assert');
    const revenue = require('../index');
    
    describe('revenue Testing', () => {
      it('should verify revenue does exist', () => {
        // Sample test
        assert.ok(revenue, 'revenue should be defined');
      });
    });