'use strict'

const express = require('express')
const stationsCtrl = require('../controller/stations')
const bikesCtrl = require('../controller/bikes')
const api = express.Router()

//LISTAS
//listar stations -OK
api.get('/stations/list', stationsCtrl.getStations)
//listar bikes -OK
api.get('/bikes/list', bikesCtrl.listarBikes)
//lista de las bikes que no estan en la station
api.get('/stations/nothere/:stationId', stationsCtrl.getBikesnotofStation)
//lista de las bike en la station
api.get('/stations/here/:stationId', stationsCtrl.getBikesofStation)

//ADD & DELETE
// añadir biike a station 
api.put('/relacion/add/:stationId/:bikeId', stationsCtrl.addBiketoStation)
// eliminar bike a station
api.delete('/relacion/delete/:stationId/:bikeId', stationsCtrl.deleteBike)

//BUSQUEDA
//Encontrar una bike por ID 
api.get('/bikes/:bikeId', bikesCtrl.getBikebyId)

module.exports = api;