'use strict'

const express = require('express')
const stationCtrl = require('../controller/stations')
const bikeCtrl = require('../controller/bikes')
const api = express.Router()


//listar
api.get('/station/listaStations', stationCtrl.getStations)
//detalle
api.get('/station/:stationId', stationCtrl.getStation)


//listar
api.get('/bike/listaBikes', bikeCtrl.listarBikes)
//detalle
api.get('/bike/:bikeId', bikeCtrl.getBikebyId)
//eliminar
api.delete('/bike/eliminar/:bikeId', bikeCtrl.deleteBike)



//estaciones y bikes: http://localhost:3000/api/relacion

//listado estaciones con bikes
api.get('/relacion/listaStationsConBikes', stationCtrl.getStationsconbikes)
//listas bikes de una estacion
api.get('/relacion/listaBikes/:stationId', stationCtrl.getBikesdeStation)
//detalle bike de una estacion
api.get('/relacion/bikeDeStation/:bikeId', stationCtrl.getBike)


module.exports = api;