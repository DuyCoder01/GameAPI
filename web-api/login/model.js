const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    username: { type: String, required: true, unique: true, },
    password: { type: String, required: true },
    score: { type: Number },
    positionX: { type: Number},
    positionY: { type: Number },
    positionZ: { type: Number },
    scences:{type:String}
})
module.exports = mongoose.model('User', schema) || mongoose.models.User;
