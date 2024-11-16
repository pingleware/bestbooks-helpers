const assert = require('assert');
    const workingHours = require('../index');
    
    describe('workingHours Testing', () => {
      it('should verify workingHours does exist', () => {
        // Sample test
        assert.ok(workingHours, 'workingHours should be defined');
      });
    });