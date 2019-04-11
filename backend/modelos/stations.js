'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//esquema 
const StationsSchema = new Schema({
    station: {type: String,unique: true},
    state: String,
    bikes:[{type: Schema.ObjectId, ref: 'bikes'}],
    description: {type: String}
   
})


module.exports = mongoose.model('Stations', StationsSchema)