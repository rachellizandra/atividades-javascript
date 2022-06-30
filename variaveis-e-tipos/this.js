function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}
const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Pedro",
    idade: 23,
};

const animal = {
    nome: "Fiona",
    idade: 5,
    raça: "Pug",
};

//para Call:
console.log(calculaIdade.call(pessoa2, 30));

console.log(calculaIdade.call(pessoa1, 15));

console.log(calculaIdade.call(animal, 10));

//para apply: 
console.log(calculaIdade.apply(pessoa2, [25]));

console.log(calculaIdade.apply(pessoa1, [20]));

console.log(calculaIdade.apply(animal, [5]));