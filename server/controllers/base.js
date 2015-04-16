/** Base controller **/

// Load dependencies

module.exports.index = function(request, reply) {
	reply.file('index.html');
};
