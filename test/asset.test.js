const assert = require('assert');
    const asset = require('../index');
    
    describe('asset Testing', () => {
      it('should verify asset does exist', () => {
        // Sample test
        assert.ok(asset, 'asset should be defined');
      });
    });