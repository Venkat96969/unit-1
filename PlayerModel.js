// PlayerModel.js
var mongoose = require('mongoose');

// Schema
var playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    statistics: {
        runs: Number,
        centuries: Number,
        catches: Number
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Player Model
var Player = module.exports = mongoose.model('Player', playerSchema);
