// playerController.js
const Player = require('./PlayerModel');

// For index
exports.index = async function (req, res) {
    try {
        const players = await Player.find();
        res.json({
            status: "success",
            message: "Got Players Successfully!",
            data: players
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};

// For creating new player
exports.add = async function (req, res) {
    const player = new Player();
    player.name = req.body.name ? req.body.name : player.name;
    player.team = req.body.team;
    player.statistics = req.body.statistics;

    try {
        await player.save();
        res.json({
            message: "New Player Added!",
            data: player
        });
    } catch (err) {
        res.json(err);
    }
};

// View Player
exports.view = async function (req, res) {
    try {
        const player = await Player.findById(req.params.player_id);
        res.json({
            message: 'Player Details',
            data: player
        });
    } catch (err) {
        res.send(err);
    }
};

// Update Player
exports.update = async function (req, res) {
    try {
        const player = await Player.findById(req.params.player_id);
        player.name = req.body.name ? req.body.name : player.name;
        player.team = req.body.team;
        player.statistics = req.body.statistics;

        await player.save();
        res.json({
            message: "Player Updated Successfully",
            data: player
        });
    } catch (err) {
        res.send(err);
    }
};

// Delete Player
exports.delete = async function (req, res) {
    try {
        await Player.deleteOne({ _id: req.params.player_id });
        res.json({
            status: "success",
            message: 'Player Deleted'
        });
    } catch (err) {
        res.send(err);
    }
};
