const { Router } = require("express");
const { inserirMensagemContato } = require("./service");
const { adicionarAnimalAutoIncrement } = require("./service");
const { buscarAnimalPorNome } = require("./service");
const { buscarAnimalPorId } = require("./service");
const { buscarTodosOsAnimais } = require("./service");
const { atualizarStatusDoAnimal } = require("./service");
const { deleteAnimalById } = require("./service");

const routes = new Router();

routes.post('/message',(req, res) => {
    const message = req.body

    inserirMensagemContato(message)

    res.send({message:'Mensagem Enviada'})
})

routes.post('/add',(req, res) => {
    const add = req.body

    adicionarAnimalAutoIncrement(add)

    res.send({message:'Animal Adicionado'})
})

routes.get('/search/:name',(req,res) => {
    const search_name = req.params.name

    buscarAnimalPorNome(search_name, (results) => {
        res.send({data:results})
    })

})

routes.get('/searchId/:id',(req,res) => {
    const search_id = req.params.id

    buscarAnimalPorId(search_id, (results) => {
        res.send({data:results})
    })

})

routes.get('/search',(req,res) => {

    buscarTodosOsAnimais((results) => {
        res.send({data:results})
    })

})

routes.put('/update/:id',(req,res) => {
    const animalId = req.params.id
    const body = req.body

    atualizarStatusDoAnimal(animalId, body.ativo)

    res.send({message:'Animal Status Atualizado'})
})


routes.delete('/delete/:id', (req, res) => {
    const animalId = req.params.id

    deleteAnimalById(animalId)

    res.send({message: 'Animal excluído com sucesso!'})
})


module.exports = routes