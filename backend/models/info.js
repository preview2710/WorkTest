const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let infoSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    }
}, {
    collection: 'info'
})

module.exports = mongoose.model('info', infoSchema)