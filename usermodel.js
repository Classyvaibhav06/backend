const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp')

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
module.exports = mongoose.model('User', userschema);
