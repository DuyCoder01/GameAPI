const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    email: { type: String, required: true, unique: true, },
    pass: { type:String, required:true}
})
module.exports = mongoose.model('User',schema) || mongoose.models.User;