const express = require("express")
const app = express()
const port = 3000
const listaDeFilmes = require("./model/filmes-lista.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
}) //função de callback

// == igual || "1" = 1 (string e número)
// === idêntico || "1" diferente de 1 (string e número)

app.get("/filmes", (req, res) => {
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano
    const filmeEscolhido = listaDeFilmes.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLocaleLowerCase();
        }
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item 
    })
    res.json(filmeEscolhido)
})

app.get("/filmes/:id", (req, res) =>{
    const id = req.params.id
    const filmeEscolhido = listaDeFilmes.filter((item, index) => item.id == id)
    res.json(filmeEscolhido)
})


app.post("/filmes", (req, res) => {
    const body = req.body 

    listaDeFilmes.push(body)

    res.json(listaDeFilmes)
})

app.listen(port, () => {
    console.log("API está escutando na porta 3000")
})


//HOST = localhost 
// PORT = 3000
//http://HOST:PORT -> http://localhost:3000
