/*
Este arquivo é reponsavél por instanciar um objeto do tipo sequelize e fornecer uma conexão com o banco de dados.
sequelize: Objeto do tipo Sequelize com uma instancia da conexão com o bando de dados
Sequelize: Módulo sequelize. Possui o construtuor, defines e functions do módulo.
*/ 

const Sequelize = require('sequelize');
const sequelize = new Sequelize('zizi_med','root','123456', {host:"localhost",dialect:"mysql"});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};