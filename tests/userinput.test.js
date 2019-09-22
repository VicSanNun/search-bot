const assert = require('assert');
const UserInput = require('../classes/UserInput');

const SEARCH_TERM_MOCK = 'Raul Seixas';
const PREFIX_TERM_MOCK = 0;

const input = new UserInput(SEARCH_TERM_MOCK, PREFIX_TERM_MOCK);

describe('User Input Tests', function() {
    it('Search Term test', function() {
        const result = input.getCompleteSearchTerm();
        const expected = {'searchTerm': SEARCH_TERM_MOCK, 'prefix': 0};

        assert.deepEqual(result, expected);
    });
    
});

