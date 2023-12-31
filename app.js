import express from 'express'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

//retornar o objeto por id
function buscarClubePorId(id) {
    return clubes.filter( clube => clube.id ==id)
}

//pegar a posicao ou index no array por id
function buscarIndexClube(id) {
    return clubes.findIndex( clube => clube.id == id )
}

// rotas
app.get('/clubes', (req, res) => {
    res.status(200).send(clubes)
})

app.get('/clubes/:id', (req, res) => {
    res.json(buscarClubePorId(req.params.id))
})

app.post('/clubes', (req, res) => {
    clubes.push(req.body)
    res.status(201).send('clube cadastrado com  sucesso!')
})

app.delete('/clubes/:id', (req, res) => {
    let index = buscarIndexClube(req.params.id)
    clubes.splice(index, 1)
    res.send('clube com id '+(req.params.id)+' excluido com sucesso!')
})

app.put('/clubes/:id', (req, res) => {
    let index = buscarIndexClube(req.params.id)
    clubes[index].clube = req.body.clube
    clubes[index].grupo = req.body.grupo
    res.json(clubes)
})

export default app