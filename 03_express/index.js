const express = require('express')
var app = express()

app.get('/',function(req,res){
    req.setEncoding('SEJA BEM VINDO AO MEU APP')
})

app.get('/blog',function(req,res){
    res.send('UM BLOG MUITO LEGAL :3')
})

app.get('/sobre',function(req,res){
    res.send('SOBRE O BLOG')
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Seja bem vindo ' + req.params.nome + "    Sua idade é: " + req.params.idade)
})




app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost:8081')
})