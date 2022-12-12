const express = require("express")
const { register, login, uploadAvatar, getAlltrip, getAllUser } = require("../controllers/user.controllers")
const { authenticate } = require("../middleware/auth/authenticate")
const { uploadImage } = require("../middleware/upload/upload_img")
const { User } = require("../models/index")
const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/all-trip", getAlltrip)
userRouter.get("/", getAllUser)

userRouter.post("/upload-avatar", authenticate, uploadImage("user"), uploadAvatar)


module.exports = {
    userRouter
}