// bioModel.js
var mongoose = require('mongoose');

// Schema definition
var bioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

// Updated get method
module.exports.get = function (limit) {
    return Bio.find().limit(limit).exec();
};
