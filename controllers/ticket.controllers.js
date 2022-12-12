const { Trip, User, Ticket } = require("../models/index")


const getAllTicket = async (req, res) => {
    const listTicket = await Ticket.findAll({
        include: [
            {
                model: User,
            },
            {
                model: Trip,
            }
        ]
    })
    res.status(200).send(listTicket)
}

module.exports = {
    getAllTicket
}