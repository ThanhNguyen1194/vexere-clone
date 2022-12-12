const { User, sequelize } = require("../models/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const gravatarUrl = require("gravatar-url")

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body
    try {
        //tạo avatar mặc định
        const avatarUrl = gravatarUrl(email)
        //bcrypt tao ra chuoi ngau nhien
        const salt = bcrypt.genSaltSync(10)
        //mã hoá 
        const hashPassWord = bcrypt.hashSync(password, salt)
        const newUser = await User.create({ name, email, password: hashPassWord, avatar: avatarUrl, numberPhone })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({
            where: {
                email
            }
        })
        console.log(user.dataValues.password)
        console.log(password)
        if (user) {

            const isAuth = bcrypt.compareSync(password, user.dataValues.password)
            console.log(isAuth)
            if (isAuth) {
                const token = jwt.sign({ email: user.email, type: user.type }, "Thanh123456", { expiresIn: 60 * 60 })
                res.status(200).send({ messeger: "đăng nhập thành công", token })
            } else {
                res.status(500).send({ messeger: "tài khoản hoặc mật khẩu không đúng" })
            }
        } else {
            res.status(404).send("không tìm thấy email phù hợp")
        }

    } catch (error) {

    }
}
const getAllUser = async (req, res) => {
    const listUSer = await User.findAll()
    res.send(listUSer)
}
const uploadAvatar = async (req, res) => {
    const { user } = req
    const { file } = req //lấy file từ ng dùng gửi lên
    const urlImage = `http://localhost:3000/${file.path}`
    const userFound = await User.findOne({
        where: {
            email: user.email
        }
    })
    userFound.avatar = urlImage
    await userFound.save()
    res.send(userFound)
}
const getAlltrip = async (req, res) => {
    const [result] = await sequelize.query(
        `select users.name as userName,fromStation.name as fromStation,toStation.name as toStation,trips.price from users
        inner join tickets on users.id = tickets.user_id
        inner join trips on trips.id = tickets.trip_id
        inner join stations as fromStation on fromStation.id = trips.fromStation
        inner join stations as toStation on toStation.id = trips.toStation`
    )
    res.send(result)
}
module.exports = {
    register,
    login,
    uploadAvatar,
    getAlltrip,
    getAllUser
}