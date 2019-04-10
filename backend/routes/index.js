'use strict'

const express = require('express')
const stationCtrl = require('../controller/stations')
const bikeCtrl = require('../controller/bikes')
const api = express.Router()


//listar stations
api.get('/stations/listaStations', stationCtrl.getStations)
// eliminar bici de station
api.delete('/relacion/delete/:stationId/:bikeId', stationCtrl.deleteBike)
//listar bikes
api.get('/bike/listaBikes', bikeCtrl.listarBikes)

module.exports = api;