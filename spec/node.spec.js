var Graaf = require('../graaf.js').Graaf;

describe('A node', function() {

	var node = new Graaf.Node('foo');

	it('is an object', function() {
		expect(typeof node).toEqual('object');
	});

	it('its initial identifier is `foo`', function() {
		expect(node.id).toEqual('foo');
	});

	node.to('bar');

	it('can have an outgoing edge', function() {
		expect(node._to[0]).toEqual('bar');
	});

	it('can\'t have multiple edges to the same node', function() {
		expect(function() {
			node.to('bar');
		}).toThrow('There already is an edge to this identifer.');
	});

	node.to(['spam', 'eggs']);
	it('can have mutlitple edges added to it', function() {
		expect(node._to.length).toEqual(3);
	});

	it('has a degree', function() {
		expect(node.degree()).toEqual(3);
	});

	it('can be positioned using', function() {
		node.at(10, 5);
		expect(node.x).toEqual(10);
		expect(node.y).toEqual(5);
	});

	it('allows you to chain the `at` method', function() {
		expect(typeof new Graaf.Node('foo').at(3, 10)).toEqual('object');
	});

	it('allows you to chain the `to` method', function() {
		expect(typeof new Graaf.Node('foo').to('bar')).toEqual('object');
	});

	it('is positioned within the bounds of the paper', function() {
		node.randomizePosition({width: 100, height: 200});

		expect(node.x).toBeLessThan(101);
		expect(node.x).toBeGreaterThan(-1);

		expect(node.y).toBeLessThan(201);
		expect(node.y).toBeGreaterThan(-1);
	});

});