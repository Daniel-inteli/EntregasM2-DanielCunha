const express = require("express")
const app = express()
const port = 3055
const sqlite3 = require("sqlite3").verbose()
const sqlite = require("sqlite")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
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
app.post("/inserir", (req, res) => {
    async function getNome() {
    const db = await sqlite.open({ filename: "./bancodeDados.db", driver: sqlite3.Database })
    const result = await db.run(`INSERT INTO userInfo (Nome) VALUES (?)`,[req.body.nome])
    
    }
    getNome()
    res.status(200).send()


})
app.put("/atualizar", (req,res) => {
    async function getUpdate() {
        const db = await sqlite.open({ filename: "./bancodeDados.db", driver: sqlite3.Database })
        const result = await db.run(`UPDATE userInfo SET numero = ? WHERE id = 1`, [req.body.numero,])

    }
    getUpdate()
    res.status(200).send()

})
app.listen(port, () => {
    console.log("o seu servidor está rodando http://localhost:3055")
})


