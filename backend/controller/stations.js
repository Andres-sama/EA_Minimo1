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
function getBikesofStation(req, res){
    let stationId = req.params.stationId
    Stations.findById({_id: stationId}, (err,resultado) =>{
        if (err) return res.status(500).send( `Error al realizar la petición en la base de datos: ${err} `)
        if (!resultado) return res.status(404).send('No esta en esta station')
        res.status(200).send(resultado)
        console.log("detalle de la station " + resultado)
    })

}
//lista de las bikes que no estan en la station
function getBikesnotofStation(req, res){
    let stationId = req.params.placeId
    let i;
    let result = [];
    Stations.findById({_id: stationId}, (err,resultado) =>{
        Bikes.find({}, (err, bikes) => { 
            if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
            if (!bikes) return res.status(404).send({message: 'No hay bikes en la bbdd'})            
            for( i='0'; i<'20'; i++){ 
                if(bikes._id |= resultado.bike._id){
                    result = result + bike._id;
                }   
            }
        res.status(200).send(resul)
        console.log("bicis que no estan asignadas" + result)
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
    getBikesnotofStation,
    getBikesofStation
}