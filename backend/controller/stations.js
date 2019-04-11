'use strict'

const Stations = require('../modelos/stations')
const Bikes = require('../modelos/bikes')

//funciones
//listado de estaciones
function getStations(req, res) {
    Stations.find({ }, (err, resultado) => {
        if (err) return res.status(500).send( `Error al realizar la petición en la base de datos: ${err} `)
        if (!resultado) return res.status(404).send('No hay stations')
        res.status(200).send(resultado)
        console.log("LISTA DE PLACES  " + resultado)
    })
}
//lista de las bikes que estan en la station
function getBikesofStation(req, res) {
    let stationId = req.params.stationId

    Stations.findById({_id: stationId}, (err, result) => {
        //console.log(result.bikes)
        //console.log(alumnos)
        if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)

        if(!result) return res.status(400).send({message: 'La estación no existe'})

        Bikes.find({'_id': { $in: result.bikes}}, (err, bikesStations) => {
            if(bikesStations.length == 0) {
                return res.status(204).send({message: 'No hay bicis en la estación'})
            }
            else {
                return res.status(200).send(bikesStations)
            }
        })

    })
}

//añadir una bike existente a una station
function addBiketoStation (req, res) {
    let bikeId = req.params.bikeId
    console.log(req.params.bikeId)
    let stationId = req.params.stationId
    console.log(req.params.stationId)

    Stations.update({_id: stationId}, {"$push": {"bike": bikeId}}, (err, resultado) => {
        console.log(resultado)
        if(err) res.status(500).send(`Error al añadir bike ${err}`)
        if(!resultado) return res.status(404).send('La station no esta en la bbdd')
        res.status(200).send(resultado)
    })
}

//eliminar bike de station
function deleteBike (req, res) {
    let stationId = req.params.stationId
    let bikeId = req.params.bikeId    

    Stations.findByIdAndUpdate({_id: stationId}, {"$delete": {"bike": bikeId}}, (err, resultado) => {
        
        if(err) res.status(500).send(`Error al eliminar bike ${err}`)
        if(!resultado) return res.status(404).send('La station no esta en la bbdd')
        res.status(200).send(resultado)
        console.log("delete bike " + resultado)
    })
    
}

module.exports = {
    getStations,
    deleteBike,
    addBiketoStation,
    getBikesofStation
}