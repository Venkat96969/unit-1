// Initialize Express Router
let router = require('express').Router();

// Set Default API Response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

// Import Bio Controller
var bioController = require('./bioController');

// Bio Routes
router.route('/bio')
    .get(bioController.index)    // Handle GET requests to /bio
    .post(bioController.add);    // Handle POST requests to /bio

router.route('/bio/:bio_id')
    .get(bioController.view)     // Handle GET requests to /bio/:bio_id
    .patch(bioController.update) // Handle PATCH requests to /bio/:bio_id
    .put(bioController.update)   // Handle PUT requests to /bio/:bio_id
    .delete(bioController.delete); // Handle DELETE requests to /bio/:bio_id

// Export API Routes
module.exports = router;
