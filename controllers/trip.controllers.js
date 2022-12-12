const { Trip, Station } = require("../models/index")


const createTrip = async (req, res) => {
    const { fromStation, toStation, price, startTime } = req.body
    const newTrip = await Trip.create({ fromStation, toStation, price, startTime })
    res.status(201).send(newTrip)
}
const getAllTrip = async (req, res) => {
    const listTrip = await Trip.findAll({
        include: [
            {
                model: Station,
                as: "from"
            },
            {
                model: Station,
                as: "to"
            }
        ]
    })
    res.status(200).send(listTrip)
}
const getDetailTrip = async (req, res) => {
    const { id } = req.params
    const TripDetail = await Trip.findOne({
        where: {
            id
        },
        include: [
            {
                model: Station,
                as: "from"
            },
            {
                model: Station,
                as: "to"
            }
        ]
    })
    res.status(201).send(TripDetail)
}
const deleteTrip = async (req, res) => {
    const { id } = req.params
    await Trip.destroy({
        where: {
            id
        }
    })
    res.status(201).send(`đã xoá Trip có id là : ${id}`)
}
const updateTrip = async (req, res) => {
    const { id } = req.params
    const { fromStation, toStation, price, startTime } = req.body
    await Trip.update({ fromStation, toStation, price, startTime }, {
        where: {
            id
        }
    })
    res.status(200).send(`đã update thành công trip có id là : ${id}`)

}
module.exports = {
    createTrip,
    getAllTrip,
    getDetailTrip,
    deleteTrip,
    updateTrip

}