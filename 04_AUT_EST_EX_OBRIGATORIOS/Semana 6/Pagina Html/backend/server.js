const express = require("express")
const app = express()
const port = 3055
app.use(express.static("../frontend/"));
app.get("/",(req,res)=>{
    res.render("index.html")
})
app.listen(port, () => {
console.log("o seu servidor está rodando http://localhost:3055")
})


