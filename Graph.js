// Instantiate a new graph
var Graph = function () {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = true;
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  // EDGES, DUDE!
  let edges = this.edges[node];

  edges.forEach((edge) => this.removeEdge(node, edge));

  delete this.nodes[node];
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return this.edges[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this.edges[fromNode] = this.edges[fromNode].filter((edge) => edge !== toNode);
  this.edges[toNode] = this.edges[toNode].filter((edge) => edge !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (callback) {
  Object.keys(this.nodes).forEach((node) => callback(node));
};
module.exports = Graph;
