var Graaf = require('../graaf.js').Graaf;

describe('A utility function called', function() {

	describe('`distance`', function() {

		it('calculate the distance between nodes', function() {
			n1 = new Graaf.Node('foo');
			n1.x = 2;
			n1.y = 3;

			n2 = new Graaf.Node('bar');
			n2.x = 3
			n2.y = 5

			expect(Graaf.utils.distance(n1, n2)).toEqual(2.23606797749979);
		});

	});
	
});