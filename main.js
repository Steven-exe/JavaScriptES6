
    /*
        const arr = [1, 5, 3, 2, 6];

        const newArr = arr.map(function(item, index){
        return item+index;
        });

        console.log(newArr)

        const somaArr = arr.reduce(function(total, next) {
            return total+next;
        })

        console.log(somaArr);

        const filter = arr.filter(function(item){
            return item%2 === 0;
        })

        console.log(filter);

        const find = arr.find(function(item){
            return item === 6;
        });

        console.log(find)

        */

const usuario= {
    nome:'Estevan',
    idade:'20',
    endereco :{
        cidade: "brasilia",
        estado: "DF",
    },
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto)

const arr = [1,2,3,4];

const [a, b, ...c]= arr;

console.log(a)
console.log(b)
console.log(c)

function soma(a, b, ...params){
    return params;
}

console.log(soma(1, 2, 6,234));

// Spread

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)

const usuario1 = {
    nome: "Estevan",
    idade: 20,
    empresa: "Nenhuma",
};

usuario1.endereco="teste";

console.log(usuario1)

const dormindo = true;

const novo={
    dormindo,
    teste:"teste"
}

console.log(novo)
