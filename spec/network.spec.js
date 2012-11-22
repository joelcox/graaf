var Graaf = require('../graaf.js').Graaf;

describe('A network', function() {

	var net = new Graaf.Network();

	it('is an object', function() {
		expect(typeof net).toEqual('object');
	});

	net.addNode(new Graaf.Node('foo'));

	it('can have a node', function() {
		expect(typeof net.nodes.foo).toEqual('object');
	});

	it('can\'t have nodes replaced implicitly', function() {
		expect(function() {
			net.addNode(new Graaf.Node('foo'))
		}).toThrow('There already is a node with this identifer please use ' +
		'`replaceNode` to explicitly replace a node.')
	});

});