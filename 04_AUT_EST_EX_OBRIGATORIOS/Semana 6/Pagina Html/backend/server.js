const express = require("express")
const app = express()
const port = 3055
const sqlite3 = require("sqlite3").verbose()
const sqlite = require("sqlite")

app.use(express.static("../frontend/"));
app.get("/", (req, res) => {
    res.render("index.html")
})
app.get("/curriculo", (req, res) => {

    async function getdb() {
        const db = await sqlite.open({ filename: "./bancodeDados.db", driver: sqlite3.Database })
        console.log(db)
        const result = await db.get("SELECT * FROM userInfo")
        res.status(200).json(result)
    }
    getdb()
})
app.listen(port, () => {
    console.log("o seu servidor está rodando http://localhost:3055")
})


