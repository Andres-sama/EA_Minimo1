'use strict'
const mongoose = require('mongoose')
const bikesSchema = require('./bikes').schema
const Schema = mongoose.Schema

//esquema 
const StationsSchema = new Schema({
    station: {type: String,unique: true},
    bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}],
    description: {type: String}
   
})


module.exports = mongoose.model('Stations', StationsSchema)