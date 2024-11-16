const assert = require('assert');
    const expense = require('../index');
    
    describe('expense Testing', () => {
      it('should verify expense does exist', () => {
        // Sample test
        assert.ok(expense, 'expense should be defined');
      });
    });