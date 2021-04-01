/**
 * Este módulo é responsável por definir as rotas da aplicação
 */

const express = require('express')
const rotas = express.Router()
const database = require('../models/database');
const db = require('../models/bd');

const cookies = [];

hashCode = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

//Página inicial do site
rotas.get('/', (req,res) => {
    res.render('home');
})

rotas.get('/contato', (req,res) => {
    res.render('contato');
})

rotas.get('/login', (req,res) => {
    res.render('login');
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

rotas.get('/agendar-consulta', (req,res) => {
    res.render('agendar-consulta');
})

rotas.get('/cadastro-funcionarios', (req,res) => {
    if(req.session.login){
        res.render('cadastro-funcionarios');
    }else{
        res.render('home');
    }  
})

rotas.post('/add-consulta',(req,res) => {
    try {
        database.Agendas.findAll({
            where: {
                codigo_medico: req.body.medico,
                horario: req.body.horario
              }
        }).then(function verificaConsulta(agendas){  
            if(agendas.length > 0){
                    res.send("Já existe uma consulta agendada nesse horário, selecione outro horário ou médico.");
                }
            else{
                database.Agendas.create({
                    data: req.body.data,
                    nome: req.body.nome,
                    horario: req.body.horario,
                    codigo_medico: req.body.medico,
                    telefone: req.body.telefone,
                    email: req.body.email,
                }).then(function (){
                    res.send('Consulta agendada com sucesso!');
                }).catch(function(erro){
                    res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
                    console.log("erro: "+erro)
                })
            }
        });
    } catch (error) {
        console.log("#Error: "+error);
    }
})

rotas.post('/add-endereco',function(req, res){
    try {
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
        }).catch(function(erro){
            res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
            console.log("erro: "+erro)
        })  
    } catch (error) {
        console.log("#Error: "+error);
    }
})

function validateCookie(req,res, next){
    const cookie = req;
    if('session_login' in cookies){
        console.log('Usuário logado!');
        next();
    } else{
        console.log(`cookies: ${cookies}\n`);
        res.status(403).send("Usuário não cadastrado");
    }
}

rotas.post('/login',(req,res) => {
    const hash = hashCode(req.body.senha);
    const login = req.body.email;
    try {
        database.Funcionarios.findAll({
            where: {
                email: req.body.email,
                senha_hash: hash
              }
        }).then(function verificaLogin(funcionarios){  
            if(funcionarios.length > 0){
                res.cookie('session_login',login);
                cookies.push(login);
                res.render('admin');
            }
            else{
                res.send('Usuário ou senha inválido!');
            }
        });
    } catch (error) {
        console.log("#Error: "+error);
    } 
})

rotas.get('/admin',validateCookie,(req,res) => {
    res.render('sobre');
})

module.exports = rotas