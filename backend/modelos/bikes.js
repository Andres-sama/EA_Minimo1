'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

//esquema del alumno
const BikesSchema  = new Schema({
    name: {type: String,unique: true},
    kms: {type: String},
    description: {type: String}

})
module.exports = mongoose.model('bikes', BikesSchema)