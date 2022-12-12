const express = require("express")
const Fingerprint = require("express-fingerprint")
const path = require("path")
const { sequelize } = require("./models/index")
const { rootRouter } = require("./routers/index")
const app = express()
const port = process.env.PORT || 3000



//cài đặt finger print
app.use(Fingerprint())


app.use(express.json())
//static folder
const publicPathDirectory = path.join(__dirname, "./public")
app.use("/public", express.static(publicPathDirectory))
//dùng router
app.use("/api/v1", rootRouter)
//lắng nghe kết nối
app.listen(port, async () => {
    console.log(`App listening on http://localhost:${port}`)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})