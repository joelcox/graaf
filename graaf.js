(function(_) {

	var G = {
		version: '0.1a'
	}

	G.Network = function() {
		this.nodes = {}
	}

	G.Network.prototype = {
		// Add a node to the netowkr
		addNode: function(node) {
			// Don't allow overwriting of nodes implicitly
			if (_.has(this.nodes, node.id)) {
				throw new Error("There already is a node with this identifer \
please use `replaceNode` to explicitly replace a node.");
			}

			this.nodes[node.id] = node;
		},

		// Traverse all the nodes and their edge and adds
		// those the to Raphael paper.
		draw: function(paper) {
			// First randomize the position of the node. Later this will
			// be replaced by something like ForceAtlas.
			_.map(this.nodes, function(node) { node.randomizePosition(paper) });

			// Next up, the edges, so we put those below the nodes
			var nodes =  this.nodes;
			_.map(this.nodes, function(node) { node.drawEdges(paper, nodes) });

			_.map(this.nodes, function(node) { node.drawNode(paper) });
		},

		renderTo: function(id) {
			var container = document.getElementById(id);
		}
	}

	// Node
	G.Node = function(id, params) {
		this.id = id;
		this.radius = 15;
		this._to = [];
		this.x = 0;
		this.y = 0;

		return this;
	}

	G.Node.prototype = {

		// Allows you to specify the position of the node
		at: function(x, y) {
			this.x = x;
			this.y = y;
			return this;
		},

		// Specify a set of connected nodes by their identifier
		to: function(identifier) {
			this._identifierToEdge('_to', identifier);
			return this;
		},

		// Return the degree count of incoming and outgoign node
		degree: function() {
			return this._to.length;
		},

		// Adds the edges to to the correct array
		_identifierToEdge: function(type, id) {
			if (_.isArray(id)) {
				this[type] = _.union(this[type], id);
			} else {
				// Only add the adge if it isn't already in the list
				if (this[type].indexOf(id) >= 0) {
					throw new Error("There already is an edge to this identifer.");
				}
				this[type].push(id);
			}
		},

		// Assigns a random position to the node within the bounds of the paper
		randomizePosition: function(paper) {
			if (_.isUndefined(this.x) && _.isUndefined(this.y)) {
				this.x = Math.floor(Math.random() * paper.width);
				this.y = Math.floor(Math.random() * paper.height);
			}
		},

		// Creates a seperate Raphael shape for the node itself
		drawNode: function(paper) {
			paper.circle(this.x, this.y, this.radius).attr({
				'fill': 'rgb(189, 222, 242)',
				'stroke-width': 2,
				'stroke': 'rgb(123, 189, 229)'
			});
		},

		drawEdges: function(paper, nodes) {
			var originNode = this;
			_.forEach(this._to, function(id) {
				var destinationNode = nodes[id];

				paper.path('M' + originNode.x + ' ' + originNode.y + 'L' +
				destinationNode.x + ' ' + destinationNode.y).attr({
					'stroke-width' : 2,
					'stroke': 'rgba(179, 179, 179)'
				});
			});
		},

	}

	G.ForceAtlas2 = {

		gravity: function(node, gravityConst, centerNode) {
			if (typeof gravityConst === 'undefined') gravityConst = 1;
			var nodeGravity = gravityConst * (node.degree() + 1);

			// If the center node is defined we're calculating 'strong' grav.
			if (typeof centerNode === 'undefined') return nodeGravity;
			return G.utils.distance(node, centerNode) * nodeGravity;
		}

	}

	// General utilities
	G.utils = {
		// Calculate the Euclidean distance between two nodes
		distance: function(p, q) {
			return Math.sqrt(Math.pow((p.x - q.x), 2) + Math.pow((p.y - q.y), 2));
		}
	}


	// Assign it to the window DOM object
	if (typeof window !== 'undefined') {
		window.Graaf = G;

	// Export the Node.js module
	} else if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = G;
		}
		exports.Graaf = G;
	} else {
		root.Graaf = G;
	}

})(_);