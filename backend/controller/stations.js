'use strict'

const Station = require('../modelos/stations')
const Bike = require('../modelos/bikes')

//funciones
//listado de estaciones
function getStations(req, res) {
    Station.find({ }, (err, resultado) => {
        if (err) return res.status(500).send( `Error al realizar la petición en la base de datos: ${err} `)
        if (!resultado) return res.status(404).send('No hay stations')
        res.status(200).send(resultado)
        console.log("LISTA DE PLACES  " + resultado)
    })
}
//eliminar bike de station
function deleteBike (req, res) {
    let bikeId = req.params.bikeId
    console.log(req.params.bikeId)
    let stationId = req.params.stationId
    console.log(req.params.stationId)

    Stations.delete({_id: stationId}, {"$push": {"bike": bikeId}}, (err, resultado) => {
        console.log(resultado)
        if(err) res.status(500).send(`Error al eliminar bici ${err}`)
        if(!resultado) return res.status(404).send('La station no esta en la bbdd')
        res.status(200).send(resultado)
    })
}

module.exports = {
    getStations,
    deleteBike
}