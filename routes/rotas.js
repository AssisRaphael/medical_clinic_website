/**
 * Este módulo é responsável por definir as rotas da aplicação
 */

const express = require('express')
const rotas = express.Router()
const database = require('../models/database');
const db = require('../models/bd');

const hashCode = function (s) {
    return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
}

//Página inicial do site
rotas.get('/', (req, res) => {
    console.log(req.session);
    res.render('home');
})

rotas.get('/contato', (req, res) => {
    res.render('contato');
})

rotas.get('/login', (req, res) => {
    if (req.session.isAuth) {
        res.render('admin',{session: req.session});
    } else {
        res.render('login');
    }
})

rotas.get('/sobre', (req, res) => {
    res.render('sobre');
})

rotas.get('/clinicas', (req, res) => {
    res.render('clinicas');
})

rotas.get('/nossa-equipe', (req, res) => {
    res.render('nossa-equipe');
})

rotas.get('/cadastro-endereco', (req, res) => {
    res.render('cadastro-endereco');
})

rotas.get('/agendar-consulta', (req, res) => {
    res.render('agendar-consulta');
})

rotas.get('/cadastro-funcionarios', (req, res) => {
    if (req.session.login) {
        res.render('cadastro-funcionarios');
    } else {
        res.render('home');
    }
})

rotas.get('/cadastro-pacientes', (req, res) => {
    if (req.session.login) {
        res.render('cadastro-pacientes');
    } else {
        res.render('home');
    }
})

rotas.get('/admin', (req, res) => {
    if (req.session.isAuth) {
        res.render('admin',{session: req.session});
    } else {
        res.render('login');
    }
})

rotas.get('/logout', (req, res) => {
    req.session.isAuth = false;
    res.redirect('/');
})

rotas.get('/listar-funcionarios', function (req, res) {
    if (req.session.isAuth) {
        try {
            database.Funcionarios.findAll().then(function (funcs) {
                let _funcionarios = funcs;
                database.Medicos.findAll().then(function (meds) {
                    let _medicos = meds;
                    res.render('listar-funcionarios', { funcionarios: _funcionarios, medicos: _medicos })
                });
            });  
        } catch (error) {
            console.log("#Error: " + error);
        }
    } else {
        res.render('login');
    }
})

rotas.get('/listar-todas-consultas', function (req, res) {
    if (req.session.isAuth) {
        try {
            database.Agendas.findAll().then(function (a) {
                res.render('listar-todas-consultas', { agendas: a })
            });  
        } catch (error) {
            console.log("#Error: " + error);
        }
    } else {
        res.render('login');
    }
})

rotas.get('/listar-pacientes', function (req, res) {
    if (req.session.isAuth) {
        try {
            database.Pacientes.findAll().then(function (p) {
                res.render('listar-pacientes', {pacientes: p});
            });  
        } catch (error) {
            console.log("#Error: " + error);
        }
    } else {
        res.render('login');
    }
})

rotas.get('/listar-enderecos', function (req, res) {
    if (req.session.isAuth) {
        try {
            database.Enderecos.findAll().then(function (e) {
                res.render('listar-enderecos', {enderecos: e});
            });  
        } catch (error) {
            console.log("#Error: " + error);
        }
    } else {
        res.render('login');
    }
})

rotas.get('/listar-consultas', function (req, res) {
    if (req.session.isAuth && req.session.isDoctor) {
        try {
            database.Agendas.findAll({
                where: {
                    codigo_medico: req.session.codigo
                }
            }).then(function (a) {
                res.render('listar-consultas', { agendas: a })
            });  
        } catch (error) {
            console.log("#Error: " + error);
        }
    } else {
        res.render('admin',{session: req.session});
    }
})

rotas.get('/cadastrar-funcionario', (req, res) => {
    if (req.session.isAuth) {
        res.render('cadastro-funcionarios');
    } else {
        res.render('login');
    }
})

rotas.get('/cadastrar-paciente', (req, res) => {
    if (req.session.isAuth) {
        res.render('cadastro-pacientes');
    } else {
        res.render('login');
    }
})

rotas.post('/add-consulta', (req, res) => {
    try {
        database.Agendas.findAll({
            where: {
                codigo_medico: req.body.medico,
                horario: req.body.horario,
                data: req.body.data
            }
        }).then(function verificaConsulta(agendas) {
            if (agendas.length > 0) {
                res.render("agendar-consulta",{consulta: {error: true, sucess: false}});
            }
            else {
                database.Agendas.create({
                    data: req.body.data,
                    nome: req.body.nome,
                    horario: req.body.horario,
                    codigo_medico: req.body.medico,
                    telefone: req.body.telefone,
                    email: req.body.email,
                }).then(function () {
                    res.render("agendar-consulta",{consulta: {error: false, sucess: true}});
                }).catch(function (erro) {
                    res.send('Opps, tivemos um erro ao acessar o banco de dados, tente novamente mais tarde.');
                    console.log("erro: " + erro)
                })
            }
        });
    } catch (error) {
        console.log("#Error: " + error);
    }
})

rotas.post('/add-endereco', function (req, res) {
    try {
        database.Enderecos.create({
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado
        }).then(function () {
            res.render('cadastro-endereco',{sucess: true});
        }).catch(function (erro) {
            res.render('cadastro-endereco',{sucess: false});
            console.log("erro: " + erro)
        })
    } catch (error) {
        console.log("#Error: " + error);
    }
})

rotas.post('/login', (req, res) => {
    const hash = hashCode(req.body.senha);
    const login = req.body.email;
    try {
        const func = database.Funcionarios.findAll({
            where: {
                email: req.body.email,
                senha_hash: hash
            }
        });
        
        const meds = database.Medicos.findAll({
            where: {
                email: req.body.email,
                senha_hash: hash
            }
        });

        func.then(function verificaLogin(funcionarios) {
            if (funcionarios.length > 0) {
                req.session.isAuth = true;
                req.session.isDoctor = false;
                req.session.nome= funcionarios[0].dataValues.nome;
                res.render('admin', {session: req.session});
            }
        });

        meds.then(function verificaLogin(medicos) {
            if (medicos.length > 0) {
                req.session.isAuth = true;
                req.session.isDoctor = true;
                req.session.codigo = medicos[0].dataValues.codigo;
                req.session.nome= medicos[0].dataValues.nome;
                res.render('admin', {session: req.session});
            }
            else{
                res.render(login, {loginError: true});
            }
        });
    } catch (error) {
        console.log("#Error: " + error);
    }
})

rotas.post('/get-agendas', (req, res) => {
    try {
        database.Agendas.findAll({
            where: {
                codigo_medico: req.body.medico
            }
        }).then(function (a) {
            if(a.length >= 1)
                res.render('listar-consultas',{agendas:a});
            else
                res.render('listar-consultas');
        });
    } catch (error) {
        console.log("#Error: " + error);
    }
})

rotas.post('/add-funcionario', (req, res) => {
    try {
        database.Funcionarios.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            data_contrato: req.body.data_contrato,
            salario: req.body.salario,
            senha_hash: hashCode(req.body.senha)
        }).then(function () {
            res.render('cadastro-funcionarios',{sucess: true});
        }).catch(function (erro) {
            res.render('cadastro-funcionarios',{sucess: false});
            console.log("erro: " + erro)
        })
    } catch (error) {
        console.log("#Error: " + error);
    }
})

rotas.post('/add-paciente', (req, res) => {
    try {
        database.Pacientes.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            peso: req.body.peso,
            altura: req.body.altura,
            tipo_sanguineo: req.body.tipo_sanguineo
        }).then(function () {
            res.render('cadastro-pacientes',{sucess: true});
        }).catch(function (erro) {
            res.render('cadastro-pacientes',{sucess: false});
        })
    } catch (error) {
        console.log("#Error: " + error);
    }
})

module.exports = rotas