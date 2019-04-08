'use strict'

const Station = require('../modelos/stations')
const Bike = require('../modelos/bikes')

//funciones
//listado de estaciones
function getStations(req, res) {
    Station.find({ }, (err, stations) => {
        if (err) return res.status(500).send( `Error al realizar la petición a la base de datos: ${err} `)
        if (!stations) return res.status(404).send('No hay estaciones')
        res.status(200).send(stations)
    })
}

//listado de estaciones con bikes
function getStationsconbikes(req, res) {
    //busca todos los usuarios, claudator vacio
    Station.find({ }, (err, stationsconbikes) => {
      Bike.populate(stationsconbikes, {path: "bike"}, (err, stationsconbikes) =>{
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!stationsconbikes) return res.status(404).send({message: 'No existen estaciones en la bbdd'})
        //se envia una respuesta en res, la respuesta sera un json de producto
        console.log(stationsconbikes)
        //res.send(200, { userList })
        res.status(200).send(stationsconbikes)
      })

    })
  }

//detalle de las asignaturas una por una
function getStation(req, res) {
    let stationId = req.params.stationId
    Station.findById(stationId,(err, station) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!station) return res.status(404).send(`La estacion no existe`)
        res.status(200).send({ station })
    })
}
//ver bike que pertenece a una estacion
function getBike(req, res) {
    let bikeId = req.params.bikeId
    Station.findById(bikeId, (err,bike) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!bike) return res.status(404).send(`la bike no esta en la asignatura`)
        res.status(200).send({bike})
    })
}

//listar bikes de una estacion
function getBikesdeStation(req, res) {
    let stationId = req.params.stationId

    Station.findById({_id: stationId}, (err, result) => {
        console.log(result.bikes)
        
        if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)
    
        return res.status(200).send(result.bikes)
    
    })
}


module.exports = {
    getStationsconbikes,
    getStations,
    getStation,
    getBike,
    getBikesdeStation
}