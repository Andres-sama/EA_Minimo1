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
async function addBikeStation(req, res) {
    try{
        const bikeId = req.body.bikeId;
        const stationId = req.body.stationId;

        console.log(`StationID: ${stationId}, BikeID: ${bikeId}`);

        let bikeFound = await Bikes.findById(bikeId);

        if (!bikeFound) {
            return res.status(404).send({message: 'Bike not found'})
        } else if (bikeFound.assigned === true) {
            return res.status(500).send({message: 'Bike is assigned to another station'})
        }
        else {
            let stationUpdated = await Station.findOneAndUpdate({_id: stationId}, {$addToSet: {bikes: bikeId}});
            if (!stationUpdated) {
                return res.status(404).send({message: 'Station not found'})
            }
            let bikeUpdated = await Bike.findByIdAndUpdate({_id: bikeId}, {assigned: "true"});
            console.log(bikeUpdated);
        }
        res.status(200).send({message: "Bike added successfully to the station"})
    } catch(err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).send({err: err.message, code: err.code})
        }
        res.status(500).send(err)
    }
}

//añadir bike a station
function addBiketoStation (req, res) {
    let stationId = req.params.stationId
    let bikeId = req.params.bikeId
    console.log("Asigno en la station:  "+stationId + " la bike " + bikeId)
    Stations.bikes.status = true;
    Stations.update({_id: stationId}, {"$addToSet": {"bikes": bikeId}}, (err, resultado) => {
        console.log(resultado)
        if(err) res.status(500).send(`Error al añadir bici ${err}`)
        if(!resultado) return res.status(404).send('La station no esta en la bbdd')
        res.status(200).send(resultado)
    })
}

//eliminar bike de station
function deleteBike (req, res)  {
    let stationId = req.params.stationId
    let bikeId = req.params.bikeId 

    Stations.update({_id: stationId}, {"$pull": {"bikes": {$in: [bikeId]}}}, (err, resultado) => {
        console.log(resultado)
        if(err) res.status(500).send(`Error al añadir bike ${err}`)
        if(!resultado) return res.status(404).send('La station no esta en la bbdd')
        res.status(200).send(resultado)
    }) 
}

module.exports = {
    getStations,
    deleteBike,
    addBiketoStation,
    getBikesofStation
}