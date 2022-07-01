const lista = [
    {
        name: 'sabão em pó',
        preco: 5,
    },
    {
        name: 'pão',
        preco: 2,
    },
    {
        name: 'carne',
        preco: 17,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));