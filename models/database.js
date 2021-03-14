/*
Este módulo é responsável por descrever as tabelas do banco de dados.
Retorna um objeto com as tabelas.
*/

const database = require('./bd');
const Sequelize = database.Sequelize;

const Enderecos = database.sequelize.define('enderecos',{
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Agendas = database.sequelize.define('agendas',{
    codigo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    horario: {
        type: Sequelize.TIME,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigo_medico: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

const Funcionarios = database.sequelize.define('funcionarios', {
    codigo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_contrato: {
        type: Sequelize.DATE,
        allowNull: false
    },
    salario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    senha_hash: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Medicos = database.sequelize.define('medicos', {
    codigo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_contrato: {
        type: Sequelize.DATE,
        allowNull: false
    },
    salario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    senha_hash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    crm: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

const Pacientes = database.sequelize.define('pacientes', {
    codigo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_contrato: {
        type: Sequelize.DATE,
        allowNull: false
    },
    salario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    senha_hash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    peso: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    altura: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo_sanquineo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Especialidades = database.sequelize.define('especialidades',{
    codigo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {
    Agendas,
    Enderecos,
    Funcionarios,
    Medicos,
    Pacientes,
    Especialidades
}
