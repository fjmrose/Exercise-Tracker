const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    log: {
        run: { type: Number, default: 0 }, 
        gym: { type: Number, default: 0 }, 
        swim: { type: Number, default: 0 }, 
        yoga: { type: Number, default: 0 } 
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User