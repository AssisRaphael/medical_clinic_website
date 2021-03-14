/**
 * Este módulo é responsável por definir as rotas da aplicação
 */

const express = require('express')
const rotas = express.Router()
//const path = require('path');
const database = require('../models/database');

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

rotas.get('/cadastro-endereco', (req,res) => {
    res.render('cadastro-endereco');
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
 */
 
 
 rotas.post('/add-endereco',function(req, res){
     database.Enderecos.create({
         nome: req.body.nome,
         cpf: req.body.cpf,
         cep: req.body.cep,
         logradouro: req.body.logradouro,
         bairro: req.body.bairro,
         cidade: req.body.cidade,
         estado: req.body.estado
     }).then(function (){
         res.send('Usuário cadastrado com sucesso!');
         res.redirect("/")
     }).catch(function(erro){
         res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
         console.log("erro: "+erro)
     })  
 })


module.exports = rotas