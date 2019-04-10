'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BikesSchema = require('./bikes').schema
//esquema 
const StationsSchema = new Schema({
    station: {type: String,unique: true},
    state: String,
    bikes: [BikesSchema],
    description: {type: String}
   
})


module.exports = mongoose.model('Stations', StationsSchema)