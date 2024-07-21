// bioController.js
// Import Bio Model
Bio = require('./bioModel');

// For index
exports.index = async function (req, res) {
    try {
        let bio = await Bio.get();
        res.json({
            status: "success",
            message: "Got Bio Successfully!",
            data: bio       
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err
        });
    }
};

// For creating new bio
exports.add = async function (req, res) {
    try {
        let bio = new Bio({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        });
        let savedBio = await bio.save();
        res.json({
            message: "New Bio Added!",
            data: savedBio
        });
    } catch (err) {
        res.json(err);
    }
};

// View Bio
exports.view = async function (req, res) {
    try {
        let bio = await Bio.findById(req.params.bio_id).exec();
        if (!bio) {
            return res.status(404).json({
                status: "error",
                message: "Bio not found"
            });
        }
        res.json({
            message: 'Bio Details',
            data: bio
        });
    } catch (err) {
        res.send(err);
    }
};

// Update Bio
exports.update = async function (req, res) {
    try {
        let bio = await Bio.findById(req.params.bio_id).exec();
        if (!bio) {
            return res.status(404).json({
                status: "error",
                message: "Bio not found"
            });
        }
        bio.name = req.body.name ? req.body.name : bio.name;
        bio.email = req.body.email;
        bio.phone = req.body.phone;
        bio.address = req.body.address;
        let updatedBio = await bio.save();
        res.json({
            message: "Bio Updated Successfully",
            data: updatedBio
        });
    } catch (err) {
        res.json(err);
    }
};

// Delete Bio
exports.delete = async function (req, res) {
    try {
        let result = await Bio.deleteOne({ _id: req.params.bio_id }).exec();
        if (result.deletedCount === 0) {
            return res.status(404).json({
                status: "error",
                message: "Bio not found"
            });
        }
        res.json({
            status: "success",
            message: 'Bio Deleted'
        });
    } catch (err) {
        res.send(err);
    }
};
