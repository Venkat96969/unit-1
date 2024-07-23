// playerRoutes.js
const express = require('express');
const router = express.Router();
const playerController = require('./playerController');

// Player routes
router.route('/players')
    .get(playerController.index)
    .post(playerController.add);

router.route('/players/:player_id')
    .get(playerController.view)
    .patch(playerController.update)
    .put(playerController.update)
    .delete(playerController.delete);

// Export API routes
module.exports = router;
