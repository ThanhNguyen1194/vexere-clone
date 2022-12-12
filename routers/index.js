const express = require("express")
const { stationRouter } = require("./station.routers")
const fingerPrintRouter = require("./test-fingerPrint")
const { ticketRouters } = require("./ticket.routers")
const { tripRouters } = require("./trip.routers")
const { userRouter } = require("./user.routers")
const rootRouter = express.Router()

rootRouter.use("/station", stationRouter)
rootRouter.use("/users", userRouter)
rootRouter.use("/trips", tripRouters)
rootRouter.use("/ticket", ticketRouters)
rootRouter.use("/fingerprint", fingerPrintRouter)

module.exports = {
    rootRouter
}