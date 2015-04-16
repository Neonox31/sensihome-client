// Local vars
var controller = require("../controllers/base.js");

module.exports = function() {
    return (
	[

	    /**
	     * GET /
	     *
	     * @description
	     *   Index
	     *
	     * @return
	     *   200
	     */
	    
	    {
			method: 'GET',
    		path: '/{param*}',
    		handler: {
        		directory: {
            		path: ['../client', '../.tmp', '../public'],
            		listing: true,
            		index: true
        		}
    		}
	    }

	]
    );
}
