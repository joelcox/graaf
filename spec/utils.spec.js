var Graaf = require('../graaf.js').Graaf;

describe('A utility function called', function() {

	describe('`distance`', function() {

		it('calculate the distance between nodes', function() {
			n1 = new Graaf.Node('foo').at(2, 3);
			n2 = new Graaf.Node('bar').at(3, 5);

			expect(Graaf.utils.distance(n1, n2)).toEqual(2.23606797749979);
		});

	});

});