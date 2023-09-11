const exp = require('express');

const server = exp();


const body_parser = require("body-parser")

//adding router
const Userrouter = require("./routers/User")

//adding middleware
server.use(body_parser.json)
server.use("/User", Userrouter)

//adding Db
require("./config/db")


//port listenner
server.listen(3000, () => console.log("hello"));