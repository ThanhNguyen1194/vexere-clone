const express = require("express")
const { getAllTicket } = require("../controllers/ticket.controllers")
const ticketRouters = express.Router()


ticketRouters.get("/", getAllTicket)


module.exports = {
    ticketRouters
}