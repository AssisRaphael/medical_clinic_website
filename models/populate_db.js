const database = require('./database');

const _medicos = [
    {
        nome: "Dr. Sophia Lara Elisa Assunção",
        email: "sophialara@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Renato Henrique Manoel Araújo",
        email: "renatohenrique@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761210",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Matheus Ruan Gael da Paz",
        email: "matheusruan@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50714250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Samuel Roberto Castro",
        email: "samuelcastro@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761880",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Lucca Julio Anthony das Neves",
        email: "lucaajulio@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Luna Carla Ferreira",
        email: "elunacarla@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Beatriz Eliane Tatiane Martins",
        email: "beatrizeliane@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Guilherme Isaac Ramos",
        email: "guilhermeisaac@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Augusto Hugo Sales",
        email: "augustoh@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Thiago Lucca Samuel Galvão",
        email: "thiagoL@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "rua são bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: Math.floor(Math.random() * 258963147),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    }
];

function CadatsraMedicos() {
    console.log("hehe")
    for (medicos of _medicos) {
        console.log("****" + medicos)
        database.Medicos.create({
            nome: medicos.nome,
            email: medicos.email,
            telefone: medicos.celular,
            cep: medicos.cep,
            logradouro: medicos.logradouro,
            bairro: medicos.bairro,
            cidade: medicos.cidade,
            estado: medicos.estado,
            data_contrato: new Date("December 17, 1995 03:24:00"),
            salario: medicos.salario,
            senha_hash: medicos.senha_hash,
            especialidade: medicos.especialidade,
            crm: medicos.crm
        }).then(function () {
            console.log(`(${medicos.nome}) - sucesso`)
        }).catch(function (erro) {
            console.log(`---- (${medicos.nome}) - ERRO` + erro)
        })
    }
}

function CadatsraFuncionario() {
    database.Funcionarios.create({
        nome: "Funcionário master",
        email: "funcionariomaster@zizimed.com",
        telefone: "553198563214",
        cep: 79270971,
        logradouro: "Rua Principal, s/n",
        bairro: "Centro",
        cidade: "Caracol",
        estado: "MS",
        data_contrato: new Date("December 1, 2000 03:24:00"),
        salario: 2500,
        senha_hash: 1251475389,
    }).then(function () {
        console.log(`sucesso`)
    }).catch(function (erro) {
        console.log(`---- ERRO` + erro)
    })
}

CadatsraFuncionario();
//CadatsraMedicos();