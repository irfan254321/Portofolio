const cors = require("cors")
const express = require("express")

global.app = express
global.app = require("node-cron")

global.app = require("knex")({
    client : mysql,
    connection : {
        host : localhost,
        user : "root",
        password : "",
        database : "portofolio"
    }
})

app.use(cors())
app.use(express())



app.listen(3001)