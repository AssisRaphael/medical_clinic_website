/**
 * Este módulo é responsável por definir as rotas da aplicação
 */

const express = require('express')
const rotas = express.Router()
//const path = require('path');
//const database = require('../models/database');

//Página inicial do site
rotas.get('/', (req,res) => {
    res.render('home');
})

rotas.get('/contato', (req,res) => {
    res.render('contato');
})

rotas.get('/sobre', (req,res) => {
    res.render('sobre');
})

rotas.get('/clinicas', (req,res) => {
    res.render('clinicas');
})

/*
rotas.get('/apartamentos', function(req, res){
    database.Apartamentos.findAll().then(function(apartamentos){
         res.render('home',{imovel: apartamentos})
     })
 })
 
rotas.get('/casas', function(req, res){
     database.Casas.findAll().then(function(casas){
          res.render('home',{imovel: casas})
      })
})
 
rotas.get('/cadastrar-imovel',function(req, res){
     res.render('formulario_imovel');
 })
 
 rotas.get('/cadastrar-usuario',function(req, res){
     res.render('formulario_usuario');
 })
 
 rotas.post('/add-imovel',function(req, res){
     if(req.body.tipo==1){//Apartamento
         database.Apartamentos.create({
             titulo: req.body.titulo_imovel,
             descricao: req.body.descricao_imovel,
             comodidades: req.body.comodidades_imovel,
             endereco: req.body.endereco_imovel,
             cep: req.body.cep_imovel,
             num_quartos: req.body.num_quartos,
             num_banheiro: req.body.num_banheiros,
             num_garagem: req.body.num_garagens,
             area: req.body.area_imovel,
             aluguel: req.body.aluguel,
             condominio: req.body.condominio,
             iptu: req.body.iptu,
             imagem: req.body.imagem
         }).then(function (){
             //res.send('Apartamento cadastrado com sucesso!');
             res.redirect("/")
         }).catch(function(erro){
             res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
             console.log("erro: "+erro)
         })
     } else{//Casa
         database.Casas.create({
             titulo: req.body.titulo_imovel,
             descricao: req.body.descricao_imovel,
             comodidades: req.body.comodidades_imovel,
             endereco: req.body.endereco_imovel,
             cep: req.body.cep_imovel,
             num_quartos: req.body.num_quartos,
             num_banheiro: req.body.num_banheiros,
             num_garagem: req.body.num_garagens,
             area: req.body.area_imovel,
             aluguel: req.body.aluguel,
             condominio: req.body.condominio,
             iptu: req.body.iptu,
             imagem: req.body.imagem
         }).then(function (){
             //res.send('Casa cadastrada com sucesso!');
             res.redirect("/")
         }).catch(function(erro){
             res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
             console.log("erro: "+erro)
         })
     }
 })
 
 rotas.post('/add-usuario',function(req, res){
     database.Usuarios.create({
         cpf: req.body.cpf,
         nome: req.body.nome,
         telefone: req.body.telefone,
         renda: req.body.renda,
         senha: req.body.senha
     }).then(function (){
         res.send('Usuário cadastrado com sucesso!');
         res.redirect("/")
     }).catch(function(erro){
         res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
         console.log("erro: "+erro)
     })  
 })

*/

module.exports = rotas