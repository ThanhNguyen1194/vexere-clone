const express = require("express")
const { createStation, getAllStation, getDetailStation, updateStation, deleteStation } = require("../controllers/station.controller")
const { authenticate } = require("../middleware/auth/authenticate")
const { authorize } = require("../middleware/auth/authorize")
const { checkExist } = require("../middleware/validations/checkExist")
const { Station } = require("../models/index")
const stationRouter = express.Router()

stationRouter.post("/", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), createStation)
stationRouter.get("/", getAllStation)
stationRouter.get("/:id", checkExist(Station), getDetailStation)
stationRouter.put("/:id", checkExist(Station), updateStation)
stationRouter.delete("/:id", authenticate, checkExist(Station), deleteStation)


module.exports = {
    stationRouter
}