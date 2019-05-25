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
api.get('/bikes/nostatus', bikesCtrl.listarBikesnoStatus)
//lista de las bike en la station
api.get('/stations/here/:stationId', stationsCtrl.getBikesofStation)

//ADD & DELETE
// añadir bike a station 
api.put('/relation/add/:stationId/:bikeId', stationsCtrl.addBiketoStation)
// eliminar bike a station
api.delete('/relation/delete/:stationId/:bikeId', stationsCtrl.deleteBike)

//BUSQUEDA
//Encontrar una bike por ID 
api.get('/bikes/:bikeId', bikesCtrl.getBikebyId)

module.exports = api;