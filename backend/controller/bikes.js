'use strict'
const Bike = require('../modelos/bikes')

//funciones
// buscar bike por id
function getBikebyId(req, res) {
    let bikeId = req.params.bikeId
    Bike.findById(bikeId,(err, result) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!result) return res.status(404).send(`La bike no existe`)
        res.status(200).send({ result })
    })
}
function listarBikes(req, res) {
    
    Bike.find({}, (err, bikes) => {
        if (err) return res.status(501).send({message: `Error al realizar la petición: ${err}`})
        if (!bikes) return res.status(404).send({message: 'No existen bikes en la bbdd'})
        
        console.log(bikes)
        res.status(200).send(bikes)
    })
  }


//eliminar bike
function deleteBike (req, res){
    let bikeId = req.params.bikeId
    Bike.findById(bikeId, (err, bike) => {
        if (err) res.status(500).send( `Error al eliminarla: ${err}`)
    
        bike.remove(err => {
            if (err) res.status(500).send( `Error al eliminarla: ${err}`)
            
            res.status(200).send( `bike eliminada`)
        })
    
    })

}

module.exports = {
    listarBikes,
    getBikebyId,
    deleteBike
}