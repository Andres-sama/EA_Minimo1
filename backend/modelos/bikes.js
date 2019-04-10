'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//esquema del alumno
const BikesSchema  = new Schema({
    name: {type: String,unique: true},
    kms: Number,
    description: String,
    state: {type: Boolean, default: false}

})
module.exports = mongoose.model('bikes', BikesSchema)