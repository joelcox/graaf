var Graaf = require('../graaf.js').Graaf;

describe('Force Atlas 2', function() {

	describe('has an utility function that', function() {

		it('can calculate the gravity on a node (F_g)', function() {

			// Set up a node with degree two
			var n1 = new Graaf.Node('foo').to(['spam', 'eggs']);
			expect(Graaf.ForceAtlas2.gravity(n1)).toEqual(3);

		});

		it('can calculate the gravity on a node (F_g) with a variable ' +
			'gravitational constant', function() {

			// Gravitational constant
			var gravitationalConst = 3.0;

			// Set up a node with degree two
			var n1 = new Graaf.Node('foo').to(['spam', 'eggs']);
			expect(Graaf.ForceAtlas2.gravity(n1, gravitationalConst)).toEqual(9);

		});

		it('can calculate the \'strong\' gravity on a node (F_g)',
			function() {

			// Set up a node with degree two, plus a proxy for the center
			var n1 = new Graaf.Node('foo').to(['spam', 'eggs']);
			var center = new Graaf.Node().at(10, 5);

			expect(Graaf.ForceAtlas2.gravity(n1, 1, center))
				.toEqual(33.54101966249685);

		});

	});

});