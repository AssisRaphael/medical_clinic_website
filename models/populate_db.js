const database = require('./database');

hashCode = function (s) {
    return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
}

const _medicos = [
    {
        nome: "Dr. Sophia Lara Elisa Assunção",
        email: "sophialara@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761250",
        logradouro: "Rua São Bernardo",
        bairro: "Terezinha",
        cidade: "Santa efigênnia",
        estado: "Bahia",
        data_contrato: "30-05-2001",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Renato Henrique Manoel Araújo",
        email: "renatohenrique@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50761210",
        logradouro: "Rua das Violetas",
        bairro: "Jardim Cuiabá",
        cidade: "Cuiabá",
        estado: "Mato Grosso",
        data_contrato: "25-12-1994",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Ortopedista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Matheus Ruan Gael da Paz",
        email: "matheusruan@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50714250",
        logradouro: "Rua Santa Marina",
        bairro: "Felipe Camarão",
        cidade: "Natal",
        estado: "Rio Grande do Norte",
        data_contrato: "11-11-1989",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Otorrinolaringologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Samuel Roberto Castro",
        email: "samuelcastro@alkbrasil.com.br",
        celular: "81983298535",
        cep: "79115350",
        logradouro: "Rua Itabepi",
        bairro: "Jardim Itapuã",
        cidade: "Campo Grande",
        estado: "Mato Groso do Sul",
        data_contrato: "21-05-1992",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Neurologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Lucca Julio Anthony das Neves",
        email: "lucaajulio@alkbrasil.com.br",
        celular: "81983298535",
        cep: "72710070",
        logradouro: "Área Especial 6",
        bairro: "Setor Norte (Brazlândia)",
        cidade: "Brasília",
        estado: "Distrito Federal",
        data_contrato: "02-01-2004",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Pediatra",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Luna Carla Ferreira",
        email: "elunacarla@alkbrasil.com.br",
        celular: "81983298535",
        cep: "12561250",
        logradouro: "Escadaria dos Figos",
        bairro: "Olaria",
        cidade: "Guarapari",
        estado: "Espirito Santo",
        data_contrato: "06-04-2007",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Ginecologista",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Beatriz Eliane Tatiane Martins",
        email: "beatrizeliane@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50147250",
        logradouro: "Rua Porto das Lagoas",
        bairro: "Residencial Buena Vista IV",
        cidade: "Goiânia",
        estado: "Goiás",
        data_contrato: "01-03-2002",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Psiquiatria",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Guilherme Isaac Ramos",
        email: "guilhermeisaac@alkbrasil.com.br",
        celular: "81983298535",
        cep: "57081453",
        logradouro: "Rua I-K",
        bairro: "Tabuleiro do Martins",
        cidade: "Maceió",
        estado: "Bahia",
        data_contrato: "30-05-2011",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Oncologia",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Augusto Hugo Sales",
        email: "augustoh@alkbrasil.com.br",
        celular: "81983298535",
        cep: "50778960",
        logradouro: "Rua Professora Jaçanã Altair",
        bairro: "Jardim Santo André",
        cidade: "São Paulo",
        estado: "São Paulo",
        data_contrato: "16-09-2007",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Dermatologia",
        crm: Math.floor(Math.random() * 258963147)
    },
    {
        nome: "Dr. Thiago Lucca Samuel Galvão",
        email: "thiagoL@alkbrasil.com.br",
        celular: "81983298535",
        cep: "49088485",
        logradouro: "Rua Sete",
        bairro: "Lamarão",
        cidade: "Aracaju",
        estado: "Bahia",
        data_contrato: "05-12-2000",
        salario: Math.random() * 5000,
        senha_hash: hashCode("senha123"),
        especialidade: "Cardiologista",
        crm: Math.floor(Math.random() * 258963147)
    }
];

function CadastrarMedicos() {
    for (medico of _medicos) {
        console.log("****" + medico)
        database.Medicos.create({
            nome: medico.nome,
            email: medico.email,
            telefone: medico.celular,
            cep: medico.cep,
            logradouro: medico.logradouro,
            bairro: medico.bairro,
            cidade: medico.cidade,
            estado: medico.estado,
            data_contrato: medico.data_contrato,
            salario: medico.salario,
            senha_hash: medico.senha_hash,
            especialidade: medico.especialidade,
            crm: medico.crm
        }).then(function () {
            console.log(`(${medico.nome}) - sucesso`)
        }).catch(function (erro) {
            console.log(`---- (${medico.nome}) - ERRO` + erro)
        })
    }
}

function CadastrarFuncionario() {
    database.Funcionarios.create({
        nome: "Funcionário master",
        email: "funcionariomaster@zizimed.com",
        telefone: "553198563214",
        cep: "79270971",
        logradouro: "Rua Principal",
        bairro: "Centro",
        cidade: "Caracol",
        estado: "MS",
        data_contrato: "08-05-2014",
        salario: 2500,
        senha_hash: hashCode("senha123"),
    }).then(function () {
        console.log(`sucesso`)
    }).catch(function (erro) {
        console.log(`---- ERRO` + erro)
    })
}

CadastrarFuncionario();
CadastrarMedicos();
