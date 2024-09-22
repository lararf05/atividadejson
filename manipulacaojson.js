// Criação de um Objeto JSON
let aluno = {
    nome: "Elena",
    idade: 18,
    curso: "Medicina",
    notas: [9.5, 9.0, 9.0]
};

// Acesso a Propriedades
console.log(aluno.nome); 
console.log(aluno.notas[0]); 

// Modificação de Propriedades
aluno.idade = 22; 
aluno.notas.push(10.0); 

// Conversão para String
let alunoString = JSON.stringify(aluno);
console.log(alunoString); 

// Conversão para Objeto
let alunoObjeto = JSON.parse(alunoString);
console.log(alunoObjeto); 

// Iteração sobre Propriedades
for (let propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`);
}

// Cálculo da Média das Notas
let somaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
let mediaNotas = somaNotas / aluno.notas.length;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`); 

// Criação de um Objeto JSON Aninhado
aluno.endereco = {
    rua: "Av. Principal",
    cidade: "João Pessoa",
    estado: "PB"
};

// Acesso a Dados Aninhados
console.log(`Cidade: ${aluno.endereco.cidade}`); 
console.log(`Estado: ${aluno.endereco.estado}`); 

//  Lista de Alunos
let alunos = [
    {
        nome: "Dominic",
        idade: 22,
        curso: "Engenharia",
        notas: [7.5, 8.0, 9.0]
    },
    {
        nome: "Brian",
        idade: 20,
        curso: "Matemática",
        notas: [9.5, 8.0, 7.5]
    },
    {
        nome: "Roman",
        idade: 23,
        curso: "Física",
        notas: [6.0, 7.0, 9.0]
    }
];

//  Filtragem de Alunos
let alunosFiltrados = alunos.filter(aluno => {
    let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return media > 8;
});

console.log(alunosFiltrados); 
